
import { useStoreActions, useStoreState } from "easy-peasy";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
    const {initiatePayment}=useStoreActions(action=>action.ssl)
    const location=useLocation()
    const {user}=useStoreState(state=>state.user)
    const userId=user.id
    const {location:itemLocation}=location.state
    const {register,handleSubmit,watch}=useForm()
    const duration=watch('duration')
    const onSubmit=(data)=>{
      initiatePayment({data,itemLocation,userId})
    }

    return (
        <div>
            <h1 className="text-center pt-6 font-serif hover:font-mono text-2xl">Wishing for the best meetup!</h1>
            <div className="flex justify-center mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="text-2xl text-bold" htmlFor="username">Username:</label><br />
                    <input required {...register("username")} placeholder="enter you username" className="border-2 px-2" type="text" name="username" id="username" />
                </div>
                <div className="mb-4">
                    <label className="text-2xl text-bold" htmlFor="location">Location</label><br />
                    <input disabled className="border-2 px-2" placeholder={itemLocation} type="text" name="location" id="" />
                </div>
                <div className="mb-4">
                    <label className="text-2xl text-bold" htmlFor="meetupType">Meetup Type</label><br />
                    <select required {...register("meetupType")} className="border-2 px-2" name="meetupType" id="meetupType">
                        <option value="Education">Education</option>
                        <option value="Business">Business</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Interview">Interview</option>
                        <option value="Get Together">Get Together</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="text-2xl text-bold" htmlFor="date">Date</label><br />
                    <input required {...register("date")} className="border-2 px-2" type="date" name="date" id="date" />
                </div>
                <div className="mb-4">
                    <label className="text-2xl text-bold" htmlFor="shift">Shift</label><br />
                    <select required {...register("shift")} className="border-2 px-2" name="shift" id="shift">
                        <option value="Day">Day</option>
                        <option value="Night">Night</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="text-2xl text-bold" htmlFor="members">Members</label><br />
                    <input required {...register("members")} className="border-2 px-2" type="number" name="members" id="members" />
                </div>
                <div>
                    <label className="text-2xl text-bold" htmlFor="duration">Duration <span>(hour)</span></label><br />
                    <input required {...register("duration")} className="border-2 px-2" type="number" name="duration" id="duration" />
                </div>
                <div>
                    <label htmlFor="cost">Cost: 1000 taka <span>(per hour)</span></label>
                </div>
                <hr />
                <h1 className="text-2xl text-bold mt-2">Total Cost:{1000*(duration>=0?duration:0)}</h1>
                <div className="flex justify-center">
                    <button className="bg-green-800 px-2 rounded hover:bg-green-500 mt-1 font-bold text-white p-2" type="submit">Confirm</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default BookingForm;