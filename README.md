<!--!!START SILENT -->
# `Edgy <e-commerce-service>`

## INTRODUCTION
![Screenshot 2023-08-25 at 1 44 42 PM](https://github.com/CodeJellee/Edgy/assets/108435185/6cf84355-9a93-4250-8999-80cde6a173b1)
![Screenshot 2023-08-25 at 1 46 11 PM](https://github.com/CodeJellee/Edgy/assets/108435185/f5bb8d92-a867-492a-88be-109e5dec5b8e)
![Screenshot 2023-08-25 at 1 47 18 PM](https://github.com/CodeJellee/Edgy/assets/108435185/776be7db-d40b-4a6b-91d7-5c29e3fd2b85)


## Link to website 
https://edgy.onrender.com

Edgy, an Etsy replica, is an anime themed platform where users can search, buy, sell and engage in the popularity of products through reviews and likes.

## Feature List
## 1. New account creation, log in, log out, and guest/demo log in with user authentication/authorization

* Users can sign up, log in, and log out.
* Users can use a demo login to try the site.
* Users can't use certain features without logging in (ex: create product to sell, leave/edit a review, like a product, add to cart).
* Logged in users and logged out users are directed to a landing page recommending various category discoveries to find products, trending gifts, personalized gifts, editor picks, and more!

## 2. Products

* Users can create, update, and delete products.
* Products will contain both text and images.
* Each product displays its product name, cost, star reviews if there are any available and if it has been favorited by the user.
* Users can navigate to a detailed view of a product which includes the written reviews and description of the product.
* Users can view a list all their listings.
* The main feed displays products from all users.

## 3. Reviews

* Users can review any product as long as it is not their own.
* Users can update or delete their own reviews.
* Users can view a list all the reviews they have created.
* Each review displays a star rating between 1 to 5 stars, the review content, name of reviewer and posted date (MM/DD/YYYY).
* Reviews are displayed beneath the products they are associated with.

## 4. Favorites

* Users can like and unlike products.
* Each products displays a heart icon that will notify users if they have liked a product or not.
* Users can view a list of products they have liked.

## 5. Cart

* Users can view a shopping cart with items they would like to purchase.
* Users can add and remove items from their cart.

## 6. Search

* Users search for certain types of products in the search bar.
* Users can sort through their postings via a filter function
 
<!--!!END -->
<!--!!ADD -->
<!-- # `<name of application here>` -->
<!--!!END_ADD -->

## Database Schema Design

<!--!!START SILENT -->
[group5-database-schema]: https://media.discordapp.net/attachments/1133156281809637466/1135010217881513984/image.png?width=1040&height=676

![group5-database-schema]

<!-- ./images/group5-database-schema.png -->
<!--!!END -->
<!--!!ADD -->
<!-- `<insert database schema design here>` -->
<!--!!END_ADD -->

## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required"
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden"
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/session
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response when there is a logged in user
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 1,
        "firstName": "demo1",
        "lastName": "work1",
        "email": "demo@aa.io",
        "username": "Demo"
      }
    }
    ```

* Successful Response when there is no logged in user
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": null
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/session
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "credential": "demo@aa.io",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 1,
        "firstName": "demo1",
        "lastName": "work1",
        "email": "demo@aa.io",
        "username": "Demo"
      }
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials"
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/users
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "demo2",
      "lastName": "work2",
      "email": "marnie@aa.io",
      "username": "marnie",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 1,
        "firstName": "demo2",
        "lastName": "work2",
        "email": "marnie@aa.io",
        "username": "marnie"
      }
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 500
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 500
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```

## Products

### Get all Products

Returns all the products.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/products
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Products": [
        {
          "id": 1,
          "itemName": "Spiked Collar",
          "price": 15.99,
          "description": "Black pleather spiked collar will attract the attention you seek!",
          "previewImage": "image url",
          "category": "jewelry"
        }
      ]
    }
    ```

### Get all Products owned by the Current User

Returns all the products owned (created) by the current user.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/products/current
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Products": [
        {
          "id": 1,
          "ownerId": 1,
          "itemName": "Spiked Collar",
          "price": 15.99,
          "description": "Black pleather spiked collar will attract the attention you seek!",
          "previewImage": "image url",
          "category": "jewelry",
        }
      ]
    }
    ```

