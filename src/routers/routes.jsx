
import Main from "../layouts/Main";
import BookingForm from "../pages/BookingForm/BookingForm";
import BookingList from "../pages/BookingList/BookingList";
import Login from "../pages/Login/Login";
import MeetingZoneDetails from "../pages/MeetingZoneDetails/MeetingZoneDetails";
import MeetingZones from "../pages/MeetingZones/MeetingZones";
import Register from "../pages/Register/Register";

const routes=[
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/',
                element:<MeetingZones></MeetingZones>
            },
            {
                path:'/bookingList',
                element:<BookingList></BookingList>
            },
            {
                path:'/meetingZoneDetails/:id',
                element:<MeetingZoneDetails></MeetingZoneDetails>
            },
            {
                path:'/BookingForm',
                element:<BookingForm></BookingForm>
            }
        ]
    }
    
]

export default routes;