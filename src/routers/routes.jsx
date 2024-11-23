
import Main from "../layouts/Main";
import BookingForm from "../pages/BookingForm/BookingForm";
import BookingList from "../pages/BookingList/BookingList";
import Cancel from "../pages/Cancel/Cancel";
import Fail from "../pages/Fail/Fail";
import Login from "../pages/Login/Login";
import MeetingZoneDetails from "../pages/MeetingZoneDetails/MeetingZoneDetails";
import MeetingZones from "../pages/MeetingZones/MeetingZones";
import Register from "../pages/Register/Register";
import Success from "../pages/Success/Success";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
                element:<PrivateRoute><BookingList></BookingList></PrivateRoute>
            },
            {
                path:'/meetingZoneDetails/:id',
                element:<MeetingZoneDetails></MeetingZoneDetails>
            },
            {
                path:'/BookingForm',
                element:<BookingForm></BookingForm>
            },
            {
                path:'/success',
                element:<Success></Success>
            },
            {
                path:'/cancel',
                element:<Cancel></Cancel>
            },
            {
                path:'/fail',
                element:<Fail></Fail>
            }
        ]
    }
    
]

export default routes;