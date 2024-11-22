import axios from "axios";
import { action, createStore, thunk } from "easy-peasy";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const userModel={
    registerData:null,
    isRegisterd:null,
    user:JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):null,
    setUser:action((state,payload)=>{
        state.user=payload;
    }),
    addRegisterData:action((state,payload)=>{
        state.registerData=payload
    }),
    addIsRegisterd:action((state,payload)=>{
        state.isRegisterd=payload
    }),
    registerUser:thunk(async(actions,payload)=>{
        const {username,email,password}=payload.data
        const {navigate}=payload
        try{
            const {data}=await axios.post('http://localhost:3000/register',{
                username,
                email,
                password
            })
            actions.addRegisterData(data.message)
            actions.addIsRegisterd(true)
            toast.success('Registration successful! Redirecting to login...', {
                position: 'top-right',
            });

            setTimeout(()=>navigate('/login'),2000)

        }catch(e){
            actions.addRegisterData(e?.response?.data?.message)
            actions.addIsRegisterd(false)
        }
    }),
    loginUser:thunk(async(actions,payload)=>{
        const {email,password}=payload
        const {data}=await axios.post('http://localhost:3000/login',{
            email,
            password
        })
        localStorage.setItem("token",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        actions.setUser(data.user)
    }),
    logoutUser:action(state=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        state.user=null
    })
}
const meetingZoneModel={
    items:[],
    item:[],
    addItems:action((state,payload)=>{
        state.items=payload
    }),
    addItem:action((state,payload)=>{
        state.item=payload
    }),
    getMeetingZones:thunk(async(actions)=>{
        const {data}=await axios.get('http://localhost:3000/meetingPoint')
        actions.addItems(data)
    }),
    getMeetingZoneById:thunk(async(actions,payload)=>{
        const {data}=await axios.get(`http://localhost:3000/meetingPointById/${payload}`)
        actions.addItem(data)
    }),
    bookingConfirm:thunk(async(actions,payload)=>{
        console.log(payload)
    })
}
const sslCommerzModel={
    initiatePayment:thunk(async(actions,payload)=>{
        const {username,meetupType,date,shift,members,duration}=payload.data
        const {itemLocation}=payload
        const {data}=await axios.post('http://localhost:3000/initiate-payment',{
            username,
            meetupType,
            date,
            shift,
            members,
            duration,
            itemLocation
        })
        console.log(data)
        window.location.href=data
    })
}
const store=createStore({
    user:userModel,
    meetingZone:meetingZoneModel,
    ssl:sslCommerzModel
})

export default store;