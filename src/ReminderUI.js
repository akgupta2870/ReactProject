export const ReminderUI=({data})=>{

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Birthdate
                        </th>
                        <th>             
                            MobileNumber
                        </th>
                        <th>
                            message
                        </th>
                        <th>
                            Days left
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((item ,index)  =>{
                        return(
                        <tr key={index}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.date}
                        </td>
                        <td>
                            {item.mobile}
                        </td>
                        <td>
                            {item.message}
                        </td>
                        <td>

                        </td>
                    </tr>)
                    })
                }   
                </tbody>
            </table>
        </div>
    )
}