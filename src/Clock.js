import { useState,useRef } from "react";

export function Clock()
{
    let intervalvalue;
    const[sec,setSec]=useState(0);
    const[min,setMin]=useState(0);
    const ref= useRef();
    const startwatch=()=>{
    
         intervalvalue=setInterval(()=>{
            
            setSec((prevSec)=>prevSec+1);
            if(sec>59)
            {
               setSec(0);
               setMin((prevMin)=>prevMin+1);
            }
        },1000);
        ref.current=intervalvalue;
    }
    const stoptime=()=>{
        console.log("stop clicked");
        clearInterval(ref.current);

    }

    return (
        <>
        <div><span>click here to start stop watch</span>
        <button onClick={stoptime}>stop time</button>
        <button onClick={startwatch}>start time</button></div>
        <div><span>timer</span><span>{min}</span>:<span>{sec}?</span></div>
        </>
    );
}