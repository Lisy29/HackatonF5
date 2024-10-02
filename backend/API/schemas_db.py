from pydantic import BaseModel
from typing import Optional

class RouteBase(BaseModel):
    start_point: str
    destination: str

class RouteCreate(RouteBase):
    pass

class RoutePrediction(RouteBase):
    id: int
    predicted_transport: str

    class Config:
        orm_mode = True