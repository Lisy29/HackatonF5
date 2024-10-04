import logging
from sqlalchemy import create_engine
from backend.API.models_db import Base
from backend.API.database import SQLALCHEMY_DATABASE_URL

logger = logging.getLogger(__name__)

engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Crear todas las tablas
Base.metadata.create_all(bind=engine)
logger.info("Database migration completed")