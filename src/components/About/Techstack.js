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
        <div className="flex justify-center w-full items-center">
          <SiNextdotjs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <DiJavascript1 />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <TbBrandGolang />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <DiNodejs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <DiReact />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <SiSolidity />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <DiMongodb />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <SiNextdotjs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <DiGit />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <SiFirebase />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <SiRedis />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <SiPostgresql />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center w-full items-center">
          <DiPython />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons flex justify-center">
        <div className="flex justify-center w-full items-center">
          <DiJava />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
