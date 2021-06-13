import React,{useState} from 'react';
export const Register=()=>
{
    let [state,setState]=useState("abc");
    const click=()=>{
        console.log("clicked");
        setState("clicked button");
    }
    return( 
        <>
        <button onClick={click}>Click</button>
        <p>{state}</p>
        </>
    );
}
