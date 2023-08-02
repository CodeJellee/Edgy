from app.models import db, environment, SCHEMA, Product, User, Review
from sqlalchemy.sql import text


def seed_reviews(user, product):
    reviews = [
        {
            "id": 1,
            "stars": 3,
            "userId": 3,
            "productId": 1,
            "review": "PC was okay, could be faster...",
        },
        {"id": 2,
         "stars": 5,
         "userId": 4,
         "productId": 2,
         "review": "seller is best!"},
        {
            "id": 3,
            "stars": 1,
            "userId": 1,
            "productId": 3,
            "review": "Great sound package!",
        },
        {"id": 4,
         "stars": 2,
         "userId": 2,
         "productId": 4,
         "review": "Rage rage rage!"},
        {
        "id": 5,
        "stars": 4,
        "userId": 5,
        "productId": 3,
        "review": "Great product, highly recommended!"
        },
        {
        "id": 6,
        "stars": 5,
        "userId": 8,
        "productId": 2,
        "review": "Awesome, exceeded my expectations!"
        },
        {
        "id": 7,
        "stars": 3,
        "userId": 2,
        "productId": 1,
        "review": "Not bad, but could be improved."
        },
        {
        "id": 8,
        "stars": 9,
        "userId": 9,
        "productId": 5,
        "review": "Outstanding service and product quality!"
        },
        {
        "id": 10,
        "stars": 4,
        "userId": 7,
        "productId": 3,
        "review": "Satisfied with my purchase."
        },
        {
        "id": 11,
        "stars": 2,
        "userId": 1,
        "productId": 4,
        "review": "Not happy with the product, low quality."
        },
        {
        "id": 12,
        "stars": 5,
        "userId": 6,
        "productId": 1,
        "review": "The best in the market!"
        },
        {
        "id": 13,
        "stars": 4,
        "userId": 3,
        "productId": 5,
        "review": "Good value for the price."
        },
        {
        "id": 14,
        "stars": 5,
        "userId": 4,
        "productId": 2,
        "review": "Absolutely love it!"
        },
        {
        "id": 15,
        "stars": 3,
        "userId": 2,
        "productId": 4,
        "review": "Average product, nothing special."
        },
        {
  "id": 16,
  "stars": 4,
  "userId": 6,
  "productId": 20,
  "review": "Impressive quality, worth the price."
},
        {
  "id": 17,
  "stars": 5,
  "userId": 2,
  "productId": 55,
  "review": "Highly recommend this product!"
},{
  "id": 18,
  "stars": 3,
  "userId": 4,
  "productId": 12,
  "review": "Decent product, but not exceptional."
},{
  "id": 19,
  "stars": 5,
  "userId": 3,
  "productId": 32,
  "review": "Mack's products never disappoint!"
},{
  "id": 20,
  "stars": 2,
  "userId": 7,
  "productId": 79,
  "review": "Unsatisfactory experience, won't buy again."
},{
  "id": 21,
  "stars": 5,
  "userId": 5,
  "productId": 15,
  "review": "Absolutely love this item! Best purchase ever."
},{
  "id": 22,
  "stars": 4,
  "userId": 1,
  "productId": 41,
  "review": "Great value for money."
},{
  "id": 23,
  "stars": 3,
  "userId": 2,
  "productId": 6,
  "review": "Average product, not bad but not outstanding either."
},{
  "id": 24,
  "stars": 5,
  "userId": 4,
  "productId": 77,
  "review": "Exceeded my expectations, well done!"
},
{
  "id": 25,
  "stars": 4,
  "userId": 3,
  "productId": 29,
  "review": "Very satisfied with the purchase."
},
{
  "id": 26,
  "stars": 4,
  "userId": 6,
  "productId": 20,
  "review": "This product is so good, I started talking to my toaster as if it's my new best friend. Highly recommended!"
},
{
  "id": 27,
  "stars": 5,
  "userId": 2,
  "productId": 55,
  "review": "I'm not saying this product is magical, but ever since I bought it, my plants have been growing with British accents. Brilliant purchase!"
},{
  "id": 28,
  "stars": 3,
  "userId": 4,
  "productId": 12,
  "review": "This thing is like a relationship status on Facebook - it's complicated. Good, but not life-changing."
},{
  "id": 29,
  "stars": 5,
  "userId": 3,
  "productId": 32,
  "review": "I'm convinced Mack's products are made with a sprinkle of pixie dust and a touch of unicorn magic. Perfection!"
},{
  "id": 30,
  "stars": 2,
  "userId": 7,
  "productId": 79,
  "review": "If this product were a movie, it would be a B-list romantic comedy - some may find it endearing, but I'm just not feeling the chemistry."
},{
  "id": 31,
  "stars": 5,
  "userId": 5,
  "productId": 15,
  "review": "This item is like finding a secret treasure chest in the attic. Pure excitement and joy! Don't miss out!"
},{
  "id": 32,
  "stars": 4,
  "userId": 1,
  "productId": 41,
  "review": "I bought this on a whim, and now it's my new sidekick. Batman, step aside, we've got a new hero in town!"
},{
  "id": 33,
  "stars": 3,
  "userId": 2,
  "productId": 6,
  "review": "This product is like a car that starts in the winter - it gets the job done, but there's always a little struggle."
},{
  "id": 34,
  "stars": 5,
  "userId": 4,
  "productId": 77,
  "review": "I don't usually give five stars, but this product is like a fluffy cloud that brings sunshine and rainbows to my life. Absolute bliss!"
},{
  "id": 35,
  "stars": 4,
  "userId": 3,
  "productId": 29,
  "review": "This purchase was like discovering the hidden cheat code in a video game - it elevated my experience to a whole new level!"
},
{
  "id": 36,
  "stars": 1,
  "userId": 6,
  "productId": 20,
  "review": "This product is a disaster! I'd rather communicate with a brick wall than deal with this garbage. Total waste of money!"
},

{
  "id": 37,
  "stars": 2,
  "userId": 2,
  "productId": 55,
  "review": "Not impressed at all. I ordered this product with high hopes, but it was a letdown. Save your money and skip this one!"
},{
  "id": 38,
  "stars": 1,
  "userId": 4,
  "productId": 12,
  "review": "Honestly, I'm baffled by the positive reviews. This thing is garbage, and it's a shame I wasted my hard-earned money on it!"
},{
  "id": 39,
  "stars": 2,
  "userId": 3,
  "productId": 32,
  "review": "Don't fall for the hype! This product is all marketing and no substance. It's as useful as a screen door on a submarine!"
},{
  "id": 40,
  "stars": 1,
  "userId": 7,
  "productId": 79,
  "review": "Avoid this product like the plague! I've never been so disappointed in my life. If I could give it zero stars, I would!"
},{
  "id": 41,
  "stars": 2,
  "userId": 5,
  "productId": 15,
  "review": "What a joke! This item broke within a week. I should have flushed my money down the toilet instead - it would have been more rewarding!"
},{
  "id": 42,
  "stars": 1,
  "userId": 1,
  "productId": 41,
  "review": "This product is terrible, and the customer service is worse. It's like dealing with a swarm of angry bees. Stay away!"
},{
  "id": 43,
  "stars": 2,
  "userId": 2,
  "productId": 6,
  "review": "The only thing worse than this product is the feeling of regret after buying it. Save yourself the headache and buy something else!"
},{
  "id": 44,
  "stars": 1,
  "userId": 4,
  "productId": 77,
  "review": "Do yourself a favor and run in the opposite direction! This product is an insult to common sense. I demand a refund!"
},{
  "id": 45,
  "stars": 2,
  "userId": 3,
  "productId": 29,
  "review": "I have no idea why anyone would give this product more than one star. It's a disappointment of epic proportions!"
},{
  "id": 46,
  "stars": 5,
  "userId": 6,
  "productId": 20,
  "review": "Wow! This product is a game-changer. It exceeded my expectations in every way. I'm thrilled with my purchase!"
},
{
  "id": 47,
  "stars": 4,
  "userId": 2,
  "productId": 55,
  "review": "I'm impressed! This product delivers on its promises. It's a great addition to my daily routine."
},

{
  "id": 48,
  "stars": 5,
  "userId": 4,
  "productId": 12,
  "review": "Incredible! This thing is worth every penny. It's like having my own personal assistant."
},{
  "id": 49,
  "stars": 4,
  "userId": 3,
  "productId": 32,
  "review": "I'm pleasantly surprised! This product actually works as advertised. It's a real game-changer!"
},{
  "id": 50,
  "stars": 5,
  "userId": 7,
  "productId": 79,
  "review": "Impressed beyond words! This product is top-notch, and the results speak for themselves. A must-have!"
},{
  "id": 51,
  "stars": 5,
  "userId": 5,
  "productId": 15,
  "review": "Amazing find! This item is a gem. I can't believe I lived without it. It's now an essential part of my life!"
},{
  "id": 52,
  "stars": 4,
  "userId": 1,
  "productId": 41,
  "review": "Very pleased! This product delivers on all fronts. It's reliable and performs exceptionally well."
},{
  "id": 53,
  "stars": 5,
  "userId": 2,
  "productId": 6,
  "review": "Great buy! This product has improved my life in countless ways. I can't recommend it enough!"
},{
  "id": 54,
  "stars": 4,
  "userId": 4,
  "productId": 77,
  "review": "Highly satisfied! This product is a true gem. I'm glad I took a chance on it."
},{
  "id": 55,
  "stars": 5,
  "userId": 3,
  "productId": 29,
  "review": "Absolutely love it! This purchase has been a game-changer for me. I couldn't be happier!"
}











































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
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
