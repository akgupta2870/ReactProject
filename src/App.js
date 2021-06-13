import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Register } from "./Register";
import { ClassComponent } from "./ClassComponent";
import { Homework1 } from "./homework1";
import { Arrayhomework } from "./Arrayhomework";
import { Palindrome } from "./palindrome";
import { Factorial } from "./Factorial";
import { Fetch } from "./Fetch";
import { Clock } from "./Clock";
import { useState } from "react";
import { JsonGet } from "./JsonGet";
import { Filter } from "./Filter";
import { Delete } from "./Delete";
import { Update } from "./Update";
import { Reminder } from "./Reminder";
import { Container } from "react-bootstrap";
function App() {
  const abc = "wlcome to react ";
  //const [abc,setAbc]=useState("");
  const handler = (para1) => {};
  return (
    <div className="App">
      <Container>
        <Header />
        <Reminder />
        {/* <Homework1/>
      <Arrayhomework/>
      <Palindrome/>
      <Factorial/>
      <Clock/> */}
        {/* <Update/> */}
        {/* <Delete/> */}
        {/* <Filter/> */}
        {/* <JsonGet/>
        <Fetch tranferdata={ handler }/>  */}
        {/* <Register/>
           <ClassComponent/> */}
        {/* <Main para2={abc}/> */}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
