from app.models import db, environment, SCHEMA, Product, User, Review
from sqlalchemy.sql import text

def seed_reviews(user, product):
    reviews = [
        {
            "id": 1,
            "stars": 3,
            "userId": 3,
            "productId": 1,
            "review": "PC was okay, could be faster..."
        },
        {
            "id": 2,
            "stars": 5,
            "userId": 4,
            "productId": 2,
            "review": "Mack is best!"
        },
        {
            "id": 3,
            "stars": 1,
            "userId":1,
            "productId": 3,
            "review": "Great sound package!"
        },
        {
            "id": 4,
            "stars": 2,
            "userId":2,
            "productId": 4,
            "review": "Rage rage rage!"
        },
    ]

    for review in reviews:
        each_review = Review(**review)
        print(each_review)
        db.session.add(each_review)
        db.session.commit()
    return reviews


# Uses a raw SQL query to TRUNCATE or DELETE the products table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
