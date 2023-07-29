from flask import Blueprint
from flask_login import login_required
from app.models import CartItem

cart_routes = Blueprint('cart_items', __name__)
