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

    # The FINAL Form
    if user.products:
        user_favorited_products = {
            "Favorites": {
                "User": user.to_dict(),
                # Including all the kvp BESIDES 'updatedAt'
                "Products": [
                    {k: v for k, v in product.to_dict().items() if k != "updatedAt"}
                    for product in user.products
                ],
            }
        }
        return user_favorited_products
    return {"message": "Favorites couldn't be found"}


# Delete Favorite
@favorites_routes.route("/<int:productId>", methods=["DELETE"])
@login_required
def del_favorite_by_id(productId):
    user_id = current_user.id

    # this is the delete condition that will execute if true
    delete_condition = favorites.delete().where(
        (favorites.c.userId == user_id) & (favorites.c.productId == productId)
    )
    res = db.session.execute(delete_condition)
    db.session.commit()

    # This checks if any row was affected
    if res.rowcount > 0:
        return {"message": f"Favorite item with ID {productId} deleted successfully."}
    else:
        return {
            "error": f"Favorite item with ID {productId} not found for the user."
        }, 404
