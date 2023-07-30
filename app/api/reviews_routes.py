from flask import Blueprint
from ..models import Review, Product, db
# from ..forms import ProductForm
from pprint import pprint

from flask_login import current_user, login_required
reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route("/current", methods=['GET'])
@login_required
def post_product_review():
    cur_user = current_user.to_dict()
    pprint(cur_user)

    reviews = Review.query.filter(Review.userId == cur_user["id"]).all()
    reviewsTest = Review.query.filter(Review.userId == cur_user["id"]).first()
    reviewsTest.to_dict()
    print("bye this is before the review query========================= ", reviewsTest)
    pprint(reviewsTest)
    reviews = [review.to_dict_noUpdated() for review in reviews]
    print("hi")
    pprint(reviews[0])
    for review in reviews:

        product = Product.query.filter(Product.id == review["productId"]).first()
        product = product.to_dict()
        del product["updatedAt"]
        del product["createdAt"]
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

    return returnItem



@reviews_routes.route("/<int:reviewId>", methods=['DELETE'])
@login_required
def delete_review(reviewId):
    cur_user = current_user.to_dict()
    review = Review.query.filter(Review.id == reviewId).first()
    # review = review.to_dict()
    pprint(review)

    try:
        db.session.delete(review)
        db.session.commit()

        return"successfully deleted"
    except:
        return {"error": "review not found"}
    # delete(Review).where(Review.)
