from sqlalchemy.orm import Session
from . import models, schemas
from fastapi import HTTPException


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(username=user.username, hashed_password=user.hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.User).offset(skip).limit(limit).all()


def update_user(db: Session, user_id: int, user: schemas.UserUpdate):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db_user.username = user.username
    db_user.hashed_password = user.hashed_password
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(db_user)
    db.commit()


def create_route(db: Session, route: schemas.RouteCreate, user_id: int):
    db_route = models.Route(**route.dict(), user_id=user_id)
    db.add(db_route)
    db.commit()
    db.refresh(db_route)
    return db_route


def get_route(db: Session, route_id: int):
    return db.query(models.Route).filter(models.Route.id == route_id).first()


def get_routes_by_user(db: Session, user_id: int, skip: int = 0, limit: int = 10):
    return db.query(models.Route).filter(models.Route.user_id == user_id).offset(skip).limit(limit).all()


def update_route(db: Session, route_id: int, route: schemas.RouteUpdate):
    db_route = db.query(models.Route).filter(models.Route.id == route_id).first()
    if db_route is None:
        raise HTTPException(status_code=404, detail="Route not found")
    db_route.origin = route.origin
    db_route.destination = route.destination
    db_route.transport_mode = route.transport_mode
    db.commit()
    db.refresh(db_route)
    return db_route


def delete_route(db: Session, route_id: int):
    db_route = db.query(models.Route).filter(models.Route.id == route_id).first()
    if db_route is None:
        raise HTTPException(status_code=404, detail="Route not found")
    db.delete(db_route)
    db.commit()