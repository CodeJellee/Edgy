from .db import db, environment, SCHEMA
from .reviews import Review


#Many-to-Many Relationship between Users & Products
favorites = db.Table(
  "favorites",
  db.Column("userId", db.ForeignKey("users.id"), primary_key=True),
  db.Column("productId", db.ForeignKey("products.id"), primary_key=True),
  schema=SCHEMA if environment == "production" else None
)

class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(255))
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    preview_imageURL = db.Column(db.String, nullable=False)
    reviewId = db.Column(db.Integer, db.ForeignKey("reviews.id"))
    sellerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    # One-to-Many Relationship with Product and ProductImage
    # This relationship states that Product will be listening to the class ProductImage
    image = db.relationship("ProductImage", back_populates="product", cascade="all, delete-orphan")
    users = db.relationship("User",secondary=favorites, back_populates="products")
    review = db.relationship("Review", back_populates="product", cascade="all, delete-orphan")
    item = db.relationship("CartItem", back_populates="product", cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'item_name': self.item_name,
            'price': self.price,
            'category': self.category,
            'description': self.description,
            "quantity": self.quantity,
            "preview_imageURL": self.preview_imageURL,
            "reviewId": self.reviewId,
            "sellerId": self.sellerId,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
        }


class ProductImage(db.Model):
  __tablename__ = "product_images"
  id = db.Column(db.Integer, primary_key=True)
  # other columns
  productId = db.Column(db.Integer, db.ForeignKey("products.id"))
  product_imageURL = db.Column(db.String(255), nullable=True)

  # One-to-Many Relationship with Product and ProductImage
  # This relationship states that ProductImage will be listening to the class Product
  product = db.relationship("Product", back_populates="image")

  def to_dict(self):
    return {
        "id": self.id,
        "productId": self.productId,
        "product_imageURL": self.product_imageURL
    }

class CartItem(db.Model):
   __tablename__ = "cart_items"

   id = db.Column(db.Integer, primary_key=True)
   productId = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
   userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

   product = db.relationship("Product", back_populates="item")
   user = db.relationship("User", back_populates="item")
