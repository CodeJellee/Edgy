from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Product, User, Review, ProductImage, db
from app.models.products import favorites
from app.forms import NewProduct, NewProductImage, NewReview
from sqlalchemy import insert

products_routes = Blueprint("products", __name__)


@products_routes.route("/")
def get_products():
    products = Product.query.all()
    products = [p.to_dict() for p in products]
    return {"Products": products}


# @login.user_loader
@products_routes.route("/current")
@login_required
def user_products():
    # grabs current user instance and turns it into a dic that keys into id
    userId = current_user.to_dict()["id"]
    user_products = Product.query.filter(Product.sellerId == userId).all()
    return {"Products": [p.to_dict() for p in user_products]}


@products_routes.route("/<int:id>")
def product_details(id):
    product = Product.query.get(id)
    if not product:
        return {"message": "Product couldn't be found"}
    product = product.to_dict()
    reviews = Review.query.filter(Review.productId == id).all()
    reviews = [r.to_dict() for r in reviews]
    sellerId = product["sellerId"]
    seller = User.query.get(sellerId).to_dict()
    product_images = ProductImage.query.filter(ProductImage.productId == id).all()
    product_images = [i.to_dict() for i in product_images]
    product["Reviews"] = reviews
    product["Seller"] = seller
    product["ProductImages"] = product_images
    return product


@products_routes.route("/", methods=["POST"])
@login_required
def create_product():
    form = NewProduct()
    print(form.data)
    # if form.validate_on_submit():
    new_product = Product(
        item_name=form.data["item_name"],
        price=form.data["price"],
        category=form.data["category"],
        description=form.data["description"],
        quantity=form.data["quantity"],
        preview_imageURL=form.data["preview_imageURL"],
        sellerId=current_user.to_dict()["id"],
    )
    db.session.add(new_product)
    db.session.commit()
    return new_product.to_dict()
    # return "Bad data"


@products_routes.route("/<int:id>/images", methods=["POST"])
@login_required
def add_images(id):
    form = ProductForm()
    # if form.validate_on_submit():
    new_product_image = Product(
        productId=id,
        product_imageURL=form.data["product_imageURL"],
        sellerId=current_user.to_dict()["id"],
    )
    db.session.add(new_product_image)
    db.session.commit()
    return new_product_image.to_dict()
    # return "Bad data"


@products_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_product(id):
    product = Product.query.get(id)
    if not product:
        return {"message": "Product couldn't be found"}
    db.session.delete(product)
    db.session.commit()
    return {"message": "Successfully deleted"}


# get all reviews by product id
@products_routes.route("/<int:id>/reviews")
def get_reviews(id):
    reviews = Review.query.filter(Review.productId == id).all()
    if not reviews:
        return {"message": "Product couldn't be found"}
    revs = []
    for r in reviews:
        r = r.to_dict()
        user = User.query.get(r["userId"]).to_dict()
        r["User"] = {
            "id": user["id"],
            "first_name": user["first_name"],
            "last_name": user["last_name"],
        }
        revs.append(r)

    return {"Reviews": revs}


@products_routes.route("/<int:id>/reviews", methods=["POST"])
@login_required
def create_review(id):
    product = Product.query.get(id)
    if not product:
        return {"message": "Product couldn't be found"}
    form = NewReview()
    print(form)
    # if form.validate_on_submit():
    new_review = Review(
        stars=form.data["stars"],
        review=form.data["review"],
        userId=current_user.to_dict()["id"],
        productId=id,
    )
    db.session.add(new_review)
    db.session.commit()
    return new_review.to_dict()


# POST - Favorite a Product
@products_routes.route("/<int:productId>", methods=["POST"])
@login_required
def post_favorite_item(productId):
    user_id = current_user.id
    # print(user_id)
    # print(productId)
    product_exists = Product.query.get(productId)
    # print(product_exists)
    if product_exists:
        add_user_favorite = insert(favorites).values(
            userId=user_id, productId=productId
        )
        db.session.execute(add_user_favorite)
        db.session.commit()
        return {"message": "You've successfully favorited this item."}
    else:
        return {"message": "Item couldn't be found"}
