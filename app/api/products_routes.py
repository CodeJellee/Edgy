from flask import Blueprint, request
from flask_login import current_user
from app.models import Product, User, Review, db
from .forms import Product, ProductImage
products_routes = Blueprint('products', __name__)


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
    product = Product.query.get(id).to_dict()
    reviewId = product["reviewId"]
    # reviews = Review.query.filter(Review.id == reviewId).all()
    # reviews = [r.to_dict for r in reviews]
    sellerId = product["sellerId"]
    seller = User.query.get(sellerId).to_dict()
    print("p:", product)
    # print("r:", reviews)
    print("s:", seller)

    return "hi"

@products_routes.route('/', methods=["POST"])
def create_product():
    form = ProductForm()
    if form.validate_on_submit():
        new_product = Product(
            item_name = form.data["item_name"]
            price = form.data["price"]
            category = form.data["category"]
            description = form.data["description"]
            quantity = form.data["quantity"]
            preview_imageURL = form.data["preview_imageURL"]
            sellerId = current_user.to_dict()["id"]
        )
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    return "Bad data"


@products_routes.route('/<int:id>/images', methods=["POST"])
def add_images(id)
    form = ProductForm()
    if form.validate_on_submit():
        new_product_image = Product(
            productId = id
            product_imageURL = form.data["product_imageURL"]
            sellerId = current_user.to_dict()["id"]
        )
        db.session.add(new_product_image)
        db.session.commit()
        return new_product_image.to_dict()
return "Bad data"


@products_routes.route('/<int:id>')
def delete_product(id)
    product = product = Product.query.get(id)
    db.session.delete(you)
    db.session.commit()
    return {

     "message": "Successfully deleted"

    }
