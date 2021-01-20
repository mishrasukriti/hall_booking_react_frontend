
import React from "react"

const Rooms = ({ rooms })=>{
    const renderTableRows = rooms.map( (room, index) =>{
        return(
            <tr  key={room._id}>
                <th scope="row">{ index + 1 }</th>
                <td>{ room.hallName }</td>
                <td>{ room.noOfRooms }</td>
                <td>{ room.price }</td>
                <td>{ room.city }</td>
            </tr>
        )
    })
    return(
        <div className="container">
            <div className="row" style={{marginTop:"50px"}}>
                {/* <div className="col-sm-12 col-md-2"></div> */}
                <div className="col">
                    <table className="table">
                        <thead className="thead-primary">
                        <tr class="bg-info">
                            <th class="bg-info" scope="col">#</th>
                            <th class="bg-info" scope="col">Hall Name</th>
                            <th class="bg-info" scope="col">Number of Rooms Avaiable</th>
                            <th class="bg-info" scope="col">Price per hour</th>
                            <th class="bg-info" scope="col">City</th>
                        </tr>
                        </thead>
                        <tbody>
                            {renderTableRows}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    )
}

export default Rooms