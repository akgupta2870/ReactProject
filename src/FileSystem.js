import React from "react";
import { TableContent } from "./TableContent";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  CustomToggle,
  Table,
  CustomMenu,
} from "react-bootstrap";
export function FileSystem() {
  return (
    <>
      <div
        style={{ backgroundColor: "white", height: "500px", textAlign: "left" }}
      >
        <div>
          <h5
            style={{
              borderBottom: "1px solid #a4e0da",
              color: "#36b5a8",
              fontSize: "15px",
              padding: "10px",
            }}
          >
            Header
          </h5>
        </div>
        <div>
          <div>
            <Container>
              <Row>
                <Col>FileSystem</Col>
                <Col></Col>
                <Col lg="5" style={{ textAlign: "right" }}>
                  <Button margin="10px" variant="outline-secondary" size="sm">
                    @
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#8a8f91",
                      border: " 1px solid white",
                    }}
                    size="sm"
                  >
                    CreateFolder +
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    style={{
                      backgroundColor: "#8a8f91",
                      border: " 1px solid white",
                    }}
                    disabled
                  >
                    Upload +
                  </Button>
                  <Dropdown size="sm" style={{ display: "inline-block" }}>
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        border: " 1px solid white",
                      }}
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">one</Dropdown.Item>
                      <Dropdown.Item eventKey="2">two</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            style={{
              border: "1px solid #a4e0da",
              borderRadius: "5px",
              padding: "30px",
            }}
          >
            <TableContent />
          </div>
        </div>
      </div>
    </>
  );
}
