from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("user.id")), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    review = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    user = db.relationship("User", back_populates="review")
    product = db.relationship("Product", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "stars": self.stars,
            "review": self.review
        }
