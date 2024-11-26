import { useStoreActions, useStoreState } from "easy-peasy";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const {register,handleSubmit}=useForm()
    const {registerUser}=useStoreActions(action=>action.user)
    const {registerData,isRegisterd}=useStoreState(state=>state.user)
    const navigate=useNavigate()
    const onSubmit=async(data)=>{
        await registerUser({data,navigate})
    }
    console.log(registerData)
    return (
        <>
           <div className="bg-orange-100 border-4">
            <h1 className="flex justify-center text-center pt-6 font-serif hover:font-mono text-2xl">Register Now</h1>
            <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-4">
                    <label className="text-lg font-bold" htmlFor="username">Username:</label><br />
                    <input required {...register("username")} className="border-2 px-2" placeholder="Enter you username" type="text" name="username" id="username" />
                </div>
                <div className="pt-4">
                    <label className="text-lg font-bold" htmlFor="email">Email</label><br />
                    <input required {...register("email")} className="border-2 px-2" placeholder="Enter you email" type="email" name="email" id="email" />
                </div>
                {
                    isRegisterd==false && <span className="text-orange-600">User already exists</span>
                }
                
                <div className="pt-4">
                    <label className="text-lg font-bold" htmlFor="password">Password</label><br />
                    <input required {...register("password")} className="border-2 px-2" placeholder="Enter you password" type="password" name="password" id="password" />
                </div>
                <div className="flex justify-center">
                <button className="bg-green-800 px-2 rounded hover:bg-green-500 mt-4  font-bold text-white py-1">Register</button>
                </div>
            </form>
            </div>
            <div className="flex justify-center mb-4">
                <h1>Already have an account. please <span className="text-lg text-blue-700"><Link  to="/login">Login</Link></span></h1>
            </div>
           </div>
        </>
    );
};

export default Register;