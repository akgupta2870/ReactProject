import { useEffect, useState } from "react";
export function Fetch({tranferdata})
{

    const [state,setState]=useState([]);
    useEffect(()=>{
        console.log("clicked");
    const promise=fetch('https://jsonplaceholder.typicode.com/posts' ,
    {  method: 'GET',
    headers: {
     'Content-type': 'application/json; charset=UTF-8',
     },});

    const callback=(response)=> {
        if(response.status===200 || response.status === 201){
        return response.json();
        }
        else{
             
            throw new Error("Error in Api");
        }
        }
    promise.then(callback)
     .then(json =>{
        setState(json);
        tranferdata(json);
     } )
     .catch((e)=>{
             console.log(e.message);
      })},[])
    // const reportClick=()=>{
        
    return (
        <>
        <div><span>Error show here =></span>{}</div>
        {/*  */}
        {/* <div><span>click here to see report</span><button onClick={reportClick}>click</button></div> */}
        <div>
        <table style={{width:"100%"}}>
        <thead>
        <tr>
        <th>UserID</th>
        <th>ID</th> 
        <th>Title</th>
        <th>Body</th>
        </tr>
            </thead>
            <tbody>
                {  state.map((item)=>{
                        return (
                  <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
                  </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        </>
    );
}