from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    stars = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    productId= db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    createdAt = db.Column(db.DateTime, default=db.func.now())
    updatedAt = db.Column(db.DateTime, default=db.func.now())

    user = db.relationship("User", back_populates="review")
    product = db.relationship("Product", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "stars": self.stars,
            "review": self.review,
            "userId": self.userId,
            "productId": self.productId,
        }
