from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Route(Base):
    __tablename__ = "routes"

    id = Column(Integer, primary_key=True, index=True)
    start_point = Column(String, index=True)
    destination = Column(String, index=True)
    predicted_transport = Column(String, index=True)