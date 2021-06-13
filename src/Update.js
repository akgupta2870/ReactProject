import { useEffect, useState } from "react";

export function Update()
{
    const [update,setUpdate]=useState([]);
    //const [state,setState]=useState([]);
    const [titlestate,setTitlestate]=useState("");
    const [bodystate,setBodystate]=useState("");
    const [id,setId]=useState(0);
    const [userid,setUserid]=useState(0);
    const [fields,setFields]=useState({});
    
    
    useEffect(()=>{
        console.log("useeffect run")
        const promise=fetch(`http://jsonplaceholder.typicode.com/posts/`,
        {
            method:"GET",
            headers:
            {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const responsevar=(response)=>{
            console.log(response.status +"response status")
            if(response.status==200||response.status==201)
            {
                console.log("data load sucessfully");
                return response.json();
            }
            else{
                throw new Error("problem occur while oading data from server ")
            }
        }
        promise.then(responsevar)
        .then(json=>{
            //setState(json);
            setUpdate(json);
        }).catch((error)=>{
            console.log(error.message)
        })
    },[]);
    
    
    const onChange=(event)=>{
        const {value,name}=event.target;
       
        setFields((oldField)=>{
            const newField={...oldField,[name]:value};
            return newField;
        });
    }
    const titleChange=(event)=>{
        const title=event.target.value;
        console.log(title);
        setTitlestate(title);
    }
    const bodychange=(event)=>{
        const body=event.target.value;
        console.log(body);
        setBodystate(body);
    }
    function fillinput(item)
    {
        setTitlestate(item.title);
        setBodystate(item.body);
        setId(item.id);
        setUserid(item.userid);
        
    }
    function updateClick()
    {
        const promise=fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id: id,
              title: titlestate,
              body: bodystate,
              userId: userid,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          const responsestatus=(response)=>{
              if(response.status==200||response.status==201)
              {
                 alert("Data Updated Sucessfully .") ;
                //console.log(response.json);
                return response.json();
                  
              }
              else{
                  throw new Error(" Error occur while updating ")
              }
          }
          promise.then(responsestatus)
            .then( json => {
                const uodatedData=update.map((item=>{
                    if(item.id===json.id)
                        return json;
                    else
                        return item;
                }))
                console.log(json);
                setUpdate(uodatedData);
            })
            .catch((error) =>
            {
                 console.log(error.message);
            });
            
        }

    const renderData=()=>{
        const data=update.map((item=>
            {
                return(
                    <tr>
                        <td>{item.userId}</td>
                        <td><input type="radio" onClick={()=>fillinput(item)} /></td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td><button onClick={updateClick}  >Update</button></td>
                    </tr>
                )
            }));
        return data;
    }
    console.log(fields);
    return(
        <>
        <div>Title<input type="text" name="title" onChange={onChange} value={fields.title || ""} />Body<input type="text" name="body" onChange={onChange} value={fields.body || ""}/></div>
        <div><table>
            <thead>
                <tr>
                    <th>
                        USERID
                    </th>
                    <th>
                        ID
                    </th>
                    <th>
                        Button
                    </th>
                    <th>
                        TITLE
                    </th>
                    <th>
                        BODY
                    </th>
                    <th>
                        Update
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                    renderData()  
            }
            </tbody>
            </table>
            </div>
            </>
    );
}