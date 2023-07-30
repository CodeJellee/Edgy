from flask import Blueprint
from flask_login import login_required, current_user
from app.models.products import favorites

# prefix='/api/favorites'
favorites_routes = Blueprint("favorites", __name__)


# Get Current User's Favorite Items
@favorites_routes.route("/current")
@login_required
def get_current_favorites():
    # cur_userId = current_user.to_dict()["id"]
    # cur_fav = favorites.query.all()
    # print(cur_fav)
    return "<h1>cookies suck, and we currently have no seeder data</h1>"


# Delete Favorite
@favorites_routes.route("/<int:productId>")
def del_favorite_by_id():
    return "<h1>Delete Favorite Item for Current User</h1>"
