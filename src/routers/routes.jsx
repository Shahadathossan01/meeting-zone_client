
import Main from "../layouts/Main";
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
                path:'/meetingZones',
                element:<MeetingZones></MeetingZones>
            }
        ]
    }
    
]

export default routes;