import { Row, Tab, Container, Col } from "react-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import { FileSystem } from "./FileSystem";
export function Navigation() {
  return (
    <>
      <div
        style={{ backgroundColor: "#c7d4d9", height: "700px", width: "1150px" }}
      >
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="tabs" className="flex-column">
                <Nav variant="tabs" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="fir">Menu</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav.Item>
                  <Nav.Link eventKey="first" color="black">
                    Home{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">FILE SYSYTEM</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Third">CLIENT</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first"></Tab.Pane>
                <Tab.Pane eventKey="second">
                  <FileSystem />
                </Tab.Pane>
                <Tab.Pane eventKey="third">{/* <Sonnet /> */}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
