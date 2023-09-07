store = {
    Products: {
        products: {},
        userProducts: {},
        singleProduct: { Reviews: {}, Seller: {}, ProductImages: [] },
        search: {},
    },

    Reviews: {
        userReviews: {
            Reviews: {
                [reviewId]: {
                    reviewData
                }
            },
            User: {
                userData
            }
        },
        productReviews: {
            Reviews: {
                [reviewId]: {
                    User: {
                        userData
                    },
                    reviewData
                }
            }
        },
    },


    ShoppingCart: {
        userCart: {
            [productId]: {
                Product: {
                    productData
                }
            }
        }
    },

    session: {
        user: {
            [userId]: {
                userData,
            },
        },
    },

    Favorites: {
        user: {
            userData
        },
        userFavorites: {
            [productId]: {
                productData,
                "Seller": {
                    sellerData
                },
            },
        },
    }

}
