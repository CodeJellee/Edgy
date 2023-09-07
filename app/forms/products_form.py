from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    SubmitField,
    IntegerField,
    SelectField,
    BooleanField,
    DateField,
    TextAreaField,
    FloatField,
)
from wtforms.validators import DataRequired


class NewProduct(FlaskForm):
    item_name = StringField("Item name", validators=[DataRequired()])
    price = FloatField("Price", validators=[DataRequired()])
    category = StringField("Category", validators=[DataRequired()])
    description = TextAreaField("Description", validators=[DataRequired()])
    quantity = IntegerField("Quantity", validators=[DataRequired()])
    preview_imageURL = StringField("Preview Image", validators=[DataRequired()])
    preview_imageURL2 = StringField("Preview Image")
    preview_imageURL3 = StringField("Preview Image")
    preview_imageURL4 = StringField("Preview Image")
    preview_imageURL5 = StringField("Preview Image")
    preview_imageURL6 = StringField("Preview Image")
    preview_imageURL7 = StringField("Preview Image")
    preview_imageURL8 = StringField("Preview Image")
    preview_imageURL9 = StringField("Preview Image")
