import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { usePDF } from "react-to-pdf";

const BookingListItem = ({item}) => {
    const {toPDF,targetRef}=usePDF({filename:'page.pdf'})
    const {deleteBookingList}=useStoreActions(action=>action.bookingList)
    const {username,shift,members,meetupType,itemLocation,duration,date,status}=item
    return (
        <>
            <div className="flex justify-between">
                <h1>Upcomming</h1>
                <button onClick={()=>toPDF()}>Print</button>
                <button onClick={()=>deleteBookingList(item._id)}>X</button>
            </div>
            <div ref={targetRef} className="flex justify-between py-10 px-10">
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
                </div>
            </div>
        </>
    );
};

export default BookingListItem;