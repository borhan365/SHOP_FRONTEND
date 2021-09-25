
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';
import Spinner from "../components/Loading";
import Message from "../components/Message";
import Product from '../components/Product';

function HomeScreen() {

  const dispatch = useDispatch(); 

  const productList = useSelector(state => state.productList); 

  const { loading, error, products } = productList; 
  
  useEffect(() => {
      dispatch(listProducts());
  }, [dispatch])


  return (
    <>
      <h1>Latest Products</h1>

      { loading ? <Spinner /> : error ? <Message variant="danger">{error}</Message> :

        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>

      }
      
    </>
  );
}

export default HomeScreen;
