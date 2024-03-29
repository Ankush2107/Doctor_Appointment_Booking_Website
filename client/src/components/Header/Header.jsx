import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";


const navLink = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/docters",
    display: "Find a Docter"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/contact",
    display: "Contact"
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* menu   */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-600"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                    to={link.path}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
          

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
            </Link>

            <span className="md:hidden">
              {/* <BiMenu className="w-16 h-6 cursor-pointer" /> */}
            </span>

          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
