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
            <h1 className="flex justify-center">Register Now</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Username</label><br />
                    <input {...register("username")} className="border-2" placeholder="enter you username" type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input required {...register("email")} className="border-2" placeholder="enter you email" type="email" name="email" id="email" />
                </div>
                {
                    isRegisterd==false && <span>User already exists</span>
                }
                
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input {...register("password")} className="border-2" placeholder="enter you password" type="password" name="password" id="password" />
                </div>
                <button>Register</button>
            </form>
            <div>
                <h1>Already have an account. <span>please <Link to="/login">Login</Link></span></h1>
            </div>
        </>
    );
};

export default Register;