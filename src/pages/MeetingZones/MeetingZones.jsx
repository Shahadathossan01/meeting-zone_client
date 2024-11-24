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
            <h3 className="flex justify-center pt-6 font-serif hover:font-mono text-2xl">The capital city of Dhaka</h3>
            <h1 className="pt-4 underline underline-offset-8 pb-6 text-lg font-sans">Chose your meeting zone</h1>
            <div className="flex gap-4 flex-wrap border">
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