from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import pandas as pd
from pydantic import BaseModel
from backend.API.database import get_db, preprocess_data, ml_model
from backend.API.models_db import User
from backend.API.schemas_db import UserCreate
from backend.API.crud import get_user_by_username, create_user

router = APIRouter()

# Esquema de los datos de entrada
class RouteData(BaseModel):
    username: str
    password: str
    start_location: str
    destination: str

# Ruta para recibir los datos
@router.post("/submit_route/")
def submit_route(data: RouteData, db: Session = Depends(get_db)):
    # Convertir los datos de entrada en un diccionario
    data_dict = data.model_dump()
    
    # Preprocesar los datos
    start_location, destination = preprocess_data(data_dict['start_location'], data_dict['destination'])
    
    # Mapear los valores categóricos a los valores esperados por la base de datos
    data_dict['start_location'] = start_location
    data_dict['destination'] = destination
    
    # Verificar si los datos ya existen
    user = get_user_by_username(db, username=data_dict['username'])
    if user:
        raise HTTPException(status_code=400, detail="User already exists")
    
    # Crear una nueva instancia con los datos procesados
    user_in = UserCreate(**data_dict)
    create_user(db=db, user=user_in)
    
    return {"message": "Route data submitted successfully"}

# Ruta de prueba
@router.get("/test/")
def test_route():
    return {"message": "Test route is working"}

# Ruta para predecir un itinerario alternativo
@router.post("/predict_route/")
def predict_route(data: RouteData):
    # Convertir los datos de entrada en un diccionario
    data_dict = data.model_dump()
    
    # Preprocesar los datos
    start_location, destination = preprocess_data(data_dict['start_location'], data_dict['destination'])
    
    # Crear un DataFrame con los nombres de columna que el modelo espera
    df = pd.DataFrame([{
        'start_location': start_location,
        'destination': destination
    }])
    
    try:
        # Mostrar un mensaje de envío del DataFrame al modelo
        print("Enviando DataFrame al modelo para predicción...")
        
        # Realizar la predicción de ruta alternativa
        prediction = ml_model.predict(df)
        
        return {"alternative_route": prediction.tolist()}
    except Exception as e:
        # Manejar errores relacionados con la predicción
        raise HTTPException(status_code=500, detail=f"Error en la predicción: {str(e)}")
