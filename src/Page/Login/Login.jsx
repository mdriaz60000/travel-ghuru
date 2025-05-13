import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

const {logIn, googlelogIn} = useContext(AuthContext)

 const handlegoogleLogin = () =>{
    //signInUser user in firebase
    googlelogIn()
    .then((result) => {
      console.log(result.user);
      toast("googleLogin successful!");
      
    })
    .catch((error) => {
      console.error(error);
      toast("error googlelogin!");
    });
 }

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }

  return (
   <div className="min-h-screen bg-slate-400">

            {/* Registration Section */}
            <div className='max-w-md mx-auto px-4 sm:px-6 py-12'>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Login Account</h1>
                    <p className="text-gray-600">Join us today to get started</p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-md p-8">
                    <div className="space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary" 
                                required 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Create a password" 
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary" 
                                required 
                            />
                        </div>



                        <div className="pt-4">
                            <button className="btn btn-warning w-full py-3 text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                                Login
                            </button>
                        </div>
                                       {/* Login Link */}
                <div className="text-center">
                    <p className="text-gray-600">
                        Create an account?{' '}
                        <Link 
                            to='/register' 
                            className="text-primary hover:text-primary-dark font-medium transition-colors"
                        >
                            Register
                        </Link>
                    </p>
                </div>
                    </div>
                </form>
                

                {/* Divider */}
                <div className='flex items-center my-8'>
                    <hr className='flex-grow border-t border-gray-200' />
                    <span className='px-4 text-gray-500 text-sm'>OR CONTINUE WITH</span>
                    <hr className='flex-grow border-t border-gray-200' />
                </div>

                {/* Social Login Buttons */}
                <div className='space-y-4 mb-8'>
                                        <button onClick={handlegoogleLogin} className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <FaGoogle className="text-red-600 text-xl mr-3" />
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all">
                        <FaFacebook className="text-blue-600 text-xl mr-3" />
                        Continue with Facebook
                    </button>

                </div>

 
            </div>
        </div>
  );
};

export default Login;