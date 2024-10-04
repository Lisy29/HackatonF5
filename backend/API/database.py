import logging
import os
import joblib
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

logger = logging.getLogger(__name__)

# Configuración de la base de datos
SQLALCHEMY_DATABASE_URL = "sqlite:///./data/sql_app.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Definición del modelo de la base de datos
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    start_location = Column(String)
    destination = Column(String)

# Crear la tabla si no existe
Base.metadata.create_all(bind=engine)
logger.info("Database tables created")

# Cargar el modelo de machine learning entrenado
MODEL_PATH = "data/ml_model.pkl"
if os.path.exists(MODEL_PATH):
    ml_model = joblib.load(MODEL_PATH)
    logger.info("Machine learning model loaded")
else:
    ml_model = None  # Manejar el caso en que el modelo no exista
    logger.warning("Machine learning model not found")

# Función para estandarizar y preprocesar los datos
def preprocess_data(start_location: str, destination: str) -> tuple:
    def clean_string(s: str) -> str:
        return s.strip().lower()

    start_location = clean_string(start_location)
    destination = clean_string(destination)

    # Aquí puedes agregar más lógica para manejar casos poco ortodoxos
    # Por ejemplo, corregir errores comunes de escritura, etc.

    return start_location, destination

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        logger.info("Database session closed")