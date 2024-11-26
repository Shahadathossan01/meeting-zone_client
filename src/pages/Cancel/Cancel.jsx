import { Link } from "react-router-dom";


const Cancel = () => {
    return (
        <div className='text-center pt-10'>
            <h1 className='text-3xl font-bold'>Canceled your booking process.</h1>
            <h1 className='pt-4 text-lg'>Please Try Again.. Go <Link className='text-blue-500' to="/">Home <span aria-hidden="true">&rarr;</span></Link></h1>
        </div>
    );
};

export default Cancel;