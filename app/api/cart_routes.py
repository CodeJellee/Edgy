from flask import Blueprint
from flask_login import login_required, current_user
from app.models import CartItem, Product, User, db
from app.models.products import favorites
from pprint import pprint

#url_prefix='/api/carts'

cart_routes = Blueprint('cart_items', __name__)

@cart_routes.route('/shopping_cart', methods=["GET"])
@login_required
def get_cart_items():
    # cur_user = current_user.to_dict()
    # pprint(cur_user)
    return "<h1>Shopping Cart Page</h1>"

    # favorites = Product.query.all(cur_user["id"] == favorites.userId).all()
    # for favorite in favorites:
    #     print(favorite)


@cart_routes.route('/shopping_cart/<int:productId>', methods=["DELETE"])
@login_required
def delete_cart_item():
    return {
        "message": "Successfully deleted"
    }
#if cant find item: "message": "Item couldn't be found" --> do we need this?
