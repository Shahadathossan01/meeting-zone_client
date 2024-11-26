import { useStoreActions } from "easy-peasy";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || "/";
    const {register,handleSubmit}=useForm()
    const {loginUser}=useStoreActions(action=>action.user)
    const onSubmit=(data)=>{
        loginUser({data,navigate,from})
    }
    return (
        <>
            <div className="bg-orange-100 border-4">
                <h1 className="flex justify-center text-center pt-6 font-serif hover:font-mono text-2xl">Login Now</h1>
                <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-4">
                    <label className="text-lg font-bold" htmlFor="email">Email</label><br />
                    <input  {...register("email")} className="border-2 px-2" placeholder="Enter you email" type="email" name="email" id="email" />
                </div>
                <div className="pt-4">
                    <label className="text-lg font-bold" htmlFor="password">Password</label><br />
                    <input {...register("password")} className="border-2 px-2" placeholder="Enter you password" type="password" name="password" id="password" />
                </div>
                <div className="flex justify-center">
                    <button className="bg-green-800 px-2 rounded hover:bg-green-500 mt-4  font-bold text-white py-1">Login</button>
                </div>
                </form>
                </div>
                <div className="flex justify-center mb-4">
                    <h1>Not have an account? please <span className="text-lg text-blue-700"><Link to="/register">Register</Link></span></h1>
                </div>
            </div>
        </>
    );
};

export default Login;