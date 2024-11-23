import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import BookingListItem from "../../components/shared/BookingListItem/BookingListItem";

const BookingList = () => {
    const {user}=useStoreState(state=>state.user)
    const {getBookingList}=useStoreActions(action=>action.bookingList)
    const {items,deleteItem}=useStoreState(state=>state.bookingList)
    const userId=user.id
    console.log(items)
    useEffect(()=>{
        getBookingList(userId)
    },[getBookingList,userId,deleteItem])

    return (
        <>
            {
    
                items.map((item)=>(
                    <BookingListItem key={item._id} item={item}></BookingListItem>
                ))
            }
        </>
    );
};

export default BookingList;