<Col md={4}>
  <Card>
    <ListGroup variant='flush'>
      {product.countInStock > 0 && (
        <ListGroup.Item>
          <Row>
            <Col>Qty</Col>
            <Col>
              <Form.Control
                as='select'
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </ListGroup.Item>
      )}

      <ListGroup.Item>
        <Button
          onClick={addToCartHandler}
          className='btn-block'
          type='button'
          disabled={product.countInStock === 0}
        >
          Add To Cart
        </Button>
      </ListGroup.Item>
    </ListGroup>
  </Card>
</Col>;
