from flask import Blueprint, request
from flask_login import current_user
from app.models import Product, User
# from .. import login
# from ..app import login


@products_routes.route("/")
def get_products():
    products = Product.query.all()
    products = [p.to_dict() for p in products]
    return {"Products": products}


# @login.user_loader
@products_routes.route("/current")
def user_products():
    # grabs current user instance and turns it into a dic that grabs the id
    userId = current_user.to_dict()["id"]
    user_products = Product.query.filter(Product.sellerId == userId).all()
    return {

        "Products": [p.to_dict() for p in user_products]

    }

@products_routes.route('/<int:id>')
def product_details(id):
    product = Product.query.get(id)
    return "hi"
