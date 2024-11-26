import { compareAsc, isAfter, isBefore, isSameDay, parseISO } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { usePDF } from "react-to-pdf";

const BookingListItem = ({item}) => {
    const {toPDF,targetRef}=usePDF({filename:'page.pdf'})
    const {deleteBookingList}=useStoreActions(action=>action.bookingList)
    const {username,shift,members,meetupType,itemLocation,duration,date,status}=item
    const dataDate=parseISO(date)
    const localDate=new Date()
    const today=isSameDay(dataDate,localDate)
    const nextDay=!today && isAfter(dataDate,localDate)
    const prevDay=!today && isBefore(dataDate,localDate)
    return (
        <div className="flex justify-center">
            <div className="flex gap-20 mt-4  p-4 w-1/2 border bg-red-50">
                <div ref={targetRef} className="w-64 py-4 px-2">
                    <h1><span className="text-lg font-bold">Username:</span> {username}</h1>
                    <h1><span className="text-lg font-bold">Location:</span> {itemLocation}</h1>
                    <h1><span className="text-lg font-bold">Meetup Type:</span> {meetupType}</h1>
                    <h1><span className="text-lg font-bold">Shift:</span> {shift}</h1>
                    <h1><span className="text-lg font-bold">Members:</span> {members}</h1>
                    <h1><span className="text-lg font-bold">Duration:</span> {duration}</h1>
                    <h1><span className="text-lg font-bold">Date:</span> {date}</h1>
                    <h1>
                        <span className="text-lg font-bold">Status: </span>
                        {status=='payed'?
                        <span className="bg-green-500 px-2 pt-0 pb-1 rounded mt-1 font-bold text-white">{status}</span>
                        :
                        <span className="bg-gray-300 px-2 pt-0 pb-1 rounded mt-1 font-bold text-white">{status}</span>}
                    </h1>
                </div>
                <div className="p-4">
                    <div>
                        {
                            <button className="bg-red-800 px-2 rounded hover:bg-red-500 mt-1 font-bold text-white p-2" onClick={()=>deleteBookingList(item._id)}>X</button>
                        }
                    </div>
                    <div className="mt-4">
                    {
                        today&& <button className="bg-green-800 px-2 rounded mt-1 font-bold text-white p-2">Running</button>
                    }
                    {
                        nextDay && <button className="bg-blue-500 px-2 rounded mt-1 font-bold text-white p-2">Upcomming</button>
                    }
                    {
                        prevDay && <button className="bg-gray-800 px-2 rounded mt-1 font-bold text-white p-2">End Event</button>
                    }
                    </div>
                    <div className="mt-4">
                        <button className="bg-gray-500 px-2 rounded mt-1 font-bold text-white p-2 t-4" onClick={()=>toPDF()}>Print</button>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default BookingListItem;