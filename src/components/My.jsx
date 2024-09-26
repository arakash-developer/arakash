import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Github from "./About/Github";
import Techstack from "./About/Techstack";
import Aboutcard from "./About/AboutCard";
import laptopImg from "../Assets/about.png";
import Toolstack from "./About/Toolstack";


const My = () => {
  return (
    <Container fluid className="about-section">
    <Particle />
    <Container>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <p>esaedfvdavcdsa535235</p>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default My