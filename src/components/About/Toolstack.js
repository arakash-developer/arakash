import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div className="flex justify-center w-full items-center">
        <SiMacos />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="flex justify-center w-full items-center">
        <SiVisualstudiocode />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="flex justify-center w-full items-center">
        <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="flex justify-center w-full items-center">
        <SiSlack />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="flex justify-center w-full items-center">
        <SiVercel />
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
