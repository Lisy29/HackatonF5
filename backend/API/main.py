from fastapi import FastAPI, Depends, HTTPException
from backend.logging.logging_config import setup_logging
from sqlalchemy.orm import Session
from . import models_db, schemas_db
from database import engine, get_db
import joblib
import os
from dotenv import load_dotenv
import crud
import logging

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

models_db.Base.metadata.create_all(bind=engine)

setup_logging()

app = FastAPI()

MODEL_PATH = os.getenv("MODEL_PATH", "transport_model.pkl")
print(f"Trying to load model from: {MODEL_PATH}")

try:
    model = joblib.load(MODEL_PATH)
    print("Model loaded successfully")
except Exception as e:
    print(f"Error loading model: {str(e)}")
    model = None
    
@app.get("/")
def read_root():
    logging.getLogger(__name__).info("Root endpoint accessed")
    return {"message": "Hello World"}

@app.post("/submit_and_predict/", response_model=schemas_db.RoutePrediction)
def submit_and_predict(route: schemas_db.RouteCreate, db: Session = Depends(get_db)):
    logger.debug(f"Received route data: {route}")
    if model is None:
        logger.error("Model not loaded")
        raise HTTPException(status_code=500, detail="Model not loaded")

    try:
        # Preparar los datos para el modelo
        route_data = [
            [
                route.start_point,
                route.destination
            ]
        ]
        logger.debug(f"Prepared route data: {route_data}")

        prediction = model.predict(route_data)
        predicted_transport = prediction[0]
        logger.debug(f"Prediction: {predicted_transport}")
        
        # Crear el objeto de ruta con la predicción
        route_model_dump = route.model_dump()
        route_model_dump['predicted_transport'] = predicted_transport
        
        # Guardar en la base de datos
        db_route = crud.create_route_prediction(db=db, route=route, predicted_transport=predicted_transport)

        logger.debug("Route data saved to database")
        
        # Ensure that the returned object matches the response model
        return schemas_db.RoutePrediction(
            id=db_route.id,
            predicted_transport=predicted_transport,
            **route.model_dump()
        )
    except Exception as e:
        logger.exception("Error occurred during prediction or database operation")
        raise HTTPException(status_code=500, detail=f"Error making prediction: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)