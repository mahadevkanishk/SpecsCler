import React, { useEffect } from "react";
import Product from "../components/Products";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { goggleslistProducts } from "../actions/productActions";

const GogglesScreen = () => {
  const dispatch = useDispatch();
  const productGogglesList = useSelector((state) => state.productGogglesList);
  const { loading, error, products } = productGogglesList;
  useEffect(() => {
    dispatch(goggleslistProducts());
  }, [dispatch]);

  return (
    <>
      <Meta />
      <h1>Latest Goggles</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default GogglesScreen;
