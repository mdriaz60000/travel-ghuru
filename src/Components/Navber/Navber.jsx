/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = ({className}) => {
    return (
        <nav className={`${className} backdrop-blur-sm py-4 px-6 lg:px-20 fixed w-full z-50`} >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img 
                        className="w-40 h-14 object-contain hover:opacity-90 transition-opacity" 
                        src={logo} 
                        alt="Travel Bangladesh Logo" 
                    />
                </Link>

                {/* Search Bar - Center aligned on desktop */}
                <div className="w-full md:w-auto md:flex-1 md:px-8">
                    <input 
                        className="input input-bordered w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-warning focus:border-transparent" 
                        type="search" 
                        placeholder="Search your destination..."
                    />
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
                    <Link 
                        to="/" 
                        className="text-white hover:text-warning transition-colors font-medium"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/destination" 
                        className="text-white hover:text-warning transition-colors font-medium"
                    >
                        Destination
                    </Link>
                    <Link 
                        to="/blog" 
                        className="text-white hover:text-warning transition-colors font-medium"
                    >
                        Blog
                    </Link>
                    <Link 
                        to="/contact" 
                        className="text-white hover:text-warning transition-colors font-medium"
                    >
                        Contact
                    </Link>
                    <Link 
                        to="/login" 
                        className="btn btn-warning btn-sm  hover:bg-opacity-90 transition-all"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;