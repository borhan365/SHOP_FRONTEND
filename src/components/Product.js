import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-1 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`} className="text-decoration-none">
                    <Card.Title as="div">
                        <h5> {product.name} </h5>
                    </Card.Title>

                    <Card.Text as="div">
                        <Rating key={product._id} value={product.rating} text={`${product.numReviews} reviews`} />   
                    </Card.Text>

                    <Card.Text as="h3" className="py-1">
                        { product.price }   
                    </Card.Text>

                </Link>
            </Card.Body>

        </Card>
    )
}

export default Product
