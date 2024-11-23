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
             <h1 className="flex justify-center">Login Now</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input {...register("email")} className="border-2" placeholder="enter you email" type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input {...register("password")} className="border-2" placeholder="enter you password" type="password" name="password" id="password" />
                </div>
                <button>Login</button>
            </form>
            <div>
                <h1>Not have an account?<span>please <Link to="/register">Register</Link></span></h1>
            </div>
        </>
    );
};

export default Login;