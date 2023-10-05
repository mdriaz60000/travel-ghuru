import logo   from '../../assets/logo.png'

const Navber = () => {
    return (
        <div className="navbar overlay bg-opacity-60 flex justify-between">
        <div className="">
        <img className=' w-72 h-20' src={logo} alt=""  />
        </div>
        <div className=" ml-6">
          <input type="search" name="" id="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-20 text-white">
            <li><a>news</a></li>
            <li><a>Item 3</a></li>
            <li><a>blog</a></li>
            <li><a>contact 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navber;