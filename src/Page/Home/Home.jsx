import Navbar from '../../Components/Navber/Navber';
import homebg from '../../assets/homebg.png';
import sreemangal from '../../assets/images/Sreemongol.png';
import sajek from '../../assets/images/Sajek.png';
import sundarbans from '../../assets/images/sundorbon.png';
//  import coxsbazar from '../../assets/images/'; // add this image
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={homebg}
                    alt="Cox's Bazar Beach"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <div className="container mx-auto px-4 py-20 flex-grow flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left: Hero Text */}
                    <div className="text-white max-w-2xl">
                        <h2 className="text-5xl font-extrabold mb-6">COX'S BAZAR</h2>
                        <p className="mb-6 text-lg leading-relaxed">
                            Cox's Bazar is a city, fishing port, tourism centre and district headquarters 
                            in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, 
                            and it is the longest natural sea beach in the world.
                        </p>
                        <Link to='/booking'>
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-all">
                                Booking →
                            </button>
                        </Link>
                    </div>

                    {/* Right: Destination Cards */}
                    <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
                        {[
                            { title: "COX'S BAZAR", image: sajek, active: true },
                            { title: "SREEMANGAL", image: sreemangal },
                            { title: "SUNDARBANS", image: sundarbans },
                        ].map(({ title, image, active }) => (
                            <div
                                key={title}
                                className={`min-w-[200px] h-[300px] rounded-xl overflow-hidden shadow-lg relative flex-shrink-0 transition-transform transform hover:scale-105 ${
                                    active ? 'border-4 border-yellow-400' : ''
                                }`}
                            >
                                <img src={image} alt={title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                                    <h3 className="text-white text-xl font-bold">{title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
