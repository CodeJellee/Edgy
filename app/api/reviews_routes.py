from flask import Blueprint
from ..models import Review, Product, db
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

    for review in reviews:

        # print(review["productId"], "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        product = Product.query.filter(Product.id == review["productId"]).first()
        product = product.to_dict()
        del product["updatedAt"]
        del product["createdAt"]
        # del review.productId
        product["previewImageURL"] = product["preview_imageURL"]
        del product["preview_imageURL"]
        del review["productId"]

        review["Product"] = product
        pprint(review)

    returnItem = {"Reviews": reviews,
                  "User": {
                      "id": cur_user["id"],
                      "firstName": cur_user["first_name"],
                      "lastName": cur_user["last_name"],
                  }
                  }
    # pprint(returnItem)
    # SimplePerson.query.filter(SimplePerson.name.startswith("M")).all()


    # products = Product.to_dict().all()
    return returnItem



# @reviews_routes.route("/<int:reviewId>", methods=[''])
# def post_product_review():
#     # form = ProductForm()
#     print("in ...reviews/current")
#     # products = Product.to_dict().all()
#     return "hi"
