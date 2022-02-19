import { Container } from "react-bootstrap"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Card, Image, ListGroup, Button} from 'react-bootstrap'
import products from "../products"
import Rating from "../components/Rating"


const ProductDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const usdToInrFactor = 74.68
  const product = products.find(p => p._id === params.id)

  return (
    <>
        <Link className='btn btn-outline-dark my-3' to='/'>
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  {product.name}
                </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>
                Price: &#x20b9;{Math.ceil(product.price*usdToInrFactor)}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Price: 
                    </Col>
                    <Col>
                      <strong> &#x20b9;{Math.ceil(product.price*usdToInrFactor)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status: 
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  {
                      product.countInStock ? <Row>
                          <Col md={6}>
                            <Button variant="warning" type='button'>Add to Cart</Button>
                          </Col>
                          <Col md={6}>
                            <Button variant="success" type='button'>Buy Now</Button>
                          </Col>
                      </Row> : <Row>
                        <Col>
                          <div className="d-grid gap-2">
                            <Button variant="info" type='button'>Notify Me</Button>
                          </div>
                        </Col>
                      </Row>
                    }
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      
    </>
  )
}

export default ProductDetails