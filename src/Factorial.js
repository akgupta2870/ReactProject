import { useState } from "react";

export function Factorial()
{
    const [num,setNum]=useState(0);
    const [result,setResult]=useState(1);
    const changemethod =(event)=>{
        const value=event.target.value;
        setNum(value);
    }
    const factorial=(event)=>{
        let number =num;
        let  temp=1;
        for(let i=1;i<=num;i++)
        {
            temp *=i;

        }
        setResult(temp);

    }
    return(
        <>
        <div><span>Factorial of the number </span><input onChange={changemethod} value={num}/>
        <button onClick={factorial}>click</button></div>
        <div>{result}</div>
        </>
    );
}