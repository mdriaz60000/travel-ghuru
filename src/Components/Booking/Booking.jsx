import Navbar from "../Navber/Navber";
import homebg from '../../assets/homebg.png';

const Booking = () => {
    const divStyle = {
        backgroundImage: `url(${homebg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
    };

    return (
        <div style={divStyle}>
            <div className="bg-black bg-opacity-60 absolute inset-0 z-0">
              <Navbar />
            </div>
            
            <div className="relative z-10 pt-16"> {/* Added padding-top to account for navbar */}
                <section className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-16 items-start py-12">
                    {/* Left: Info Section */}
                    <div className="text-white max-w-xl pt-8">
                        <h1 className="text-4xl font-bold mb-4">Cox's Bazar</h1>
                        <p className="text-lg leading-relaxed">
                            Cox's Bazar is one of the most beautiful beach destinations in the world, known for its 
                            uninterrupted 120 km long sea beach. It's a paradise for travelers, with rich culture, 
                            scenic beauty, and warm hospitality. Book your trip now to experience the magic!
                        </p>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="w-full max-w-md bg-white bg-opacity-95 rounded-lg p-6 shadow-md mt-8">
                        <form>
                            {/* Origin */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold text-gray-700">
                                    <span>Origin</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Dhaka" 
                                    className="input input-bordered w-full" 
                                    required 
                                />
                            </div>

                            {/* Destination */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold text-gray-700">
                                    <span>Destination</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Cox's Bazar" 
                                    className="input input-bordered w-full" 
                                    required 
                                />
                            </div>

                            {/* Date Range */}
                            <div className="flex gap-4 mb-6">
                                <div className="form-control w-1/2">
                                    <label className="label font-semibold text-gray-700">
                                        <span>From</span>
                                    </label>
                                    <input 
                                        type="date" 
                                        className="input input-bordered w-full" 
                                        required 
                                    />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label font-semibold text-gray-700">
                                        <span>To</span>
                                    </label>
                                    <input 
                                        type="date" 
                                        className="input input-bordered w-full" 
                                        required 
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="btn btn-warning w-full text-lg font-bold"
                            >
                                Start Booking
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Booking;