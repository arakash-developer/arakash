import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
