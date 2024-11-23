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
    const mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.48223552284!2d90.40724427402851!3d23.80144508681721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70655ff5147%3A0x94b8208cfac8c902!2sGulshan%20Society%20Lake%20Park!5e0!3m2!1sen!2sbd!4v1732396334877!5m2!1sen!2sbd"

    const img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpnzGteNaPWl5jk5OFfpEr3YveToyipdCvw&s"
    return (
        <>
            <h1>{item?.name}</h1>
            <h3>{item?.location}</h3>
            <h2>{item?.details}</h2>
            <div className="grid grid-cols-3">
                <div>
                    <iframe src={mapUrl} width="600" height="450"  allowfullscreen="" loading="lazy" className="border-4 w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="border col-span-2">
                    <h1>footage</h1>
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    
                </div>
            </div>
            <div>
                <Link to="/bookingForm" state={{location:item.location}}><button>Book Now</button></Link>
            </div>
        </>
    );
};

export default MeetingZoneDetails;