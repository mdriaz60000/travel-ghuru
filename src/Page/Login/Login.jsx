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
     
      <div>
        <Navber></Navber>
        <div className=' mx-80 '>
      <h1 className="text-5xl font-bold">Login now!</h1>
   <form onSubmit={handleLogin} className=" outline p-6 ">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name="email" placeholder="email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Login</button>
           </div>
           <p>don,t have account?<Link className=' text-red-600' to='/register'> pleace Register</Link></p>
         </form>
         <div className=' flex'>
         <p > <hr className=' bg-red-300 py-2' /></p>
         <p>or</p>
         <p><hr className=' bg-red-300 py-2' /></p>
         </div>
         <div className=' p-10 space-y-3'>
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
   
      </div>
    );
};

export default Login;