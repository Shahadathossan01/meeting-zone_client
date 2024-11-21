import {useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import Zone from "../../components/shared/Zone/Zone";

const MeetingZones = () => {
    const {getMeetingZones}=useStoreActions(action=>action.meetingZone)
    const {items}=useStoreState(state=>state.meetingZone)
    useEffect(()=>{
        getMeetingZones()
    },[getMeetingZones])
    return (
        <>
            <h3 className="flex justify-center">The capital city of Dhaka</h3>
            <h1>Chose your meeting point..</h1>
            <div className="flex gap-4">
                {
                    items.map((item=>(
                        <Zone key={item._id} item={item}></Zone>
                    )))
                }
            </div>
        </>
    );
};

export default MeetingZones;