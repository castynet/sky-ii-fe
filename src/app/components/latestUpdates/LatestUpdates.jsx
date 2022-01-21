import { Card, Button, Col, Row } from "react-bootstrap";
import * as styles from "./Styles.LatestUpdates";

export default function LatestUpdates() {
  return (
    <styles.Wrapper>
      <Card
        style={{
          width: "100%",
          height: "15rem",
          backgroundColor: "#f1f0ff",
          // background:'#f1f0ff url(assets/wine2.jpg)no-repeat ',
          
        }}
      >
        <Row>
          <Col>
          </Col>
          <Col style={{paddingTop:"40px", textAlign:"center", color: "#151875"}}>
            <h4>Get Latest Updates By Subscribing </h4>
            <h6> To Our Newsletter</h6>
            <br/>
            <Button 
              variant="secondary"
              style={{
                backgroundColor: "#fb2e86",
                outline: "none",
                border: "none",
                alignItems: "center",
              }}
            >
              Shop Now
            </Button>
          
          </Col>
          <Col>
          </Col>


        </Row>
      </Card>
    </styles.Wrapper>
  );
}
