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
            <div className="px-2">
            <h1 className="text-center font-bold pt-10 text-xl tracking-wide">{item?.name}</h1>
            <h3 className="text-center">{item?.location}</h3>
            <h2 className="pt-4">{item?.details}</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3  pt-4 gap-2">
                <div className="p-2 flex justify-center">
                    <iframe src={mapUrl} loading="lazy" className="border-4 flex w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-span-2 p-2 flex flex-wrap gap-2 justify-center">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/bookingForm" state={{location:item.location}}><button className="bg-green-800 px-2 rounded hover:bg-green-500 mt-1 font-bold text-white p-2">Book Now</button></Link>
            </div>
        </>
    );
};

export default MeetingZoneDetails;