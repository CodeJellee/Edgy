from flask import Blueprint
from flask_login import login_required
from ..models import Review, User, db
# from ..forms import ProductForm
from flask_login import current_user, login_required
from pprint import pprint

reviews_routes = Blueprint('reviews', __name__)


# !!!!!!!!!!!!!!!!!!!! NEED TO ADD PRODUCT STILL
@reviews_routes.route("/current", methods=['GET'])
@login_required
def post_product_review():
    cur_user = current_user.to_dict()
    pprint(cur_user)

    reviews = Review.query.filter(Review.userId == cur_user["id"]).all()
    reviews = [review.to_dict() for review in reviews]
    # user = User.query.filter(User.email == form.data['email']).first()
    returnItem = {"Reviews": reviews,
                  "User": {
                      "id": cur_user["id"],
                      "firstName": cur_user["first_name"],
                      "lastName": cur_user["last_name"],
                  }
                  }
    pprint(returnItem)
    # SimplePerson.query.filter(SimplePerson.name.startswith("M")).all()


    # products = Product.to_dict().all()
    return "hi"



# @reviews_routes.route("/<int:reviewId>", methods=[''])
# def post_product_review():
#     # form = ProductForm()
#     print("in ...reviews/current")
#     # products = Product.to_dict().all()
#     return "hi"
