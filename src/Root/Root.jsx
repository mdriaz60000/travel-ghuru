import { Outlet } from "react-router-dom";
import Home from './../Page/Home/Home';


const Root = () => {
    return (
        <div>
          
           <Outlet></Outlet> 
           {/* <Home></Home> */}
        </div>
    );
};

export default Root;