### Get details of a Product from an id

Returns the details of a product specified by its id.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/products/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "itemName": "Spiked Collar",
      "price": "15.99",
      "description": "Black pleather spiked collar will attract the attention you seek!",
      "previewImage": "image url",
      "category": "jewelry",
      "quantity": 3,
      "sellerId": 3,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
      "Reviews": [
        {
          "id": 1,
          "userId": 1,
          "star": 4,
          "review": "looks so cute",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36" ,
        },
        {
          "id": 2,
          "userId": 1,
          "star": 5,
          "review": "matches my outfit perfectly",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36" ,
        }
      ],
      "Seller": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "email": "john@aa.io",
        "username": "john",
      }
    }
    ```

* Error response: Couldn't find a Product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found"
    }
    ```

### Create a Product

Creates and returns a new Product.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/products
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "item_name": "Spiked Collar",
      "price": 15.99,
      "description": "Black pleather spiked collar will attract the attention you seek!",
      "quantity": 3,
      "previewImage": "image url",
      "category": "jewelry",
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "sellerId": 1,
      "item_name": "Spiked Collar",
      "price": "15.99",
      "description": "Black pleather spiked collar will attract the attention you seek!",
      "quantity": 3,
      "previewImage": "image url",
      "category": "jewelry",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
      "item_name": "Item name is required",
      "price": "Price is required",
      "description": "Description is required",
      "quantity": "Quantity is required",
      "previewImage": "Preview image is required",
      "category": "Category is required",
      }
    }
    ```

### Delete a Product

Deletes an existing product.

* Require Authentication: true
* Require proper authorization: Product must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: DELETE
  * URL: /api/products/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find a Product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found"
    }
    ```

## REVIEWS

### Get all Reviews of the Current User

Returns all the reviews written by the current user.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/reviews/your_reviews
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "User":{"id": 1,
            "firstName": "John",
            "lastName": "Smith"
      }
      "Reviews": [
        {
          "id": 1,
          "userId": 1,
          "stars": 5,
          "review": "This was an awesome product!",
          "Product": {
            "id": 1,
            "sellerId": 1,
            "item_name": "Spiked Collar",
            "price": "15.99",
            "description": "Black pleather spiked collar will attract the attention you seek!",
            "previewImageURL": "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/a868ad77-879d-40d7-8bed-dad04be63a15/f43af8aa-0309-40d6-a244-87b52d0ef5df/media._SL480_.jpeg",
            "quantity": 3,
            "category": "jewelry",
          },
        }
      ]
    }
    ```

### Get all Reviews by a Products's id

Returns all the reviews that belong to a product specified by product id.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/products/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "itemName": "Spiked Collar",
      "price": "15.99",
      "description": "Black pleather spiked collar will attract the attention you seek!",
      "previewImage": "image url",
      "category": "jewelry",
      "quantity": 3,
      "sellerId": 3,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
      "Reviews": [
        {
          "id": 1,
          "userId": 1,
          "star": 4,
          "review": "looks so cute",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36" ,
        },
        {
          "id": 2,
          "userId": 1,
          "star": 5,
          "review": "matches my outfit perfectly",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36" ,
        }
      ],
      "Seller": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "email": "john@aa.io",
        "username": "john",
      }
    }
    ```

* Error response: Couldn't find a product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Item couldn't be found"
    }
    ```

### Create a Review for a Product based on the Product's id

Create and return a new review for a product specified by id.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/products/:productId/reviews
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "review": "This was an awesome product!",
      "stars": 5,
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "stars": 5,
      "review": "This was an awesome product!",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "review": "Review text is required",
        "stars": "Stars must be rated from 1 to 5",
      }
    }
    ```

* Error response: Couldn't find a Product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found"
    }
    ```

* Error response: Review from the current user already exists for the Product
  * Status Code: 500
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already has a review for this Product"
    }
    ```

### Edit a Review from products page

Update and return an existing review.

