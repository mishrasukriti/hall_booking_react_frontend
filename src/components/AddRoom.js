
import React, {useState} from "react"
import roomBooking from "../apis/roomBooking"



const AddRoom = ({ onPost })=>{
    
    const [success, setSuccess] = useState("d-none")
    const [failure, setFailure] = useState("d-none")
    
    const [city, setCity] = useState("")
    const [hallName, setHallName] = useState("")
    const [noOfRooms, setNoOfRooms] = useState("")
    const [price, setPrice] = useState("")
    
    const onFormSubmit = async (event)=>{
        event.preventDefault()
        const returnObject = {
            noOfRooms: noOfRooms,
            hallName: hallName,
            price: price,
            city : city
        }
        try{
            const response = await roomBooking.post("/add-hall", returnObject)
            if (response.status === 200){
                setHallName("")
                onPost()   
                setNoOfRooms("")  
                setPrice("")
                setCity("")  
                setSuccess("")         
            }
            else{
               setFailure("") 
            }
        }
        catch(err){
            setFailure("")    
        }
    }
    return(
        <div className="container">
            <div className="row" style={{marginTop:"50px"}}>
                <div className="col">
                    <div className="text-center">
                        <h2>Add Hall</h2>
                    </div>
                    <form onSubmit={(e)=>onFormSubmit(e)}>
                        <div className="form-group row">
                            <label class="col-sm-2 col-form-label">Hall Name</label>
                            <div class="col-sm-10">
                            <input
                             type="text" 
                             className="form-control" 
                             placeholder="Name" 
                             value={hallName} 
                             onChange={(e)=>setHallName(e.target.value)}
                             required
                             />
                            </div>
                            
                        </div> 
                        <div className="form-group row">
                            <label class="col-sm-2 col-form-label">Number of Rooms</label>
                            <div class="col-sm-10">
                            <input 
                            type="number" 
                            className="form-control" 
                            placeholder="No of Rooms"
                            value={noOfRooms} 
                            onChange={(e)=>setNoOfRooms(e.target.value)}
                            required
                            />
                            </div>
                        </div> 
                        <div className="form-group row">
                            <label class="col-sm-2 col-form-label">Price per Hour in Rupees</label>
                            <div class="col-sm-10">
                            <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Price"
                            value={price} 
                            onChange={(e)=>setPrice(e.target.value)}
                            required
                            />
                            </div>
                            
                        </div> 
                        <div className="form-group row">
                            <label class="col-sm-2 col-form-label">City</label>
                            <div class="col-sm-10">
                            <input 
                            type="text" 
                            className="form-control"
                            placeholder="City" 
                            value={city} 
                            onChange={(e)=>setCity(e.target.value)}
                            required
                            />
                            </div>
                        </div> 
                        <div></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary btn-block">Create New Hall</button>
                        </div>

                    </form>
                    <div className={success}>
                    <div className="alert alert-success alert-dismissible fade show text-center" style={{margin:"15px"}} role="alert">
                        <div>Successfully Creaated new Hall.</div>
                    </div>
                    
                    </div>
                    <div className={failure}>
                    <div className="alert alert-danger alert-dismissible fade show text-center" style={{margin:"15px"}} role="alert">
                        <div>Failure!! Error while creating new Hall.</div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRoom