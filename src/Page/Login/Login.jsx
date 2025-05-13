import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Navber from './../../Components/Navber/Navber';

const Login = () => {

  const handleLogin = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
  }

    return (
     
      <div className=" bg-white">
        <Navber className='text-black'></Navber>
        <div className=' mx-80  outline mt-12 '>
      <h1 className="text-3xl  font-medium px-6 pt-4">Login </h1>
   <form onSubmit={handleLogin} className="  p-6 ">
           <div className="form-control">
             
             <input type="email" name="email" placeholder="email" className=" input border-b-[4px] border-red-700" required />
           </div>
           <br />
           <div className="form-control">
             <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             <label className="label">
               <a href="#" className="  label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Login</button>
           </div>
           <p className=" text-center mt-3">don,t have account?<Link className=' text-red-600' to='/register'> pleace Register</Link></p>
         </form>  
           </div>

  
         <div className=' mt-5  w-1/4 mx-auto space-y-3'>
         <button className="btn btn-outline w-full rounded-3xl ">
    <FaFacebook></FaFacebook>
    Continue with Facebook
   </button>
         <button className="btn btn-outline w-full border rounded-3xl ">
    <FaGoogle></FaGoogle>
    Continue with Google
   </button>
         </div>
   
   
      </div>
    );
};

export default Login;