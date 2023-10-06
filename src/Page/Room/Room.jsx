import { useLoaderData } from "react-router-dom";
import HotelRoom from "../HotelRoom/HotelRoom";
import Maps from "../../Components/Maps/Maps";

const Room = () => {
  const hotelRooms = useLoaderData();
  console.log(hotelRooms);

  return (
    <div className=" space-y-3 grid grid-cols-2  gap-4">
      <div className="">
        {hotelRooms.map((hotelroom, idx) => (
          <HotelRoom hotelroom={hotelroom} key={idx}></HotelRoom>
        ))}
      </div>
      <div>
        <Maps></Maps>
      </div>
    </div>
  );
};

export default Room;
