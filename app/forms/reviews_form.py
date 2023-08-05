from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class NewReview(FlaskForm):
    stars = IntegerField("stars", validators=[DataRequired()])
    review = StringField("review", validators=[DataRequired()])
    submit = SubmitField("Submit")
