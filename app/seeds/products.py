from app.models import db, environment, SCHEMA, Product
from sqlalchemy.sql import text


# Adds a product, you can add other products here if you want
def seed_products():
    products = [
        {
            "id": 1,
            "item_name": "Minh's PC",
            "price": 59999.99,
            "category": "Technology",
            "description": "This is a super PC",
            "quantity": 1,
            "preview_imageURL": "https://i.pinimg.com/originals/9f/0b/2f/9f0b2f1a33b6f4f4ec157152337ea296.jpg",
            # reviewId = not required
            "sellerId": 5,
        }
    ]

    for product in products:
        each_product = Product.to_dict(product)
        db.session.add(each_product)
        db.session.commit()
    return products


# Uses a raw SQL query to TRUNCATE or DELETE the products table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
