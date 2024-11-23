import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";

const BookingListItem = ({item}) => {
    const {deleteBookingList}=useStoreActions(action=>action.bookingList)
    const {username,shift,members,meetupType,itemLocation,duration,date,status}=item
    return (
        <>
            <div className="flex justify-between">
                <h1>Upcomming</h1>
                <button onClick={()=>deleteBookingList(item._id)}>X</button>
            </div>
            <div className="flex justify-between">
                <div>
                    <h1>Name: {username}</h1>
                    <h1>Location: {itemLocation}</h1>
                    <h1>Meetup Type: {meetupType}</h1>
                    <h1>Shift: {shift}</h1>
                    <h1>Members: {members}</h1>
                    <h1>Duration: {duration}</h1>
                </div>
                <div>
                    <h1>Date: {date}</h1>
                    <h1>Status: {status}</h1>
                    <button className="mt-16">Print</button>
                </div>
            </div>
        </>
    );
};

export default BookingListItem;