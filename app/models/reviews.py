from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    stars = db.Column(db.Integer, nullable=False)
    review = db.Column(db.Text, nullable=False)
    userId = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    productId = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False
    )
    # commenting these out to test 500 error on production for create new product
    # createdAt = db.Column(db.DateTime, default=db.func.now())
    # updatedAt = db.Column(db.DateTime, default=db.func.now())

    user = db.relationship("User", back_populates="review")
    product = db.relationship("Product", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "stars": self.stars,
            "review": self.review,
            "userId": self.userId,
            "productId": self.productId,
            # "updatedAt": self.updatedAt,
            # "createdAt": self.createdAt,
        }

    def to_dict_noUpdated(self):
        return {
            "id": self.id,
            "stars": self.stars,
            "review": self.review,
            "userId": self.userId,
            "productId": self.productId,
            # "createdAt": self.createdAt,
        }
