
import Navber from '../../Components/Navber/Navber';
import homebg from '../../assets/homebg.png';
import  sree   from '../../assets/images/Sreemongol.png'
const Home = () => {
    const divStyle = {
        background: `url(${homebg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position:' relative'
       
     
    };

    return (
        <div style={divStyle}>
       
            <Navber ></Navber>
         
        <div className=' text-white mx-20 flex justify-between gap-6 mt-20 '>
<div>
    <h2 className=' text-5xl'>Coxs bazar</h2>
    <p>Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
    <button className=' btn'>booking</button>
</div>
<div> <img src={sree} alt="" /></div>
<div> <img src={sree} alt="" /></div>
<div> <img src={sree} alt="" /></div>

        </div>
         
        </div>
    );
};

export default Home;


