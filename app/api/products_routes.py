from flask import Blueprint
from flask_login import login_required
from app.models import Product

products_routes = Blueprint('products', __name__)

# @products_routes("")
# def get_products():
#     products = Product.to_dict().all()
#     return products
