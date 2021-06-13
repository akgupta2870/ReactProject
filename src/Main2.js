function Main2({main2Click ,paragraph,fields,fieldChange})
{


    return(
        <div style={{backgroundColor:'lightblue',width:"50%"}}>
        <p>{paragraph}</p>
        <div>
         <label style={{paddingRight:'100px'}}>Name </label><input type="text" name="name" value={fields.name} onChange={(event)=>fieldChange(event)}/></div>
         <div>
             <label>email</label><input type="text" name="email" value={fields.name} onChange={(event)=>fieldChange()} />
         </div>
         <div><label>Dropdown City</label><select  onChange={(event)=>fieldChange(event)} value={fields.city} >
             <option value="delhi">delhi</option>
             <option value="noida">noida</option>
             <option value="goa">goa</option>
             <option value="jaipur">jaipur</option>
             </select>
             </div>
             
         <button onClick={main2Click} >Submit</button>
        </div>
    );
}

export default Main2;