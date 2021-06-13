import Main1 from './Main1';
import React,{useState} from 'react';
import Main2 from './Main2';
import Main3 from './Main3';
function Main({para2})
{
    const [state,setState]=useState({});
    const clickHandler=()=>{
        console.log(state);
    }
    const changleHandler=(event)=>{
        //console.log('change');
        const name=event.target.name;
        const value=event.target.value;
        //const gender=event.target.value;
        //const mobile=event.target.value;
        //const email=event.target.value;
        //const city=event.target.value;,[gender]:value,[mobile]:value,[email]:value,[city]:valuen
        setState({...state,[name]:value},);
    }
    return(
        <div style={{height:"500px",display:'flex'}}>
        <Main1/>
        <Main2 main2Click={clickHandler} fields={state} fieldChange={changleHandler} paragraph={para2}/>
        <Main3/>
        </div>
       
    );
}

export default Main;