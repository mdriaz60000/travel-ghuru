

const HotelRoom = ({hotelroom}) => {
    console.log(hotelroom)
    const {title,room,details,rating,price,image} = hotelroom;

    return (
        <div>
 
 <div className="  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <h1 className="text-5xl font-bold">{room}</h1>
      <p className="py-6">{details}</p>
     <div>
        <p>price:{rating}</p>
        <p>price:{price}</p>

     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default HotelRoom;