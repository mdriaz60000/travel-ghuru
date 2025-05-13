import { Outlet } from "react-router-dom";
import Home from './../Page/Home/Home';
import Navbar from "../Components/Navber/Navber";


const Root = () => {
    return (
        <div>
           <Navbar/>
           <Outlet></Outlet> 
           {/* <Home></Home> */}
        </div>
    );
};

export default Root;