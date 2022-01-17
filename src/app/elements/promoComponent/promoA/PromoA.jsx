import { Card, Button, Col, Row } from "react-bootstrap";
import * as styles from "./Styles.PromoA";

export default function PromoA() {
  return (
    <styles.Wrapper>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                congue pharetra neque id laoreet. Suspendisse accumsan
                consectetur enim, a tincidunt odio mattis ac.
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
                    <li>Clear lines &amp; geometric figures</li>
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
              data-testid="promo-a-image"
            />
          </Col>
        </Row>
      </Card>
    </styles.Wrapper>
  );
}
