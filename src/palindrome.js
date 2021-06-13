import {useState} from "react";
export function Palindrome()
{
    let [num,setNum]=useState("");
    let [show,setShow]=useState("");
    let [result,setResult]=useState(0);
    const changeMethod=(event)=>{
        console.log("chnage method");
        const value=event.target.value;
        setNum(value);
    }
    const buttonclick=(event)=>{
        console.log("button click");
        let number =num;
        let result=0;
        while(number)
        {
            console.log("while loop");
            result=(result*10)+(number%10);
            number=Math.floor(number/10);
        }
        console.log(result);
        if(result==num)
        {
            console.log("if condition");
            setShow("Its palindrome");
        }
        else{
            console.log("else ");
            setShow("Its not palindrome");
        }
        console.log("no any if cond");
    }

    return(
        <>
        <div><span>Insert Ur Number to Check Palindrome = </span>
        <input type="text" onChange={changeMethod} value={num} />
        <button onClick={buttonclick}>checkpalindrome</button></div> 
        <div>{show}</div>
        </>
        );
}