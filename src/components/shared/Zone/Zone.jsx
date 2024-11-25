import { Link } from "react-router-dom";

const Zone = ({item}) => {
    return (
        <div className="">
            <div className="border-2 border-white p-3 bg-red-950 text-white shadow-2xl w-72">
                <h1><span className="text-xl">Area:</span> <span>{item.name}</span></h1>
                <h2><span className="text-xl">Location:</span> <span>{item.location}</span></h2>
                <Link to={`/meetingZoneDetails/${item._id}`}><button className="bg-green-800 px-2 rounded hover:bg-green-500 mt-1 font-bold">Details <span aria-hidden="true">&rarr;</span></button></Link>
            </div>
        </div>
    );
};

export default Zone;