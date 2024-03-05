import Raact, { useEffect } from "react";
import axios from "axios";
const url="http://localhost:3000/gameIdproduct?playableDeviceId=1";

  

const DeviceFilter =(props)=>{
      const handleFilter=(event)=>{
        let gameId=props.gameId;
        let playableDeviceId=event.target.value;
        let playableDeviceUrl="";
        if(playableDeviceId==""){
            playableDeviceUrl=`${url}/${gameId}`;
        }else{
            playableDeviceUrl=`${url}/${gameId}?playableDevice=${playableDeviceId}`;
        }
        axios.get( playableDeviceUrl)
        .then((res)=>{props.itemperdevice(res.data)})
    }

    return(
        <>
        <div className="DeviceFilter" style={{marginLeft:'15%'}}>
            <h1>Filters</h1>
            <hr style={{marginLeft:'-18%'}}/>
            <h4>Choose Playable Device</h4>
            <div onChange={handleFilter} style={{marginTop:"15px"}} >
                <label className="radio" style={{display:`block`,marginTop:"15px"}}>
                    <input type="radio" name="Device" value="1"/>PS4
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="2"/>PS5
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="3"/>PC Games
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="4"/>PS VR Required
                </label>
                <label className="radio" style={{display:`block`,marginTop:"5px"}}>
                    <input type="radio" name="Device" value="5"/>All
                </label>
            </div>
            <hr style={{marginLeft:'-18%'}}/>
        </div>
        </>
    )
    }


export default DeviceFilter;