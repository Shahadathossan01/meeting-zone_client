import axios from "axios";
import { action, createStore, thunk } from "easy-peasy";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const userModel={
    registerData:null,
    isRegisterd:null,
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
    })
}


const store=createStore({
    user:userModel
})

export default store;