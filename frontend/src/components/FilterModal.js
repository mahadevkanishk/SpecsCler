import React, { useState } from "react";
import { Col, Row, Button, Form, Modal, Container } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

function FilterModal({ setType, setFArray, setFBArray, products, type }) {
  const [show, setShow] = useState(false);
  const [MaxPrice, setMaxPrice] = useState(99999);
  const [MinPrice, setMinPrice] = useState(10);

  const [Brand, setBrand] = useState("Any");
  const [Star, setStar] = useState(0);

  const handleClose = () => setShow(false);
  const removeFilter = () => setType("All");
  const handleShow = () => {
    setMaxPrice(99999);
    setMinPrice(10);
    setBrand("Any");
    setStar(0);
    setShow(true);
  };
  console.log({ Brand, Star, MaxPrice });
  const handleSaveClose = (e) => {
    e.preventDefault();
    setFArray(
      products.filter(
        (product) =>
          product.rating >= Star &&
          product.price <= MaxPrice &&
          product.price >= MinPrice
      )
    );
    setFBArray(
      products.filter(
        (product) =>
          product.rating >= Star &&
          product.price <= MaxPrice &&
          product.price >= MinPrice &&
          product.brand === Brand
      )
    );

    setShow(false);
    setType("Filter");
  };
  return (
    <>
      {type === "Filter" ? (
        <Button
          style={{ backgroundColor: "#2F99D1" }}
          className='shadow primary rounded'
          type='button'
          onClick={removeFilter}
        >
          <i class='fa-solid fa-check fa-bounce'></i>Applied
        </Button>
      ) : (
        <Button
          className='shadow btn-light rounded'
          type='button'
          onClick={handleShow}
        >
          <i className='fa-solid fa-filter'></i>FILTER
        </Button>
      )}
      <Container>
        <Modal show={show} size='lg' onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter To Your Needs</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group as={Row}>
                <Form.Label as='legend'>Rating</Form.Label>
                <Col>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className='mb-3'>
                      <Form.Check
                        inline
                        label='1+'
                        value={1}
                        name='group1'
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={(e) => setStar(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label='2+'
                        value={2}
                        name='group1'
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => setStar(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label='3+'
                        value={3}
                        name='group1'
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => setStar(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label='4+'
                        value={4}
                        name='group1'
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => setStar(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label='5'
                        value={5}
                        name='group1'
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => setStar(e.target.value)}
                      />
                    </div>
                  ))}
                </Col>
                <Form.Label as='legend'>Set Minimum Price</Form.Label>
                <Col xs='9'>
                  <RangeSlider
                    min={10}
                    max={100000}
                    value={MinPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </Col>
                <Col xs='3'>
                  <Form.Control
                    className='text-center'
                    value={MinPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </Col>
                <Form.Label as='legend'> Set Maximum Price</Form.Label>
                <Col xs='9'>
                  <RangeSlider
                    min={10}
                    max={100000}
                    disabled={MinPrice < MaxPrice ? false : true}
                    value={MaxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </Col>
                <Col xs='3'>
                  <Form.Control
                    className='text-center'
                    value={MaxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </Col>
                <Form.Label as='legend'>Brand</Form.Label>
                <Col>
                  <Form.Select onChange={(e) => setBrand(e.target.value)}>
                    <option>Brands</option>

                    <option value='cler1'>cler1</option>
                    <option value='cler2'>cler2</option>
                    <option value='cler3'>cler3</option>
                    <option value='cler4'>cler4</option>
                    <option value='cler5'>cler5</option>
                    <option value='Gucci'>Gucci</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button className='btn-dark rounded' onClick={handleClose}>
                Close
              </Button>
              <Button className='btn-dark rounded' onClick={handleSaveClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </>
  );
}

export default FilterModal;
