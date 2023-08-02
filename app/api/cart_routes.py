from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import CartItem, Product, User, db
from sqlalchemy import insert
from pprint import pprint

#url_prefix='/api/carts'

cart_routes = Blueprint('cart_items', __name__)

@cart_routes.route('/shopping_cart', methods=["GET"])
@login_required
def get_cart_items():
    cur_user = current_user.to_dict()
    cart_products = []

    #Retrieve cart products for the current user
    cart_items = CartItem.query.filter(CartItem.userId == cur_user["id"]).all()
    #Add the favorite products to the list
    for item in cart_items:
        # print("this is item", item.to_dict()) #{'id': 7, 'productId': 3, 'userId': 6}
        i = item.to_dict()
        del i["productId"]
        product = Product.query.get(item.productId)
        i["Product"] = product.to_dict()
        cart_products.append(i)
        # cart_products.append(product.to_dict())


    print(cart_products) #getting back an list of dict
    return {"Shopping_Cart": cart_products}



#need to be in the products route
# @cart_routes.route('/<int:productId>/add_to_cart', methods=["POST"])
# @login_required
# def post_cart_items(productId):
#     cur_user = current_user.to_dict()
#     product_exists = Product.query.get(productId)

#     #Edge Cases
#     if product_exists and cur_user["id"] == product_exists.sellerId:
#         return {"message": "You may not add to cart your own product."}

#     if product_exists and product_exists.sellerId != cur_user["id"]:
#         add_to_cart = insert(CartItem).values(
#             userId=cur_user,
#             productId=productId
#         )
#         db.session.execute(add_to_cart)
#         db.session.commit()
#         return {"message": "You've successfully added this item to cart."}
#     else:
#         return {"message": "Item couldn't be found"}



@cart_routes.route('/shopping_cart/<int:productId>', methods=["DELETE"])
@login_required
def delete_cart_item(productId):
    item = Product.query.get(productId)
    if not item:
        return {
            "message": "Item couldn't be found"
        }
    db.session.delete(item)
    db.session.commit()
    return {
        "message": "Successfully deleted"
    }
