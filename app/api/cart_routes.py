from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import CartItem, Product, User, db
from app.models.products import favorites
from pprint import pprint

#url_prefix='/api/carts'

cart_routes = Blueprint('cart_items', __name__)

@cart_routes.route('/shopping_cart', methods=["GET"])
@login_required
def get_cart_items():
    cur_user = current_user.to_dict()
    cart_products = []

    #Retrieve cart products for the current user
    cart_items = CartItem.query.filter(CartItem.userId == cur_user["id"]).all()

    #Add the favorite products to the list
    for item in cart_items:
        cart_products.append(item.to_dict())

    print(cart_products)
    # for favorite in favorites:
    #     favorites = Product.query.all(cur_user["id"] == favorites.userId).all()
    #     print(favorite)
    return "<h1>Shopping Cart Page</h1>"


@cart_routes.route('/shopping_cart/<int:productId>', methods=["DELETE"])
@login_required
def delete_cart_item(productId):
    item = Product.query.get(productId)
    if not item:
        return {
            "message": "Item couldn't be found"
        }
    db.session.delete(item)
    db.session.commit()
    return {
        "message": "Successfully deleted"
    }
