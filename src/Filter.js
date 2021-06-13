import { useEffect, useState } from "react";


export function Filter()
{
     const [state,setState]=useState([]);
     const [filterData,setFilterData]=useState([]);
     //const [idstate,setIdstate]=useState(0);
     const [titlestate,setTitlestate]=useState("");
    // const getUserId=(event)=>{
    //     let numvalue=event.target.value;
    //     setIdstate(numvalue);
    // }
    const userTitle=(event)=>{
        let titlevalue=event.target.value;
        setTitlestate(titlevalue);
    }
    useEffect(()=>{
     const promise=fetch('http://jsonplaceholder.typicode.com/posts',
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
            setFilterData(json);
        }).catch((error)=>{
            console.log(error.message)
        })
    },[]);
    const filterClick=()=>{
        const filterresult = state.filter(item => item.title.includes(titlestate));
        setFilterData(filterresult);
        console.log(filterresult)
    }
    
    
    return(
        <>
        {/* <div><span>Filter on UserId </span><input onChange={getUserId} value={idstate}/>
        <button onClick={filterClick}>click here</button></div> */}
        <div><span>Filter by title  </span><input onChange={userTitle} value={titlestate}/>
        <button onClick={filterClick}>click here</button></div>
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
                    </tr>
                </thead>
                <tbody>
                    {
                        filterData.map((item=>{
                            return(
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
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