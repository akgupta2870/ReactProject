import { useState } from "react";
import { ReminderUI } from "./ReminderUI";
import "./Reminder.css";
import {
  Button,
  Form,
  Col,
  Table,
  Container,
  Card,
  Row,
} from "react-bootstrap";
export function Reminder() {
  const [data, setData] = useState({});
  const [dataarray, setDataarray] = useState([]);
  //const [date,setDate] =useState(new date());
  const onchange = (event) => {
    const { name, value } = event.target;
    const fields = (olddata) => {
      return { ...olddata, [name]: value };
    };
    setData(fields);
  };
  const daysleft = () => {
    //    const dat =  data.date;
    //    const result =
  };
  const buttonClick = () => {
    console.log(data);
    setDataarray((oldarray) => [...oldarray, data]);
    setData({});
  };
  return (
    <>
      <Card style={{ height: "500px" }}>
        <Card.Body>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Mobile Number
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="mobile number " />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Date Of Birthday
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="D.O.B" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Message
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="Text" placeholder="Message" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>ashish</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* <div>
        <label >Birthday:</label>
          <input className="input" type="date" name="date" onChange={onchange} value={data.date||""}/></div> 
        <div>
        <label >Name Of Person:</label>
        <input type="text" name="name"  onChange={onchange} value={data.name||""}/></div>
        <div>
        <label>Mobile Number </label>
        <input type="text"  name="mobile"  onChange={onchange} value={data.mobile||""}/></div>
        <div>
        <label>Birthday Messsage </label>
        <input type="text" name="message"  onChange={onchange} value={data.message||""}/></div>
        <div>
        <button onClick={buttonClick}>Submit reminder </button></div>
        <ReminderUI data={dataarray}/>  */}
    </>
  );
}
