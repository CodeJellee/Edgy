from flask import Blueprint
from flask_login import login_required, current_user
from app.models.products import favorites
from pprint import pprint
from app.models.db import db
from app.models.user import User

# prefix='/api/favorites'
favorites_routes = Blueprint("favorites", __name__)


# Get Current User's Favorite Items
@favorites_routes.route("/current")
@login_required
def get_current_favorites():
    curr_user_id = current_user.id
    user = User.query.get(curr_user_id)

    # this returns an array
    # user_favorited_product_ids = [product.id for product in user.products]

    # this returns a dictionary of the id and item name
    user_favorited_product_ids = {
        product.id: product.item_name for product in user.products
    }

    return user_favorited_product_ids


# Delete Favorite
@favorites_routes.route("/<int:productId>")
def del_favorite_by_id():
    return "<h1>Delete Favorite Item for Current User</h1>"
