import { Link } from "react-router-dom";

const Zone = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <h2>{item.location}</h2>
            <Link to={`/meetingZoneDetails/${item._id}`}><button>Details</button></Link>
        </div>
    );
};

export default Zone;