from flask import Blueprint
from flask_login import login_required
from ..models import Review, db
# from ..forms import ProductForm

reviews_routes = Blueprint('reviews', __name__)


# @reviews_routes.routes("/current")
# @login_required
# def get_users_reviews():
#     print("in ...reviews/current")
#  
#     return "hi"



# @reviews_routes.routes("/<Int:productId>/reviews")
# def get_product_reviews():
#     print("in ...reviews/current")
#
#     return "hi"


# @reviews_routes.routes("/<Int:productId>/reviews", methods=['GET'])
# def post_product_review():
#     # form = ProductForm()
#     print("in ...reviews/current")
#
#     return "hi"


# @reviews_routes.routes("/<Int:productId>/reviews", methods=['POST'])
# def post_product_review():
#     # form = ProductForm()
#     print("in ...reviews/current")
#
#     return "hi"




@reviews_routes.routes("/<Int:reviewId>", methods=['PUT'])
def post_product_review():
    # form = ProductForm()
    print("in ...reviews/current")
    # products = Product.to_dict().all()
    return "hi"



@reviews_routes.routes("/<Int:reviewId>", methods=[''])
def post_product_review():
    # form = ProductForm()
    print("in ...reviews/current")
    # products = Product.to_dict().all()
    return "hi"
