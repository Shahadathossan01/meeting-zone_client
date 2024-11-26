import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='text-center pt-10'>
            <h1 className='text-3xl font-bold'>Congratulations for the best meetup!</h1>
            <h1 className='pt-4 text-lg'>You Have Successfully Booked Your Meeting Zone. Show <Link className='text-blue-500' to="/bookingList">Booking list <span aria-hidden="true">&rarr;</span></Link></h1>
        </div>
    );
};

export default Success;