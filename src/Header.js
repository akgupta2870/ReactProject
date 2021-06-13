import React from "react";
import "./Headercss.css";
import {
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
export function Header() {
  return (
    <>
      <div
        style={{ backgroundColor: "#1c112e", height: "50px", width: "1150px" }}
      >
        <Row>
          <Col style={{ color: "white", margin: "8px" }}>LOGO</Col>
          <Col style={{ margin: "8px" }}>
            <InputGroup>
              <FormControl
                placeholder="Search"
                aria-label="Recipient's username with two button addons"
                size="sm"
                margin="20px"
              />
              <br></br>
              <Button padding="20px" variant="outline-secondary" size="sm">
                ?
              </Button>
              <br></br>
              <Button variant="light" size="sm">
                ()
              </Button>
            </InputGroup>
          </Col>
          {/* <Button
                backgroundColor="white"
                variant="outline-secondary"
                size="sm"
              >
                ()
              </Button> */}
          {/* <Col style={{ textAlign: "left", size: "500px" }}>
              <InputGroup className="mb-3" style={{ textAlign: "" }}>
                <FormControl placeholder="Search " />
              </InputGroup>
            </Col>
            <Col style={{ textAlign: "left", float: "right" }}>
              <Button
                variant="outline-light"
                size="sm"
                style={{ width: "30px", margin: "5px" }}
              >
                ?
              </Button>
              <Button variant="outline-light" size="sm" margin="5px">
                pr
              </Button>
            </Col> */}
        </Row>
      </div>
    </>
  );
}
export default Header;
