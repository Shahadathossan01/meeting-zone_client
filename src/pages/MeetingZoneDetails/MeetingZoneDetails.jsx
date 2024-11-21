import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const MeetingZoneDetails = () => {
    const {id}=useParams()
    const {getMeetingZoneById}=useStoreActions(action=>action.meetingZone)
    const {item}=useStoreState(state=>state.meetingZone)
    console.log(item)
    useEffect(()=>{
        getMeetingZoneById(id)
    },[getMeetingZoneById,id])
    return (
        <>
            <h1>{item?.name}</h1>
            <h3>{item?.location}</h3>
            <h2>{item?.details}</h2>
            <div className="grid grid-cols-3">
                <div className=" border border-sky-500">
                    <h1>map</h1>
                </div>
                <div className="border col-span-2">
                    <h1>footage</h1>
                </div>
            </div>
            <div>
                <Link to="/bookingForm" state={{location:item.location}}><button>Book Now</button></Link>
            </div>
        </>
    );
};

export default MeetingZoneDetails;