import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return ( 
        <div className="container mx-auto">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="my-20">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;