from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import CartItem, Product, User, db
from app.models.products import favorites
from pprint import pprint

#url_prefix='/api/carts'

cart_routes = Blueprint('cart_items', __name__)

# @cart_routes.route('/shopping_cart', methods=["GET"])
# @login_required
# def get_cart_items():
#     cur_user = current_user.to_dict()
#     shopping_cart = {"Shopping_Cart": []}

#     #Retrieve cart products for the current user
#     cart_items = CartItem.query.filter(CartItem.userId == cur_user["id"]).all()

#     #Add the favorite products to the list
#     for item in cart_items:
#         product = Product.query.get(item.productId)
#         if product:
#             item_info = {
#                 "id": item.id,
#                 "userId": item.userId,
#                 "Products": {
#                     "id": product.id,
#                     "sellerId": product.sellerId,
#                     "itemName": product.itemName,
#                     "price": product.price,
#                     "description": product.description,
#                     "previewImage": product.preview_imageURL,
#                     "category": product.category
#                 },
#             }
#             shopping_cart["Shopping_Cart"].append(item_info)
#     return shopping_cart.to_dict()


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
        product = Product.query.get(item.productId)
        i["Product"] = product.to_dict()
        cart_products.append(i)
        # cart_products.append(product.to_dict())


    print(cart_products) #getting back an list of dict
    return {"Shopping_Cart": cart_products}



# @cart_routes.route('/shopping_cart', methods=["GET"])
# @login_required
# def get_cart_items():
#     cur_user = current_user.to_dict()
#     cart_products = {}
#     cart_products["Shopping_Cart"] = []
#     # cart_products["Product"] = {}
#     #Retrieve cart products for the current user
#     cart_items = CartItem.query.filter(CartItem.userId == cur_user["id"]).all()
#     cart_products["Shopping_Cart"] = cart_items

#     #Add the favorite products to the list
#     for item in cart_items:
#         item = item.to_dict()
#         # cart_products.append(item.to_dict())
#         product = Product.query.get(item.productId)
#         item["Product"] = product.to_dict()
#         del item["productId"]

#         # cart_products["Product"]= product.to_dict()


#     print(cart_products) #getting back an list of dict

#     return cart_products




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
