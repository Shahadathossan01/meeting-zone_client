
import Main from "../layouts/Main";
import BookingList from "../pages/BookingList/BookingList";
import Login from "../pages/Login/Login";
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
            }
        ]
    }
    
]

export default routes;