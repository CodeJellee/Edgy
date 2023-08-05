from app.models import db, environment, SCHEMA, Product, User, Review
from sqlalchemy.sql import text


def seed_reviews(user, product):
    reviews = [
        {
            # "id": 1,
            "stars": 3,
            "userId": 3,
            "productId": 1,
            "review": "PC was okay, could be faster...",
        },
        {
          # "id": 2,
         "stars": 5,
         "userId": 4,
         "productId": 2,
         "review": "seller is best!"},
        {
            # "id": 3,
            "stars": 1,
            "userId": 1,
            "productId": 3,
            "review": "Great sound package!",
        },
        {
          # "id": 4,
         "stars": 2,
         "userId": 2,
         "productId": 4,
         "review": "Rage rage rage!"},
        {
        # "id": 5,
        "stars": 4,
        "userId": 5,
        "productId": 3,
        "review": "Great product, highly recommended!"
        },
        {
        # "id": 6,
        "stars": 5,
        "userId": 7,
        "productId": 2,
        "review": "Awesome, exceeded my expectations!"
        },
        {
        # "id": 7,
        "stars": 3,
        "userId": 2,
        "productId": 1,
        "review": "Not bad, but could be improved."
        },
        {
        # "id": 8,
        "stars": 9,
        "userId": 1,
        "productId": 5,
        "review": "Outstanding service and product quality!"
        },
        {
        # "id":9,
        "stars": 5,
        "userId": 6,
        "productId": 80,
        "review": "Incredible find! This product has exceeded my expectations and my wildest dreams."
        },
        {
        # "id": 10,
        "stars": 4,
        "userId": 7,
        "productId": 3,
        "review": "Satisfied with my purchase."
        },
        {
        # "id": 11,
        "stars": 2,
        "userId": 1,
        "productId": 4,
        "review": "Not happy with the product, low quality."
        },
        {
        # "id": 12,
        "stars": 5,
        "userId": 6,
        "productId": 1,
        "review": "The best in the market!"
        },
        {
        # "id": 13,
        "stars": 4,
        "userId": 3,
        "productId": 5,
        "review": "Good value for the price."
        },
        {
        # "id": 14,
        "stars": 5,
        "userId": 4,
        "productId": 2,
        "review": "Absolutely love it!"
        },
        {
        # "id": 15,
        "stars": 3,
        "userId": 2,
        "productId": 4,
        "review": "Average product, nothing special."
        },
#         {
#   "id": 16,
#   "stars": 4,
#   "userId": 6,
#   "productId": 20,
#   "review": "Impressive quality, worth the price."
# },
#         {
#   "id": 17,
#   "stars": 5,
#   "userId": 2,
#   "productId": 55,
#   "review": "Highly recommend this product!"
# },{
#   "id": 18,
#   "stars": 3,
#   "userId": 4,
#   "productId": 12,
#   "review": "Decent product, but not exceptional."
# },{
#   "id": 19,
#   "stars": 5,
#   "userId": 3,
#   "productId": 32,
#   "review": "Mack's products never disappoint!"
# },{
#   "id": 20,
#   "stars": 2,
#   "userId": 7,
#   "productId": 79,
#   "review": "Unsatisfactory experience, won't buy again."
# },{
#   "id": 21,
#   "stars": 5,
#   "userId": 5,
#   "productId": 15,
#   "review": "Absolutely love this item! Best purchase ever."
# },{
#   "id": 22,
#   "stars": 4,
#   "userId": 1,
#   "productId": 41,
#   "review": "Great value for money."
# },{
#   "id": 23,
#   "stars": 3,
#   "userId": 2,
#   "productId": 6,
#   "review": "Average product, not bad but not outstanding either."
# },{
#   "id": 24,
#   "stars": 5,
#   "userId": 4,
#   "productId": 77,
#   "review": "Exceeded my expectations, well done!"
# },
# {
#   "id": 25,
#   "stars": 4,
#   "userId": 3,
#   "productId": 29,
#   "review": "Very satisfied with the purchase."
# },
# {
#   "id": 26,
#   "stars": 4,
#   "userId": 6,
#   "productId": 20,
#   "review": "This product is so good, I started talking to my toaster as if it's my new best friend. Highly recommended!"
# },
# {
#   "id": 27,
#   "stars": 5,
#   "userId": 2,
#   "productId": 55,
#   "review": "I'm not saying this product is magical, but ever since I bought it, my plants have been growing with British accents. Brilliant purchase!"
# },{
#   "id": 28,
#   "stars": 3,
#   "userId": 4,
#   "productId": 12,
#   "review": "This thing is like a relationship status on Facebook - it's complicated. Good, but not life-changing."
# },{
#   "id": 29,
#   "stars": 5,
#   "userId": 3,
#   "productId": 32,
#   "review": "I'm convinced Mack's products are made with a sprinkle of pixie dust and a touch of unicorn magic. Perfection!"
# },{
#   "id": 30,
#   "stars": 2,
#   "userId": 7,
#   "productId": 79,
#   "review": "If this product were a movie, it would be a B-list romantic comedy - some may find it endearing, but I'm just not feeling the chemistry."
# },{
#   "id": 31,
#   "stars": 5,
#   "userId": 5,
#   "productId": 15,
#   "review": "This item is like finding a secret treasure chest in the attic. Pure excitement and joy! Don't miss out!"
# },{
#   "id": 32,
#   "stars": 4,
#   "userId": 1,
#   "productId": 41,
#   "review": "I bought this on a whim, and now it's my new sidekick. Batman, step aside, we've got a new hero in town!"
# },{
#   "id": 33,
#   "stars": 3,
#   "userId": 2,
#   "productId": 6,
#   "review": "This product is like a car that starts in the winter - it gets the job done, but there's always a little struggle."
# },{
#   "id": 34,
#   "stars": 5,
#   "userId": 4,
#   "productId": 77,
#   "review": "I don't usually give five stars, but this product is like a fluffy cloud that brings sunshine and rainbows to my life. Absolute bliss!"
# },{
#   "id": 35,
#   "stars": 4,
#   "userId": 3,
#   "productId": 29,
#   "review": "This purchase was like discovering the hidden cheat code in a video game - it elevated my experience to a whole new level!"
# },
# {
#   "id": 36,
#   "stars": 1,
#   "userId": 6,
#   "productId": 20,
#   "review": "This product is a disaster! I'd rather communicate with a brick wall than deal with this garbage. Total waste of money!"
# },

# {
#   "id": 37,
#   "stars": 2,
#   "userId": 2,
#   "productId": 55,
#   "review": "Not impressed at all. I ordered this product with high hopes, but it was a letdown. Save your money and skip this one!"
# },{
#   "id": 38,
#   "stars": 1,
#   "userId": 4,
#   "productId": 12,
#   "review": "Honestly, I'm baffled by the positive reviews. This thing is garbage, and it's a shame I wasted my hard-earned money on it!"
# },{
#   "id": 39,
#   "stars": 2,
#   "userId": 3,
#   "productId": 32,
#   "review": "Don't fall for the hype! This product is all marketing and no substance. It's as useful as a screen door on a submarine!"
# },{
#   "id": 40,
#   "stars": 1,
#   "userId": 7,
#   "productId": 79,
#   "review": "Avoid this product like the plague! I've never been so disappointed in my life. If I could give it zero stars, I would!"
# },{
#   "id": 41,
#   "stars": 2,
#   "userId": 5,
#   "productId": 15,
#   "review": "What a joke! This item broke within a week. I should have flushed my money down the toilet instead - it would have been more rewarding!"
# },{
#   "id": 42,
#   "stars": 1,
#   "userId": 1,
#   "productId": 41,
#   "review": "This product is terrible, and the customer service is worse. It's like dealing with a swarm of angry bees. Stay away!"
# },{
#   "id": 43,
#   "stars": 2,
#   "userId": 2,
#   "productId": 6,
#   "review": "The only thing worse than this product is the feeling of regret after buying it. Save yourself the headache and buy something else!"
# },{
#   "id": 44,
#   "stars": 1,
#   "userId": 4,
#   "productId": 77,
#   "review": "Do yourself a favor and run in the opposite direction! This product is an insult to common sense. I demand a refund!"
# },{
#   "id": 45,
#   "stars": 2,
#   "userId": 3,
#   "productId": 29,
#   "review": "I have no idea why anyone would give this product more than one star. It's a disappointment of epic proportions!"
# },{
#   "id": 46,
#   "stars": 5,
#   "userId": 6,
#   "productId": 20,
#   "review": "Wow! This product is a game-changer. It exceeded my expectations in every way. I'm thrilled with my purchase!"
# },
# {
#   "id": 47,
#   "stars": 4,
#   "userId": 2,
#   "productId": 55,
#   "review": "I'm impressed! This product delivers on its promises. It's a great addition to my daily routine."
# },

# {
#   "id": 48,
#   "stars": 5,
#   "userId": 4,
#   "productId": 12,
#   "review": "Incredible! This thing is worth every penny. It's like having my own personal assistant."
# },{
#   "id": 49,
#   "stars": 4,
#   "userId": 3,
#   "productId": 32,
#   "review": "I'm pleasantly surprised! This product actually works as advertised. It's a real game-changer!"
# },{
#   "id": 50,
#   "stars": 5,
#   "userId": 7,
#   "productId": 79,
#   "review": "Impressed beyond words! This product is top-notch, and the results speak for themselves. A must-have!"
# },{
#   "id": 51,
#   "stars": 5,
#   "userId": 5,
#   "productId": 15,
#   "review": "Amazing find! This item is a gem. I can't believe I lived without it. It's now an essential part of my life!"
# },{
#   "id": 52,
#   "stars": 4,
#   "userId": 1,
#   "productId": 41,
#   "review": "Very pleased! This product delivers on all fronts. It's reliable and performs exceptionally well."
# },{
#   "id": 53,
#   "stars": 5,
#   "userId": 2,
#   "productId": 6,
#   "review": "Great buy! This product has improved my life in countless ways. I can't recommend it enough!"
# },{
#   "id": 54,
#   "stars": 4,
#   "userId": 4,
#   "productId": 77,
#   "review": "Highly satisfied! This product is a true gem. I'm glad I took a chance on it."
# },{
#   "id": 55,
#   "stars": 5,
#   "userId": 3,
#   "productId": 29,
#   "review": "Absolutely love it! This purchase has been a game-changer for me. I couldn't be happier!"
# },
# {
#     "id": 56,
#     "stars": 4,
#     "userId": 6,
#     "productId": 35,
#     "review": "Great product! It works as expected and provides good value for money."
#   },
#   {
#     "id": 57,
#     "stars": 2,
#     "userId": 2,
#     "productId": 61,
#     "review": "Not impressed. The product didn't meet my expectations, and I'm disappointed."
#   },
#   {
#     "id": 58,
#     "stars": 5,
#     "userId": 4,
#     "productId": 15,
#     "review": "Fantastic purchase! This product is a game-changer. Highly recommended!"
#   },
#   {
#     "id": 59,
#     "stars": 3,
#     "userId": 3,
#     "productId": 42,
#     "review": "Decent product. It serves its purpose, but there are better options out there."
#   },
#   {
#     "id": 60,
#     "stars": 4,
#     "userId": 7,
#     "productId": 75,
#     "review": "Very satisfied! This purchase was worth every penny."
#   },
#   {
#     "id": 61,
#     "stars": 2,
#     "userId": 5,
#     "productId": 19,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 62,
#     "stars": 5,
#     "userId": 1,
#     "productId": 5,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 63,
#     "stars": 3,
#     "userId": 6,
#     "productId": 58,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 64,
#     "stars": 4,
#     "userId": 2,
#     "productId": 31,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 65,
#     "stars": 1,
#     "userId": 4,
#     "productId": 29,
#     "review": "Terrible! This product is a waste of money. I regret buying it."
#   },
#   {
#     "id": 66,
#     "stars": 5,
#     "userId": 3,
#     "productId": 11,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },
#   {
#     "id": 67,
#     "stars": 3,
#     "userId": 7,
#     "productId": 50,
#     "review": "It's average. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 68,
#     "stars": 4,
#     "userId": 5,
#     "productId": 23,
#     "review": "Good investment! It's a reliable product, and I'm happy with it."
#   },
#   {
#     "id": 69,
#     "stars": 2,
#     "userId": 1,
#     "productId": 8,
#     "review": "Disappointed. The product didn't work as expected, and I'm dissatisfied."
#   },
#   {
#     "id": 70,
#     "stars": 5,
#     "userId": 6,
#     "productId": 40,
#     "review": "Love it! This product has made my life so much easier. Highly recommended!"
#   },
#   {
#     "id": 71,
#     "stars": 2,
#     "userId": 2,
#     "productId": 16,
#     "review": "Not the best choice. The product's performance is lacking."
#   },
#   {
#     "id": 72,
#     "stars": 5,
#     "userId": 4,
#     "productId": 71,
#     "review": "Outstanding! This product is a must-have. It has exceeded my expectations."
#   },
#   {
#     "id": 73,
#     "stars": 3,
#     "userId": 3,
#     "productId": 77,
#     "review": "Average product. It does its job, but there are better alternatives."
#   },
#   {
#     "id": 74,
#     "stars": 4,
#     "userId": 7,
#     "productId": 28,
#     "review": "Very good purchase! The product meets my needs and is of good quality."
#   },
#   {
#     "id": 75,
#     "stars": 1,
#     "userId": 5,
#     "productId": 70,
#     "review": "Horrible experience! This product is a complete waste of money."
#   },
#   {
#     "id": 76,
#     "stars": 5,
#     "userId": 1,
#     "productId": 12,
#     "review": "Best purchase ever! This product has exceeded all my expectations."
#   },
#   {
#     "id": 77,
#     "stars": 3,
#     "userId": 6,
#     "productId": 44,
#     "review": "It's decent. The product works as advertised, but nothing extraordinary."
#   },
#   {
#     "id": 78,
#     "stars": 4,
#     "userId": 2,
#     "productId": 39,
#     "review": "Good value for money. The product delivers what it promises."
#   },
#   {
#     "id": 79,
#     "stars": 2,
#     "userId": 4,
#     "productId": 54,
#     "review": "Not happy with my purchase. The product didn't meet my expectations."
#   },
#   {
#     "id": 80,
#     "stars": 5,
#     "userId": 3,
#     "productId": 4,
#     "review": "Highly satisfied! This purchase was worth every penny."
#   },

#   {
#     "id": 81,
#     "stars": 3,
#     "userId": 5,
#     "productId": 1,
#     "review": "Average product. It meets my needs but nothing extraordinary."
#   },
#   {
#     "id": 82,
#     "stars": 5,
#     "userId": 1,
#     "productId": 2,
#     "review": "Fantastic purchase! The product is exactly what I was looking for."
#   },
#   {
#     "id": 83,
#     "stars": 2,
#     "userId": 6,
#     "productId": 3,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 84,
#     "stars": 4,
#     "userId": 2,
#     "productId": 4,
#     "review": "Good investment. It serves its purpose and is of decent quality."
#   },
#   {
#     "id": 85,
#     "stars": 1,
#     "userId": 3,
#     "productId": 5,
#     "review": "Terrible! This product is a waste of money. I regret buying it."
#   },
#   {
#     "id": 86,
#     "stars": 5,
#     "userId": 4,
#     "productId": 6,
#     "review": "Outstanding! This product is a must-have. It has exceeded my expectations."
#   },
#   {
#     "id": 87,
#     "stars": 3,
#     "userId": 7,
#     "productId": 7,
#     "review": "It's decent. The product works as advertised, but nothing extraordinary."
#   },
#   {
#     "id": 88,
#     "stars": 4,
#     "userId": 5,
#     "productId": 8,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 89,
#     "stars": 2,
#     "userId": 1,
#     "productId": 9,
#     "review": "Not the best choice. The product's performance is lacking."
#   },
#   {
#     "id": 90,
#     "stars": 5,
#     "userId": 6,
#     "productId": 10,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },
#   {
#     "id": 91,
#     "stars": 3,
#     "userId": 2,
#     "productId": 11,
#     "review": "It's average. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 92,
#     "stars": 4,
#     "userId": 3,
#     "productId": 12,
#     "review": "Good value for money. The product delivers what it promises."
#   },
#   {
#     "id": 93,
#     "stars": 1,
#     "userId": 4,
#     "productId": 13,
#     "review": "Horrible experience! This product is a complete waste of money."
#   },
#   {
#     "id": 94,
#     "stars": 5,
#     "userId": 7,
#     "productId": 14,
#     "review": "Love it! This product has made my life so much easier. Highly recommended!"
#   },
#   {
#     "id": 95,
#     "stars": 2,
#     "userId": 5,
#     "productId": 15,
#     "review": "Not impressed. The product didn't meet my expectations, and I'm disappointed."
#   },
#   {
#     "id": 96,
#     "stars": 5,
#     "userId": 1,
#     "productId": 16,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 97,
#     "stars": 3,
#     "userId": 6,
#     "productId": 17,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 98,
#     "stars": 4,
#     "userId": 2,
#     "productId": 18,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 99,
#     "stars": 1,
#     "userId": 3,
#     "productId": 19,
#     "review": "Terrible! This product is a waste of money. I regret buying it."
#   },
#   {
#     "id": 100,
#     "stars": 5,
#     "userId": 4,
#     "productId": 20,
#     "review": "Outstanding! This product is a must-have. It has exceeded my expectations."
#   },
#   {
#     "id": 101,
#     "stars": 3,
#     "userId": 7,
#     "productId": 21,
#     "review": "It's decent. The product works as advertised, but nothing extraordinary."
#   },
#   {
#     "id": 102,
#     "stars": 4,
#     "userId": 5,
#     "productId": 22,
#     "review": "Good investment. It serves its purpose and is of decent quality."
#   },
#   {
#     "id": 103,
#     "stars": 2,
#     "userId": 1,
#     "productId": 23,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 104,
#     "stars": 5,
#     "userId": 6,
#     "productId": 24,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },
#   {
#     "id": 105,
#     "stars": 3,
#     "userId": 2,
#     "productId": 25,
#     "review": "It's average. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 106,
#     "stars": 4,
#     "userId": 3,
#     "productId": 26,
#     "review": "Good value for money. The product delivers what it promises."
#   },
#   {
#     "id": 107,
#     "stars": 1,
#     "userId": 4,
#     "productId": 27,
#     "review": "Horrible experience! This product is a complete waste of money."
#   },
#   {
#     "id": 108,
#     "stars": 5,
#     "userId": 7,
#     "productId": 28,
#     "review": "Love it! This product has made my life so much easier. Highly recommended!"
#   },
#   {
#     "id": 109,
#     "stars": 2,
#     "userId": 5,
#     "productId": 29,
#     "review": "Not impressed. The product didn't meet my expectations, and I'm disappointed."
#   },
#   {
#     "id": 110,
#     "stars": 5,
#     "userId": 1,
#     "productId": 30,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 111,
#     "stars": 3,
#     "userId": 6,
#     "productId": 31,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 112,
#     "stars": 4,
#     "userId": 2,
#     "productId": 32,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 113,
#     "stars": 1,
#     "userId": 3,
#     "productId": 33,
#     "review": "Terrible! This product is a waste of money. I regret buying it."
#   },
#   {
#     "id": 114,
#     "stars": 5,
#     "userId": 4,
#     "productId": 34,
#     "review": "Outstanding! This product is a must-have. It has exceeded my expectations."
#   },
#   {
#     "id": 115,
#     "stars": 3,
#     "userId": 7,
#     "productId": 35,
#     "review": "It's decent. The product works as advertised, but nothing extraordinary."
#   },
#   {
#     "id": 116,
#     "stars": 4,
#     "userId": 5,
#     "productId": 36,
#     "review": "Good investment. It serves its purpose and is of decent quality."
#   },
#   {
#     "id": 117,
#     "stars": 2,
#     "userId": 1,
#     "productId": 37,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 118,
#     "stars": 5,
#     "userId": 6,
#     "productId": 38,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },
#   {
#     "id": 119,
#     "stars": 3,
#     "userId": 2,
#     "productId": 39,
#     "review": "It's average. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 120,
#     "stars": 4,
#     "userId": 3,
#     "productId": 40,
#     "review": "Good value for money. The product delivers what it promises."
#   },
#   {
#     "id": 121,
#     "stars": 1,
#     "userId": 4,
#     "productId": 41,
#     "review": "Horrible experience! This product is a complete waste of money."
#   },
#   {
#     "id": 122,
#     "stars": 5,
#     "userId": 7,
#     "productId": 42,
#     "review": "Love it! This product has made my life so much easier. Highly recommended!"
#   },
#   {
#     "id": 123,
#     "stars": 2,
#     "userId": 5,
#     "productId": 43,
#     "review": "Not impressed. The product didn't meet my expectations, and I'm disappointed."
#   },
#   {
#     "id": 124,
#     "stars": 5,
#     "userId": 1,
#     "productId": 44,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 125,
#     "stars": 3,
#     "userId": 6,
#     "productId": 45,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 126,
#     "stars": 4,
#     "userId": 2,
#     "productId": 46,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 127,
#     "stars": 1,
#     "userId": 3,
#     "productId": 47,
#     "review": "Terrible! This product is a waste of money. I regret buying it."
#   },
#   {
#     "id": 128,
#     "stars": 5,
#     "userId": 4,
#     "productId": 48,
#     "review": "Outstanding! This product is a must-have. It has exceeded my expectations."
#   },
#   {
#     "id": 129,
#     "stars": 3,
#     "userId": 7,
#     "productId": 49,
#     "review": "It's decent. The product works as advertised, but nothing extraordinary."
#   },
#   {
#     "id": 130,
#     "stars": 4,
#     "userId": 5,
#     "productId": 50,
#     "review": "Good investment. It serves its purpose and is of decent quality."
#   },
#   {
#     "id": 131,
#     "stars": 2,
#     "userId": 1,
#     "productId": 51,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 132,
#     "stars": 5,
#     "userId": 6,
#     "productId": 52,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },
#   {
#     "id": 133,
#     "stars": 3,
#     "userId": 2,
#     "productId": 53,
#     "review": "It's average. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 134,
#     "stars": 4,
#     "userId": 3,
#     "productId": 54,
#     "review": "Good value for money. The product delivers what it promises."
#   },
#   {
#     "id": 135,
#     "stars": 1,
#     "userId": 4,
#     "productId": 55,
#     "review": "Horrible experience! This product is a complete waste of money."
#   },
#   {
#     "id": 136,
#     "stars": 5,
#     "userId": 7,
#     "productId": 56,
#     "review": "Love it! This product has made my life so much easier. Highly recommended!"
#   },
#   {
#     "id": 137,
#     "stars": 2,
#     "userId": 5,
#     "productId": 57,
#     "review": "Not impressed. The product didn't meet my expectations, and I'm disappointed."
#   },
#   {
#     "id": 138,
#     "stars": 5,
#     "userId": 1,
#     "productId": 58,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 139,
#     "stars": 3,
#     "userId": 6,
#     "productId": 59,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 140,
#     "stars": 4,
#     "userId": 2,
#     "productId": 60,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 141,
#     "stars": 1,
#     "userId": 3,
#     "productId": 61,
#     "review": "Terrible! This product is a waste of money. I regret buying it."
#   },
#   {
#     "id": 142,
#     "stars": 5,
#     "userId": 4,
#     "productId": 62,
#     "review": "Outstanding! This product is a must-have. It has exceeded my expectations."
#   },
#   {
#     "id": 143,
#     "stars": 3,
#     "userId": 7,
#     "productId": 63,
#     "review": "It's decent. The product works as advertised, but nothing extraordinary."
#   },
#   {
#     "id": 144,
#     "stars": 4,
#     "userId": 5,
#     "productId": 64,
#     "review": "Good investment. It serves its purpose and is of decent quality."
#   },
#   {
#     "id": 145,
#     "stars": 2,
#     "userId": 1,
#     "productId": 65,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 146,
#     "stars": 5,
#     "userId": 6,
#     "productId": 66,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },
#   {
#     "id": 147,
#     "stars": 3,
#     "userId": 2,
#     "productId": 67,
#     "review": "It's average. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 148,
#     "stars": 4,
#     "userId": 3,
#     "productId": 68,
#     "review": "Good value for money. The product delivers what it promises."
#   },
#   {
#     "id": 149,
#     "stars": 1,
#     "userId": 4,
#     "productId": 69,
#     "review": "Horrible experience! This product is a complete waste of money."
#   },
#   {
#     "id": 150,
#     "stars": 5,
#     "userId": 7,
#     "productId": 70,
#     "review": "Love it! This product has made my life so much easier. Highly recommended!"
#   },
#   {
#     "id": 151,
#     "stars": 2,
#     "userId": 5,
#     "productId": 71,
#     "review": "Not impressed. The product didn't meet my expectations, and I'm disappointed."
#   },
#   {
#     "id": 152,
#     "stars": 5,
#     "userId": 1,
#     "productId": 72,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 153,
#     "stars": 3,
#     "userId": 6,
#     "productId": 73,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 154,
#     "stars": 4,
#     "userId": 2,
#     "productId": 74,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 155,
#     "stars": 1,
#     "userId": 3,
#     "productId": 75,
#     "review": "Terrible! This product is a waste of money. I regret buying it."
#   },
#   {
#     "id": 156,
#     "stars": 5,
#     "userId": 4,
#     "productId": 76,
#     "review": "Outstanding! This product is a must-have. It has exceeded my expectations."
#   },
#   {
#     "id": 157,
#     "stars": 3,
#     "userId": 7,
#     "productId": 77,
#     "review": "It's decent. The product works as advertised, but nothing extraordinary."
#   },
#   {
#     "id": 158,
#     "stars": 4,
#     "userId": 5,
#     "productId": 78,
#     "review": "Good investment. It serves its purpose and is of decent quality."
#   },
#   {
#     "id": 159,
#     "stars": 2,
#     "userId": 1,
#     "productId": 79,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 160,
#     "stars": 5,
#     "userId": 6,
#     "productId": 80,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },{
#     "id": 161,
#     "stars": 4,
#     "userId": 7,
#     "productId": 1,
#     "review": "Good product. It works well and meets my expectations."
#   },
#   {
#     "id": 162,
#     "stars": 1,
#     "userId": 5,
#     "productId": 2,
#     "review": "Terrible! This product is a complete waste of money."
#   },
#   {
#     "id": 163,
#     "stars": 5,
#     "userId": 1,
#     "productId": 3,
#     "review": "Excellent purchase! This product is top-notch."
#   },
#   {
#     "id": 164,
#     "stars": 3,
#     "userId": 6,
#     "productId": 4,
#     "review": "Average product. It does its job, but there are better options out there."
#   },
#   {
#     "id": 165,
#     "stars": 2,
#     "userId": 2,
#     "productId": 5,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 166,
#     "stars": 4,
#     "userId": 3,
#     "productId": 6,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 167,
#     "stars": 1,
#     "userId": 4,
#     "productId": 7,
#     "review": "Very disappointing! This product failed to meet my expectations."
#   },
#   {
#     "id": 168,
#     "stars": 5,
#     "userId": 7,
#     "productId": 8,
#     "review": "Highly recommended! This product exceeded my expectations."
#   },
#   {
#     "id": 169,
#     "stars": 3,
#     "userId": 5,
#     "productId": 9,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 170,
#     "stars": 4,
#     "userId": 1,
#     "productId": 10,
#     "review": "Great product! It works as expected and provides good value for money."
#   },
#   {
#     "id": 171,
#     "stars": 2,
#     "userId": 6,
#     "productId": 11,
#     "review": "Not the best choice. The product's performance is lacking."
#   },
#   {
#     "id": 172,
#     "stars": 5,
#     "userId": 2,
#     "productId": 12,
#     "review": "Fantastic purchase! This product is a game-changer. Highly recommended!"
#   },
#   {
#     "id": 173,
#     "stars": 3,
#     "userId": 3,
#     "productId": 13,
#     "review": "Decent product. It serves its purpose, but there are better options out there."
#   },
#   {
#     "id": 174,
#     "stars": 4,
#     "userId": 4,
#     "productId": 14,
#     "review": "Very satisfied! This purchase was worth every penny."
#   },
#   {
#     "id": 175,
#     "stars": 1,
#     "userId": 7,
#     "productId": 15,
#     "review": "Waste of money! This product is of poor quality and useless."
#   },
#   {
#     "id": 176,
#     "stars": 5,
#     "userId": 5,
#     "productId": 16,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 177,
#     "stars": 3,
#     "userId": 1,
#     "productId": 17,
#     "review": "It's decent. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 178,
#     "stars": 4,
#     "userId": 6,
#     "productId": 18,
#     "review": "Good investment! It's a reliable product, and I'm happy with it."
#   },
#   {
#     "id": 179,
#     "stars": 1,
#     "userId": 2,
#     "productId": 19,
#     "review": "Regrettable purchase. The product didn't meet my expectations."
#   },
#   {
#     "id": 180,
#     "stars": 5,
#     "userId": 3,
#     "productId": 20,
#     "review": "Incredible find! This product has exceeded my expectations."
#   },
#   {
#     "id": 181,
#     "stars": 3,
#     "userId": 4,
#     "productId": 21,
#     "review": "Average product. It does its job, but there are better options out there."
#   },
#   {
#     "id": 182,
#     "stars": 4,
#     "userId": 7,
#     "productId": 22,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 183,
#     "stars": 2,
#     "userId": 5,
#     "productId": 23,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 184,
#     "stars": 5,
#     "userId": 1,
#     "productId": 24,
#     "review": "Excellent purchase! This product is top-notch."
#   },
#   {
#     "id": 185,
#     "stars": 3,
#     "userId": 6,
#     "productId": 25,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 186,
#     "stars": 4,
#     "userId": 2,
#     "productId": 26,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 187,
#     "stars": 1,
#     "userId": 3,
#     "productId": 27,
#     "review": "Very disappointing! This product failed to meet my expectations."
#   },
#   {
#     "id": 188,
#     "stars": 5,
#     "userId": 4,
#     "productId": 28,
#     "review": "Highly recommended! This product exceeded my expectations."
#   },
#   {
#     "id": 189,
#     "stars": 3,
#     "userId": 7,
#     "productId": 29,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 190,
#     "stars": 4,
#     "userId": 5,
#     "productId": 30,
#     "review": "Good product. It works well and meets my expectations."
#   },
#   {
#     "id": 191,
#     "stars": 1,
#     "userId": 1,
#     "productId": 31,
#     "review": "Terrible! This product is a complete waste of money."
#   },
#   {
#     "id": 192,
#     "stars": 5,
#     "userId": 6,
#     "productId": 32,
#     "review": "Excellent purchase! This product is top-notch."
#   },
#   {
#     "id": 193,
#     "stars": 3,
#     "userId": 2,
#     "productId": 33,
#     "review": "Average product. It does its job, but there are better options out there."
#   },
#   {
#     "id": 194,
#     "stars": 2,
#     "userId": 3,
#     "productId": 34,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 195,
#     "stars": 4,
#     "userId": 4,
#     "productId": 35,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 196,
#     "stars": 1,
#     "userId": 7,
#     "productId": 36,
#     "review": "Very disappointing! This product failed to meet my expectations."
#   },
#   {
#     "id": 197,
#     "stars": 5,
#     "userId": 5,
#     "productId": 37,
#     "review": "Highly recommended! This product exceeded my expectations."
#   },
#   {
#     "id": 198,
#     "stars": 3,
#     "userId": 1,
#     "productId": 38,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 199,
#     "stars": 4,
#     "userId": 6,
#     "productId": 39,
#     "review": "Good investment! It's a reliable product, and I'm happy with it."
#   },
#   {
#     "id": 200,
#     "stars": 2,
#     "userId": 2,
#     "productId": 40,
#     "review": "Not the best choice. The product's performance is lacking."
#   },
#   {
#     "id": 201,
#     "stars": 5,
#     "userId": 3,
#     "productId": 41,
#     "review": "Fantastic purchase! This product is a game-changer. Highly recommended!"
#   },
#   {
#     "id": 202,
#     "stars": 3,
#     "userId": 4,
#     "productId": 42,
#     "review": "Decent product. It serves its purpose, but there are better options out there."
#   },
#   {
#     "id": 203,
#     "stars": 4,
#     "userId": 7,
#     "productId": 43,
#     "review": "Very satisfied! This purchase was worth every penny."
#   },
#   {
#     "id": 204,
#     "stars": 1,
#     "userId": 5,
#     "productId": 44,
#     "review": "Waste of money! This product is of poor quality and useless."
#   },
#   {
#     "id": 205,
#     "stars": 5,
#     "userId": 1,
#     "productId": 45,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 206,
#     "stars": 3,
#     "userId": 6,
#     "productId": 46,
#     "review": "It's decent. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 207,
#     "stars": 4,
#     "userId": 2,
#     "productId": 47,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 208,
#     "stars": 1,
#     "userId": 3,
#     "productId": 48,
#     "review": "Very disappointing! This product failed to meet my expectations."
#   },
#   {
#     "id": 209,
#     "stars": 5,
#     "userId": 4,
#     "productId": 49,
#     "review": "Highly recommended! This product exceeded my expectations."
#   },
#   {
#     "id": 210,
#     "stars": 3,
#     "userId": 7,
#     "productId": 50,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 211,
#     "stars": 4,
#     "userId": 5,
#     "productId": 51,
#     "review": "Good product. It works well and meets my expectations."
#   },
#   {
#     "id": 212,
#     "stars": 1,
#     "userId": 1,
#     "productId": 52,
#     "review": "Terrible! This product is a complete waste of money."
#   },
#   {
#     "id": 213,
#     "stars": 5,
#     "userId": 6,
#     "productId": 53,
#     "review": "Excellent purchase! This product is top-notch."
#   },
#   {
#     "id": 214,
#     "stars": 3,
#     "userId": 2,
#     "productId": 54,
#     "review": "Average product. It does its job, but there are better options out there."
#   },
#   {
#     "id": 215,
#     "stars": 2,
#     "userId": 3,
#     "productId": 55,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 216,
#     "stars": 4,
#     "userId": 4,
#     "productId": 56,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 217,
#     "stars": 1,
#     "userId": 7,
#     "productId": 57,
#     "review": "Very disappointing! This product failed to meet my expectations."
#   },
#   {
#     "id": 218,
#     "stars": 5,
#     "userId": 5,
#     "productId": 58,
#     "review": "Highly recommended! This product exceeded my expectations."
#   },
#   {
#     "id": 219,
#     "stars": 3,
#     "userId": 1,
#     "productId": 59,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 220,
#     "stars": 4,
#     "userId": 6,
#     "productId": 60,
#     "review": "Good investment! It's a reliable product, and I'm happy with it."
#   },
#   {
#     "id": 221,
#     "stars": 2,
#     "userId": 2,
#     "productId": 61,
#     "review": "Not the best choice. The product's performance is lacking."
#   },
#   {
#     "id": 222,
#     "stars": 5,
#     "userId": 3,
#     "productId": 62,
#     "review": "Fantastic purchase! This product is a game-changer. Highly recommended!"
#   },
#   {
#     "id": 223,
#     "stars": 3,
#     "userId": 4,
#     "productId": 63,
#     "review": "Decent product. It serves its purpose, but there are better options out there."
#   },
#   {
#     "id": 224,
#     "stars": 4,
#     "userId": 7,
#     "productId": 64,
#     "review": "Very satisfied! This purchase was worth every penny."
#   },
#   {
#     "id": 225,
#     "stars": 1,
#     "userId": 5,
#     "productId": 65,
#     "review": "Waste of money! This product is of poor quality and useless."
#   },
#   {
#     "id": 226,
#     "stars": 5,
#     "userId": 1,
#     "productId": 66,
#     "review": "Amazing! This is exactly what I needed. It has exceeded my expectations."
#   },
#   {
#     "id": 227,
#     "stars": 3,
#     "userId": 6,
#     "productId": 67,
#     "review": "It's decent. The product does what it claims, but there's room for improvement."
#   },
#   {
#     "id": 228,
#     "stars": 4,
#     "userId": 2,
#     "productId": 68,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 229,
#     "stars": 1,
#     "userId": 3,
#     "productId": 69,
#     "review": "Very disappointing! This product failed to meet my expectations."
#   },
#   {
#     "id": 230,
#     "stars": 5,
#     "userId": 4,
#     "productId": 70,
#     "review": "Highly recommended! This product exceeded my expectations."
#   },
#   {
#     "id": 231,
#     "stars": 3,
#     "userId": 7,
#     "productId": 71,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#     "id": 232,
#     "stars": 4,
#     "userId": 5,
#     "productId": 72,
#     "review": "Good product. It works well and meets my expectations."
#   },
#   {
#     "id": 233,
#     "stars": 1,
#     "userId": 1,
#     "productId": 73,
#     "review": "Terrible! This product is a complete waste of money."
#   },
#   {
#     "id": 234,
#     "stars": 5,
#     "userId": 6,
#     "productId": 74,
#     "review": "Excellent purchase! This product is top-notch."
#   },
#   {
#     "id": 235,
#     "stars": 3,
#     "userId": 2,
#     "productId": 75,
#     "review": "Average product. It does its job, but there are better options out there."
#   },
#   {
#     "id": 236,
#     "stars": 2,
#     "userId": 3,
#     "productId": 76,
#     "review": "Not worth it. The product quality is subpar, and I regret buying it."
#   },
#   {
#     "id": 237,
#     "stars": 4,
#     "userId": 4,
#     "productId": 77,
#     "review": "Satisfied with my purchase. The product meets my requirements."
#   },
#   {
#     "id": 238,
#     "stars": 1,
#     "userId": 7,
#     "productId": 78,
#     "review": "Very disappointing! This product failed to meet my expectations."
#   },
#   {
#     "id": 239,
#     "stars": 5,
#     "userId": 5,
#     "productId": 79,
#     "review": "Highly recommended! This product exceeded my expectations."
#   },
#   {
#     "id": 240,
#     "stars": 3,
#     "userId": 1,
#     "productId": 80,
#     "review": "It's okay. The product does its job, but it's not extraordinary."
#   },
#   {
#   "id": 241,
#   "stars": 4,
#   "userId": 3,
#   "productId": 1,
#   "review": "Great product! I am satisfied with my purchase."
# },
# {
#   "id": 242,
#   "stars": 3,
#   "userId": 4,
#   "productId": 1,
#   "review": "Decent purchase. It met my expectations."
# },
# {
#   "id": 243,
#   "stars": 5,
#   "userId": 7,
#   "productId": 1,
#   "review": "Amazing! This product exceeded my expectations."
# },
# {
#   "id": 244,
#   "stars": 5,
#   "userId": 5,
#   "productId": 2,
#   "review": "Highly recommended! I love this product."
# },
# {
#   "id": 245,
#   "stars": 4,
#   "userId": 6,
#   "productId": 2,
#   "review": "Very satisfied with the quality."
# },
# {
#   "id": 246,
#   "stars": 3,
#   "userId": 2,
#   "productId": 2,
#   "review": "It's okay. There are better options available."
# },
# {
#   "id": 247,
#   "stars": 5,
#   "userId": 3,
#   "productId": 3,
#   "review": "Excellent product! I'm impressed with its performance."
# },
# {
#   "id": 248,
#   "stars": 4,
#   "userId": 4,
#   "productId": 3,
#   "review": "Good purchase. It meets my needs."
# },
# {
#   "id": 249,
#   "stars": 3,
#   "userId": 7,
#   "productId": 3,
#   "review": "Average product. It does the job."
# },
# {
#   "id": 250,
#   "stars": 5,
#   "userId": 5,
#   "productId": 4,
#   "review": "Worth every penny! Highly recommended."
# },
# {
#   "id": 251,
#   "stars": 4,
#   "userId": 6,
#   "productId": 4,
#   "review": "Satisfied with the purchase. Good quality."
# },
# {
#   "id": 252,
#   "stars": 3,
#   "userId": 2,
#   "productId": 4,
#   "review": "It's decent, but not exceptional."
# },
# {
#   "id": 253,
#   "stars": 4,
#   "userId": 3,
#   "productId": 5,
#   "review": "Good value for money. It works well."
# },
# {
#   "id": 254,
#   "stars": 5,
#   "userId": 4,
#   "productId": 5,
#   "review": "Fantastic product! I'm impressed with its performance."
# },
# {
#   "id": 255,
#   "stars": 4,
#   "userId": 7,
#   "productId": 5,
#   "review": "Very satisfied! The product met my expectations."
# }

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
