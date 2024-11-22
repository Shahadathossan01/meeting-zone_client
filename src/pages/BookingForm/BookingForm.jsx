
import { useStoreActions } from "easy-peasy";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
    const {initiatePayment}=useStoreActions(action=>action.ssl)
    const location=useLocation()
    const {location:itemLocation}=location.state
    const {register,handleSubmit,watch}=useForm()
    const duration=watch('duration')
    const onSubmit=(data)=>{
      initiatePayment({data,itemLocation})
    }

    return (
        <div>
            <h1>Wishing for the best meetup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Username</label><br />
                    <input {...register("username")} placeholder="enter you username" className="border" type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="location">Location</label><br />
                    <input disabled className="border" placeholder={itemLocation} type="text" name="location" id="" />
                </div>
                <div>
                    <label htmlFor="meetupType">Meetup Type</label><br />
                    <select {...register("meetupType")} className="border" name="meetupType" id="meetupType">
                        <option value="Education">Education</option>
                        <option value="Business">Business</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Interview">Interview</option>
                        <option value="Get Together">Get Together</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date</label><br />
                    <input {...register("date")} className="border" type="date" name="date" id="date" />
                </div>
                <div>
                    <label htmlFor="shift">Shift</label><br />
                    <select {...register("shift")} className="border" name="shift" id="shift">
                        <option value="Day">Day</option>
                        <option value="Night">Night</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="members">Members</label><br />
                    <input {...register("members")} className="border" type="number" name="members" id="members" />
                </div>
                <div>
                    <label htmlFor="duration">Duration <span>(hour)</span></label><br />
                    <input {...register("duration")} className="border" type="number" name="duration" id="duration" />
                </div>
                <div>
                    <label htmlFor="cost">Cost: 1000 taka <span>(per hour)</span></label>
                </div>
                <hr />
                <h1>Total Cost:{1000*(duration>=0?duration:0)}</h1>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
};

export default BookingForm;