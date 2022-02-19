import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

import Rating from './Rating'

const Product = ({ product }) => {
  const usdToInrFactor = 74.68
  return (
    <>
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name.length>=30?`${product.name.slice(0,30)}...`:product.name}</strong>
                    </Card.Title>
                </Link> 
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </Card.Text>
                <Card.Text as='h3'>
                    &#x20b9;{Math.ceil(product.price*usdToInrFactor)}
                </Card.Text>
            </Card.Body>
        </Card>  
    </>
  )
}

export default Product