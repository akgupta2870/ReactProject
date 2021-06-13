import {useState,useEffect} from "react";
export function Delete()
{
    const [state,setState]=useState([]);
    const [update,setUpdate]=useState([]);
   // const [tddelete,setTddelete]=useState("");
    const [deleteid,setDeleteid]=useState(0);
    // const usedelete=(event)=>{
    //     let idDelete=event.target.value;
    //     setDeleteid(idDelete);
    // }
    useEffect(()=>{
        const promise=fetch('http://jsonplaceholder.typicode.com/posts/',
           {
               method:'GET',
               headers:{
                   'content-type':'application/json;char-set=UTF-8'
               }
           });
           const responsevar=(response)=>{
               if(response.status==200||response.status==201)
               {
                   return response.json();
               }
               else{
       
                   throw new Error("problem in api hit ");
               }
           }
           promise.then(responsevar)
           .then(json=>{
               setState(json);
               setUpdate(json);
           }).catch((error)=>{
               console.log(error.message)
           })
       },[]);
       const deleteClick=(event)=>{
           console.log("button clcked");
           let deleteidvar =event.target.id;
           console.log(deleteidvar+" = id delete");
           setDeleteid(deleteidvar);
           const promise1=fetch(`http://jsonplaceholder.typicode.com/posts/${deleteid}`,{
               method:"DELETE",
               headers:{
                'content-type':'application/json;char-set=UTF-8'
            }})
            const responsevar=(response)=>{
                if(response.status==200||response.status==201)
                {
                    alert("your item is deleted sucessfully")
                    return response.json();
                    
                }
                else{
        
                    alert("problem in api hit on deltete button click");
                    throw new Error("problem in api hit on deltete button click ");
                    
                }
            }
            promise1.then(responsevar)
            .then(json=>{
                const Deleteresult=state.filter(item=>item.userId!=deleteid);
                console.log("data updateed after delete" + Deleteresult)
                setUpdate(Deleteresult);
                //setState(json);
                //setUpdate(json);
                //setTddelete(json);
            }).catch((error)=>{
                console.log(error.message)
            })
         

       }
    return (
        <>
        {/* <div><span>delete  by id </span><input onChange={usedelete} value={deleteid}/>
        <button onClick={deleteClick}>click here</button></div> */}
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            UserId
                        </th>
                        <th>
                            Id
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Body
                        </th>
                        <th>
                            delete 
                        </th>
                        <th>
                            update
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       update.map((item=>{
                            return(
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td><button onClick={deleteClick} id={item.userId} >Delete</button></td>
                                    <td><button onClick={deleteClick} >Update</button></td>
                                </tr>
                            )
                        }))
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}