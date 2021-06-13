import React from "react";
import { Table, InputGroup, FormControl, Dropdown } from "react-bootstrap";
export function TableContent() {
  return (
    <>
      <div>
        <InputGroup className="mb-3">
          <FormControl placeholder="What are you looking for " />
          <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
        </InputGroup>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th style={{ textAlign: "center" }}>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: " 1px solid white",
                    }}
                  >
                    Last Modified
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: " 1px solid white",
                      width: "20px",
                    }}
                  >
                    Size
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">one</Dropdown.Item>
                    <Dropdown.Item eventKey="2"></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
