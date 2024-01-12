import React,{useState} from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const url = "https://playstationapi-bfns.onrender.com/placeOrder";

const PlaceOrder = () => {
    let params = useParams();
    let navigate = useNavigate();

    // let sessionData = sessionStorage.getItem('userInfo');
    // let data = JSON.parse(sessionData)

    const initialValues = {
        id:Math.floor( Math.random()*100000),
        rest_name: params.restName,
        name: "Neha",
        email: "nehak@gmail.com",
        cost: Math.floor(Math.random()*10000),
        phone: "987654321",
        address: "Hno 20 sec 34 Paithan road, Aurangabad",
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const checkout = () => {
        console.log(values)
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`/viewOrder`))
       
    }
    

    return(
        <>
        <div className="container"  style={{backgroundColor:"#00439c"}}>
                

                
                <div className="panel panel-primary" style={{backgroundColor:"#ebebf2",padding:"10px 20px 30px 20px",marginBottom:"22px"}} >
                    <div className="panel-heading"  style={{backgroundColor:"#00439c",textAlign:"center", paddingTop:"10px",color:"white"}}>
                        <h3>Order For {params.restName}</h3>
                        <hr/>
                    </div>
                    <div className="panel-body">
                        {/* <input type="hidden" name="cost" value={values.cost}/>
                        <input type="hidden" name="id" value={values.id}/>
                        <input type="hidden" name="rest_name" value={values.rest_name}/> */}
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group" style={{marginTop:"20px"}} >
                                <label for="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group" style={{marginTop:"20px"}}>
                                <label for="address" className="control-label">Address</label>
                                <input className="form-control" id="address"
                                name="address" value={values.address} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <div className="row" style={{marginTop:"20px"}}>
                            <div className="col-md-12">
                                <h2  style={{color:"#00439c"}}>Total Price is Rs. {values.cost}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={checkout} style={{marginTop:"20px"}}>
                                Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PlaceOrder;