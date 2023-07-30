from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField, SelectField, BooleanField, DateField
from wtforms.validators import DataRequired

class Product(FlaskForm):
    item_name = StringField("Item name", validators=[DataRequired()])
    price = IntegerField("Price", validators=[DataRequired()])
    category = StringField("Category", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    quantity = IntegerField("Quantity", validators=[DataRequired()])
    preview_imageURL = StringField("Preview Image", validators=[DataRequired()])
