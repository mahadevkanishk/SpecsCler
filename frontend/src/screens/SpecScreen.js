import React, { useState, useEffect } from "react";
import Product from "../components/Products";
import FilterModal from "../components/FilterModal";
import { Row, Col, Button, Figure, Modal, Image } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Cover from "../assets/cover3.jpeg";
import Modelmen from "../assets/pics.001.jpeg";
import Modelwomen from "../assets/pics.002.jpeg";

import Meta from "../components/Meta";

import { useDispatch, useSelector } from "react-redux";
import { speclistProducts } from "../actions/productActions";

const timestamp = new Date("2023-05-24T06:34:44.663+00:00");

const SpecScreen = () => {
  const dispatch = useDispatch();
  const productSpecList = useSelector((state) => state.productSpecList);
  const { loading, error, products } = productSpecList;
  useEffect(() => {
    dispatch(speclistProducts());
  }, [dispatch]);

  const [show, setShow] = useState(true);

  const [style, setStyle] = useState("");
  const [type, setType] = useState("All");
  const [FArray, setFArray] = useState([]);
  const [FBArray, setFBArray] = useState([]);

  const handleClose = () => setShow(false);
  const handleClose1 = () => {
    setShow(false);
    setStyle("Men");
  };
  const handleClose2 = () => {
    setShow(false);
    setStyle("Women");
  };

  console.log("the FArray is - ", FArray);
  console.log("the FBArray is - ", FBArray);

  return (
    <>
      <Meta />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Modal
            size='xl'
            centered
            animation
            backdrop='static'
            keyboard={false}
            show={show}
            onHide={handleClose}
          >
            <Modal.Header style={{ display: "block", textAlign: "center" }}>
              <Modal.Title>Choose Your Style</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className='h-100 text-center'>
                <Col className=' text-center' xs={3}>
                  <Button
                    size='sm'
                    style={{
                      backgroundColor: "#2F99D1",
                      margin: "50% 0",
                    }}
                    className='model-button shadow btn rounded'
                    onClick={handleClose1}
                    type='button'
                  >
                    Men
                  </Button>
                </Col>
                <Col xs={3}>
                  <Image
                    style={{ height: "80%" }}
                    src={Modelmen}
                    fluid
                    className=' rounded'
                  />
                </Col>

                <Col xs={3}>
                  <Image
                    style={{ height: "84%" }}
                    src={Modelwomen}
                    fluid
                    className=' rounded'
                  />
                </Col>

                <Col xs={3}>
                  <Button
                    size='sm'
                    style={{ backgroundColor: "#2F99D1", margin: "50% 0" }}
                    className=' model-button shadow btn rounded'
                    onClick={handleClose2}
                    type='button'
                  >
                    Women
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>

          <Figure className='position-relative' style={{ width: "100%" }}>
            <Figure.Caption className='figcaption'>
              {style}'s Spectacles
              <p>Find The Best Eyeglasses For Yourself </p>
              <Button className='figcaptionbtn ' href='#pro' type='Button'>
                see more
              </Button>
            </Figure.Caption>
            <Figure.Image
              style={{ width: "auto", height: "auto" }}
              src={Cover}
              fluid
              className=' rounded'
            />
          </Figure>

          <h1 id='pro' className='text-center'>
            <Button
              href='#pro1'
              className=' buts shadow btn-light rounded'
              type='button'
              onClick={() => setType("All")}
            >
              ALL
            </Button>{" "}
            <Button
              href='#pro1'
              className=' buts shadow btn-light rounded'
              type='button'
              onClick={() => setType("NewArrivals")}
            >
              New Arrivals
            </Button>{" "}
            <Button
              href='#pro1'
              className='buts shadow btn-light rounded'
              type='button'
              onClick={() => setType("Popular")}
            >
              POPULAR
            </Button>
          </h1>
          <h2 className='text-end'>
            <FilterModal
              setFArray={setFArray}
              setFBArray={setFBArray}
              setType={setType}
              products={products}
              type={type}
            />
          </h2>
          <br id='pro1'></br>
          <hr></hr>
          {type === "All" && (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
          {type === "Popular" && (
            <Row>
              {products
                .filter((product) => product.numReviews >= 2)
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
          )}

          {type === "NewArrivals" && (
            <Row>
              {products
                .filter((product) => new Date(product.createdAt) > timestamp)
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
          )}

          {type === "Filter" &&
            (FBArray.length === 0 ? (
              <Row>
                {FArray.length === 0 ? (
                  <h1>Sorry, No product Found</h1>
                ) : (
                  FArray.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                      <Product product={product} />
                    </Col>
                  ))
                )}
              </Row>
            ) : (
              <Row>
                {FBArray.length === 0 ? (
                  <h1>Sorry, No product Found</h1>
                ) : (
                  FBArray.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                      <Product product={product} />
                    </Col>
                  ))
                )}
              </Row>
            ))}
          <hr></hr>
        </>
      )}
    </>
  );
};

export default SpecScreen;