* Require Authentication: true
* Require proper authorization: Review must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: PUT
  * URL: /api/products/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "review": "This was an awesome product!",
      "stars": 5,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "stars": 5,
      "review": "This was an awesome product!",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "review": "Review text is required",
        "stars": "Stars must be rated from 1 to 5",
      }
    }
    ```

* Error response: Couldn't find a product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found"
    }
    ```

### Edit a Review from the user's review page

Update and return an existing review.

* Require Authentication: true
* Require proper authorization: Review must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: PUT
  * URL: /api/reviews/your_reviews
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "review": "This was an awesome product!",
      "stars": 5,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "stars": 5,
      "review": "This was an awesome product!",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "review": "Review text is required",
        "stars": "Stars must be rated from 1 to 5",
      }
    }
    ```


### Delete a Review from Product page

Delete an existing review.

* Require Authentication: true
* Require proper authorization: Review must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: DELETE
  * URL: /api/products/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find a Product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found"
    }
    ```

### Delete a Review from the Users review page

Delete an existing review.

* Require Authentication: true
* Require proper authorization: Review must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: DELETE
  * URL: /api/reviews/your_reviews
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```


## Shopping Cart

### Get all of the Current User's Shopping Cart

Return all the shopping cart that the current user has made.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/carts/shopping_cart
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Shopping Cart": [
        {
          "id": 1,
          "userId": 2,
          "productId": 1,
          "Products":
            {
            "id": 1,
            "sellerId": 1,
            "itemName": "Spiked Collar",
            "price": 15.99,
            "description": "Black pleather spiked collar will attract the attention you seek!",
            "quantity": 3,
            "previewImage": "image url",
            "category": "jewelry",
            "createdAt": "2021-11-19 20:39:36",
            "updatedAt": "2021-11-19 20:39:36" ,
            },
        }
      ]
    }
    ```

### Add Item to Cart

Adds an item to the cart for the current user

* Require Authentication: True
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/products/:productId/add_to_cart
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You've successfully added this item to cart."
    }
    ```

* Error response: Item already added to the cart
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You already added the item to the cart."
    }
    ```

* Error response: Current user Id matches product sellerId
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You cannot add your own product to the cart."
    }
    ```

### Delete a Shopping Cart Item

Delete an existing cartId.

* Require Authentication: true
* Require proper authorization: Shopping Cart must belong to the current user or the
  cart item must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: DELETE
  * URL: /api/carts/shopping_cart/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find an item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Item couldn't be found"
    }
    ```


### Get all Favorites by Current User

Returns all the Favorite Items that belong to the Current User

* Require Authentication: True
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/favorites/current
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 2,
        "first_name": "John",
        "last_name": "Smith",
      "userFavorites":
        {
            "Seller": {
              "id": 1,
              "first_name": "Demo",
              "last_name": "User",
              "username": "demo",
            },
            "Product":
            {
              "id": 1,
              "productId": 1,
              "itemName": "Spiked Collar",
              "price": 15.99,
              "description": "Black pleather spiked collar will attract the attention you seek!",
              "previewImage": "image url",
              "category": "jewelry",
              "sellerId": 1,
            }
        }
    }
    }
    ```

### Favorite an Item through products page

Favorites an item for the current user

* Require Authentication: True
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/products/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Error response: Item already added to favorites
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You already favorite this item."
    }
    ```

* Error response: Current user Id matches product sellerId
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You cannot favorite your own product."
    }
    ```

* Error response: Not logged in
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You need to be logged in."
    }
    ```



### Favorite an Item through home page

Favorites an item for the current user

* Require Authentication: True
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Error response: Item already added to favorites
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You already favorite this item."
    }
    ```

* Error response: Current user Id matches product sellerId
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You cannot favorite your own product."
    }
    ```

* Error response: Not logged in
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "You need to be logged in."
    }
    ```


### Delete a Favorite by Current User on products page

Delete a Favorite by Current User

* Require Authentication: True
* Request
  <!--!!START SILENT -->
  * Method: DELETE
  * URL: /api/favorites/:productId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

### Delete a Favorite by Current User on favorites page

Delete a Favorite by Current User

* Require Authentication: True
* Request
  <!--!!START SILENT -->
  * Method: DELETE
  * URL: /api/favorites/current
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none
