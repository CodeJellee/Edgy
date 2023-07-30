from app.models import db, environment, SCHEMA, Product, User
from sqlalchemy.sql import text


# Adds a product, you can add other products here if you want
def seed_products(users):
    products = [
        {
            "id": 1,
            "item_name": "Minh's PC",
            "price": 59999.99,
            "category": "Technology",
            "description": "This is a super PC",
            "quantity": 1,
            "preview_imageURL": "https://i.pinimg.com/originals/9f/0b/2f/9f0b2f1a33b6f4f4ec157152337ea296.jpg",
            "sellerId": 5,
        },
        {
            "id": 2,
            "item_name": "Jenny's uh... Mac",
            "price": 0.99,
            "category": "Technology",
            "description": "This is powered by a potato, but supercharged if Jenny uses it to DJ",
            "quantity": 1,
            "preview_imageURL": "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg",
            "sellerId": 6,
        },
        {
            "id": 3,
            "item_name": "Chris' Amazing Sound Package",
            "price": 299.99,
            "category": "Technology",
            "description": "This is a one of a life time deal",
            "quantity": 1,
            "preview_imageURL": "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/a868ad77-879d-40d7-8bed-dad04be63a15/f43af8aa-0309-40d6-a244-87b52d0ef5df/media._SL480_.jpeg",
            "sellerId": 4,
        },
        {
            "id": 4,
            "item_name": "Thandi's Rage",
            "price": 4.99,
            "category": "Technology",
            "description": "This is a super PC",
            "quantity": 1,
            "preview_imageURL": "https://thumbs.dreamstime.com/b/loud-speaker-icon-white-background-illustration-loud-speaker-icon-white-background-107356852.jpg",
            "sellerId": 7,
        },
    ]

    for product in products:
        each_product = Product(**product)
        print(each_product)
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
