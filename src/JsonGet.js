import { useState } from "react";
export function JsonGet()
{
    const [id,setId]=useState(0);
    const [state,setState]=useState({});
    //const[num,setNum]=useState("");
    const changeMethod=(event)=>{
        console.log("value get in input box");
        const num=event.target.value;
        setId(num);

    }
    const apiHitMethod=()=>{
        console.log("button hit ")
        const promise=fetch(`http://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method :'GET',
            header :{
                'content-type':'application/json; charset=UTF-8',
            },
        });
        const callback=(response)=>{
            console.log(response.status+"response status");
            if(response.status==200||response.status==201)
            {
                 return response.json();
            }
            else{
                throw new Error("error in api");
            }
        }
        promise.then(callback)
        .then(json =>{
            console.log("json print"+json);
            setState(json);
            //tranferdata(json);
         } )
         .catch((e)=>{
                 console.log(e.message);
          })
        }
         console.log(state +"state value");
    return(
        <>
        <div><span>click here to hit this API =</span>
        <input type="text" onChange={changeMethod} value={id}/>
        <button onClick={apiHitMethod}>ClickToHit</button></div>
        <div><table style={{width:"100%"}}>
        <thead>
        <tr>
        <th>UserID</th>
        <th>ID</th> 
        <th>Title</th>
        <th>Body</th>
        </tr>
        
        </thead>
        
                <tbody>
                { 
                
                    <tr>
                    <td>{state.userId}</td>
                    <td>{state.id}</td>
                    <td>{state.title}</td>
                    <td>{state.body}</td>
                    </tr>
                }
                </tbody>
        
        </table>
        </div>
        </>
    );
}