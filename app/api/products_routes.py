from flask import Blueprint
from flask_login import login_required
from app.models import Product, User
from ..app import login

products_routes = Blueprint('products', __name__)

@products_routes.route("/")
def get_products():
    products = Product.query.all()
    products = [p.to_dict() for p in products]
    return {

        "Products": products

        }

@products_routes.route("/")
def user_products():
