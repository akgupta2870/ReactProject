import {useState} from 'react';
export function Arrayhomework()
{
    const [state,setState]=useState("");
    const [show,setShow]=useState(false);
    const [result,setResult]=useState("");
    const onchange=(event)=>{
        const value=event.target.value;
        setState(value);
        setShow(false);
    }
    const buttonclick=(event)=>{
        setShow(true);
        if(state%2==0)
        {
            //alert("Its leap year");
            setResult("Its leap year");
        }
        else{
            //alert("Its not leap year");
            setResult("Its not leap year");
        }
    }
    return (
        <>
        <div><span>Check leap Year =</span><input type="text" onChange={onchange} value={state}/><button onClick={buttonclick}>check</button></div>
        <div>{result}</div>
        </>
    );
}