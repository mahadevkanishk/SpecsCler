import React, { useState } from "react";
import {
  Button,
  Col,
  Modal,
  Row,
  Image,
  Container,
  ListGroup,
  ProgressBar,
  Form,
  ListGroupItem,
} from "react-bootstrap";

function FormLens({
  type,
  setType,
  product,
  qty,
  setQty,
  addToCartHandler,
  setProductFD,
  ProductFD,
}) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const Handleform1 = (value) => {
    setProductFD({ ...ProductFD, frame: value });
    setType("2");
  };
  const Handleform2 = (value) => {
    setProductFD({ ...ProductFD, prescription: value });
    setType("3");
  };
  const Handleform3 = (value) => {
    setProductFD({ ...ProductFD, lens: value });
    setType("4");
  };
  const handleClose = () => {
    setType("1");
    setProductFD({ ...ProductFD, frame: "", prescription: "", lens: "" });
    setShow(false);
  };
  const handleBack1 = () => {
    setType("1");
  };
  const handleBack2 = () => {
    setType("2");
  };
  const handleBack3 = () => {
    setType("3");
  };
  return (
    <>
      <Button
        type='button'
        onClick={handleShow}
        className=' Psbutton shadow btn-light'
      >
        select lenses and purchase
      </Button>
      <Container>
        <Modal show={show} fullscreen onHide={handleClose}>
          <Row style={{ height: "100%" }}>
            <Col style={{ margin: "auto" }} className='text-center' md={8}>
              <Image src={product.image} alt={product.name} fluid />
              <h3>{product.name}</h3>
            </Col>

            {(() => {
              switch (type) {
                case "1":
                  return (
                    <Col className='shadow' md={4}>
                      <ProgressBar
                        className=' Fpro shadow'
                        variant='info'
                        animated
                        now={25}
                      />
                      <Modal.Header closeButton>
                        <Button
                          onClick={handleClose}
                          size='sm'
                          className='btn-light Psbutton shadow'
                        >
                          <i class='fa fa-arrow-left' aria-hidden='true'></i>
                        </Button>
                      </Modal.Header>

                      <Modal.Title className='text-center'>
                        Select frame Properties
                      </Modal.Title>
                      <Modal.Body>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              value='wide'
                              onClick={() => {
                                Handleform1("wide");
                              }}
                              className='Psbutton shadow btn-light'
                            >
                              Wide
                            </Button>
                            <p className='my-2 FP'>
                              {" "}
                              The width of this type of frame would be for broad
                              faces
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform1("medium");
                              }}
                              value='medium'
                              className='Psbutton shadow btn-light'
                            >
                              Medium
                            </Button>
                            <p className='my-2 FP'>
                              For our lovely customer who have a average-sized
                              face
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              value='small'
                              onClick={() => {
                                Handleform1("small");
                              }}
                              className='Psbutton shadow btn-light'
                            >
                              Small
                            </Button>
                            <p className='my-2 FP'>
                              Making our small faced customer happy with new
                              style
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => Handleform1("metal")}
                              value='metal'
                              className='Psbutton shadow btn-light'
                            >
                              Metal
                            </Button>
                            <p className='my-2 FP'>
                              Medium sized metal frames that provides a composed
                              look
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <h6 className='my-2'>
                              Please choose the frame depending upon face size
                              so it fits you perfectly
                            </h6>
                          </ListGroup.Item>
                        </ListGroup>
                      </Modal.Body>
                    </Col>
                  );
                case "2":
                  return (
                    <Col className='shadow' md={4}>
                      <ProgressBar
                        className=' Fpro shadow'
                        variant='info'
                        animated
                        now={50}
                      />
                      <Modal.Header closeButton>
                        <Button
                          onClick={handleBack1}
                          size='sm'
                          className='btn-light Psbutton shadow'
                        >
                          <i class='fa fa-arrow-left' aria-hidden='true'></i>
                        </Button>
                      </Modal.Header>

                      <Modal.Title className='text-center'>
                        Select Prescription Type
                      </Modal.Title>
                      <Modal.Body>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform2("single-vision");
                              }}
                              className='Psbutton shadow btn-light'
                            >
                              Single-Vision
                            </Button>
                            <p className='my-2  FP'>
                              {" "}
                              Corrects for one field of vision (near,
                              intermediate, or distance)
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform2("progressive");
                              }}
                              value='progressive'
                              className='Psbutton shadow btn-light'
                            >
                              Progressive
                            </Button>
                            <p className='my-2 FP'>
                              Corrects near, intermediate, and distance fields
                              of vision in one lens so you don't have to switch
                              between multiple pairs
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform2("non-prescription");
                              }}
                              value='non-prescription'
                              className='Psbutton shadow btn-light'
                            >
                              Non-prescription
                            </Button>
                            <p className='my-2 FP'>
                              Offers style and protection with no vision
                              correction
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform2("reader");
                              }}
                              value='reader'
                              className='Psbutton shadow btn-light'
                            >
                              Reader
                            </Button>
                            <p className='my-2 FP'>
                              Offer simple magnification for, well, reading (no
                              prescription necessary)
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <h6 className='my-2 FP'>
                              Please choose the lens/Prescription depending upon
                              need and your eye
                            </h6>
                          </ListGroup.Item>
                        </ListGroup>
                      </Modal.Body>
                    </Col>
                  );
                case "3":
                  return (
                    <Col className='shadow' md={4}>
                      <ProgressBar
                        className=' Fpro shadow'
                        variant='info'
                        animated
                        now={75}
                      />
                      <Modal.Header closeButton>
                        <Button
                          onClick={handleBack2}
                          size='sm'
                          className='btn-light Psbutton shadow'
                        >
                          <i class='fa fa-arrow-left' aria-hidden='true'></i>
                        </Button>
                      </Modal.Header>

                      <Modal.Title className='text-center'>
                        Select Lens Properties
                      </Modal.Title>
                      <Modal.Body>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform3("classic");
                              }}
                              className='Psbutton shadow btn-light'
                            >
                              Classic
                            </Button>
                            <p className='my-2 FP'>
                              {" "}
                              Scratch-resistant, anti-reflective lenses that
                              block 100% of UV rays
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform3("blue-light-filtering");
                              }}
                              className='Psbutton shadow btn-light'
                            >
                              Blue-light filtering
                            </Button>
                            <p className='my-2 FP'>
                              Scratch-resistant, anti-reflective lenses that
                              block 100% of UV rays; they also filter more blue
                              light than our classic lenses—and may help if
                              screen time is affecting your sleep.
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              size='sm'
                              onClick={() => {
                                Handleform3("light-responsive");
                              }}
                              className='Psbutton shadow btn-light'
                            >
                              Light responsive
                            </Button>
                            <p className='my-2 FP'>
                              Scratch-resistant, anti-reflective lenses that
                              block 100% of UV rays and transition from clear to
                              a darker tint outdoors (choose from grey, brown or
                              green). They also filter more blue light than our
                              classic lenses.
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <h6 className='my-2 FP'>
                              Please choose the lens depending upon needs,
                              budget face size so it fits you perfectly
                            </h6>
                          </ListGroup.Item>
                        </ListGroup>
                      </Modal.Body>
                    </Col>
                  );
                case "4":
                  return (
                    <Col className='shadow' md={4}>
                      <ProgressBar
                        className=' Fpro shadow'
                        variant='info'
                        animated
                        now={100}
                      />
                      <Modal.Header closeButton>
                        <Button
                          onClick={handleBack3}
                          size='sm'
                          className='btn-light Psbutton shadow'
                        >
                          <i class='fa fa-arrow-left' aria-hidden='true'></i>
                        </Button>
                      </Modal.Header>
                      <Modal.Title className='text-center'>
                        Check and Purchase
                      </Modal.Title>
                      <Modal.Body>
                        <ListGroup variant='flush'>
                          <ListGroupItem>
                            <Row>
                              <Col>Frame:</Col>
                              <Col>{ProductFD.frame}</Col>
                            </Row>
                          </ListGroupItem>
                          <ListGroupItem>
                            <Row>
                              <Col>Prescription:</Col>
                              <Col>{ProductFD.prescription}</Col>
                            </Row>
                          </ListGroupItem>
                          <ListGroupItem>
                            <Row>
                              <Col>Lens:</Col>
                              <Col>{ProductFD.lens}</Col>
                            </Row>
                          </ListGroupItem>
                          <ListGroup.Item>
                            <Row>
                              <Col>Status:</Col>
                              <Col>
                                {product.countInStock > 0
                                  ? "In Stock"
                                  : "Out Of Stock"}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                          {product.countInStock > 0 && (
                            <ListGroup.Item>
                              <Row>
                                <Col>Qty</Col>
                                <Col>
                                  <Form.Control
                                    size='sm'
                                    as='select'
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                  >
                                    {[
                                      ...Array(product.countInStock).keys(),
                                    ].map((x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    ))}
                                  </Form.Control>
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          )}
                          <ListGroupItem>
                            <Row>
                              <Col>Price:</Col>
                              <Col>${product.price}</Col>
                            </Row>
                          </ListGroupItem>

                          <ListGroup.Item>
                            <Button
                              onClick={addToCartHandler}
                              className='Psbutton btn-light rounded shadow'
                              type='button'
                              disabled={product.countInStock === 0}
                            >
                              Add To Cart
                            </Button>
                          </ListGroup.Item>
                        </ListGroup>
                      </Modal.Body>
                    </Col>
                  );

                default:
                  return (
                    <Col>
                      Sorry some Error is there, The technical team is looking
                      into it.
                    </Col>
                  );
              }
            })()}
          </Row>
        </Modal>
      </Container>
    </>
  );
}

export default FormLens;
