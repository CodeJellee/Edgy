from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Product, User, Review, ProductImage, db, CartItem
from app.models.products import favorites
from app.forms import NewProduct, NewProductImage, NewReview
from sqlalchemy import insert
from pprint import pprint

products_routes = Blueprint("products", __name__)


#prefix /products

@products_routes.route("/")
def get_products():


    dictToPass = {}
    products = Product.query.all()
    products = [p.to_dict() for p in products]
    dictToPass["Products"] = products

    for product in products:
        reviews = Review.query.filter(Review.productId == product["id"])
        reviews = [review.to_dict() for review in reviews ]
        seller = User.query.get(product["sellerId"])
        seller = seller.to_dict()
        product["Reviews"] = reviews
        product["Seller"] = seller

    return dictToPass


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


@products_routes.route("/new", methods=["POST"])
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
    product_exists = Product.query.get(productId)
    user = User.query.get(user_id)

    # ! Edge Case for Postman
    existing_favorite = (
        db.session.query(favorites)
        .filter((favorites.c.userId == user_id) & (favorites.c.productId == productId))
        .first()
    )
    if existing_favorite:
        return {"message": "You have already favorited this product."}

    # check if the user owns the product (userId = sellerId)
    if product_exists and user_id == product_exists.sellerId:
        return {"message": "You may not favorite your own product."}

    print("this is the product_exists", product_exists)
    if product_exists and product_exists.sellerId != user_id:
        add_user_favorite = insert(favorites).values(
            userId=user_id, productId=productId
        )
        db.session.execute(add_user_favorite)
        db.session.commit()
        # Not returning a 'message' here bc we need user/product data for the frontend
        return {
            "Product": product_exists.to_dict(),
            "User": user.to_dict(),
        }
    else:
        return {"message": "Item couldn't be found"}


#POST: add item to cart
@products_routes.route('/<int:productId>/add_to_cart', methods=["POST"])
@login_required
def post_cart_items(productId):
    cur_user = current_user.to_dict()
    # print("CURRENT USER", cur_user)
    product_exists = Product.query.get(productId)
    # print("PRODUCT", product_exists.sellerId)

    #Edge Cases
    if product_exists and cur_user["id"] == product_exists.sellerId:
        return {"message": "You may not add your own product to your cart."}

    if product_exists and product_exists.sellerId != cur_user["id"]:
        add_to_cart = CartItem(
            userId=cur_user["id"],
            productId=productId
        )
        db.session.add(add_to_cart)
        db.session.commit()
        return {"message": "You've successfully added this item to cart."}
    else:
        return {"message": "Item couldn't be found"}
