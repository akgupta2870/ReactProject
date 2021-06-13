import {useState} from 'react';
import {Child1} from './Child1';
import {Child2} from './Child2';
export function Homework1()
{
    const [state,setState]=useState("");
    const [show,setShow]=useState(false);
    const onchange=(event)=>{
        const value=event.target.value;
        setState(value);
        setShow(false);
    }
    const buttonclick=(event)=>{
      console.log("abc");
      setShow(true);
    }
    return(
        <>
        <div> <span>name</span> <input type="text" onChange={onchange} value={state}/><button disabled={!state}onClick={buttonclick}>Add</button></div>
        <div> 
            { show && <Child1 field={state}/>}
            <Child2 buttonclick1={buttonclick}/>
        </div>
        </>

    );
}