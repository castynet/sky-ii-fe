import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import * as styles from "./styles";

const Sofa = () => {
  return (
    <styles.Wrapper>
      <div>
        <Row style={{ color: "#151875" }}>
          <Card
            style={{
              width: "55rem",
              height: "18rem",
              backgroundColor: "#f1f0ff",
            }}
          >
            <Row>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>20% Discount of All Products</Card.Title>
                  <p style={{ color: "#fb2e86" }}>Earns sofa compact</p>
                  <p style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris congue pharetra neque id laoreet. Suspendisse
                    accumsan consectetur enim, a tincidunt odio mattis ac.
                  </p>
                  <Row style={{ fontSize: "12px" }}>
                    <Col xs={6}>
                      <ul>
                        <li>Material expose like metals</li>
                        <li>Simple neutral colours</li>
                      </ul>
                    </Col>
                    <Col xs={6}>
                      <ul>
                        <li>Clear lines & geometric figures</li>
                        <li>Material expose like metals</li>
                      </ul>
                    </Col>
                  </Row>
                  <Button
                    variant="secondary"
                    style={{
                      backgroundColor: "#fb2e86",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    Shop Now
                  </Button>
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Img
                  variant="top"
                  style={{ width: "270px", marginLeft: "155px" }}
                  src="/assets/couch2.jpg"
                />
              </Col>
            </Row>
          </Card>
        </Row>
        <br />
        <Row style={{ color: "#151875" }}>
          <Card
            style={{
              width: "55rem",
              height: "17rem",
              backgroundColor: "#f1f0ff",
            }}
          >
            <Row>
              <Col md={6}>
                <Card.Img
                  style={{ width: "270px" }}
                  variant="top"
                  src="/assets/couch3.jpeg"
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>
                    Unique Features of Latest and Trending Products
                  </Card.Title>
                  <Card.Text>
                    <ul style={{ fontSize: "12px" }}>
                      <li style={{ color: "#fb2e86" }}>
                        <p style={{ color: "#151875" }}>
                          All frames constructed with hard wood solids and
                          laminates
                        </p>
                      </li>
                      <li style={{ color: "#2B2BF5" }}>
                        <p style={{ color: "#151875" }}>
                          Reinforced with double wood dowels, glue, screw,
                          nails, corner blocks and machine nails.
                        </p>
                      </li>
                      <li style={{ color: "#2BF5CC" }}>
                        <p style={{ color: "#151875" }}>
                          Arms, backs and seats are structurally reinforced
                        </p>
                      </li>
                    </ul>
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button
                        variant="secondary"
                        style={{
                          backgroundColor: "#fb2e86",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        Add To Cart
                      </Button>
                    </Col>
                    <Col style={{ fontSize: "12px" }}>
                      <p>
                        B&B Italian Sofa
                        <br />
                        $32.00
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>
      </div>
    </styles.Wrapper>
  );
};

export default Sofa;
