import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import ProfileTooltip from './ProfileTooltip';
import logo from '../assets/logo.svg'

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-indigo-600 text-white' : 'bg-transparent'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/start-learning"
        className={({ isActive }) =>
          `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-indigo-600 text-white' : 'bg-transparent'
          }`
        }
      >
        Start Learning
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-indigo-600 text-white' : 'bg-transparent'
          }`
        }
      >
        About Us
      </NavLink>
    </>
  );


  return (
    <div className='bg-white sticky top-0 z-50 shadow-md py-2'>
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-3 btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2
            onClick={() => navigate("/")}
            className="text-xl md:text-3xl font-bold cursor-pointer flex items-center gap-2"
          >
            {/* <span className="hidden sm:block"><img className='w-10 h-10' src='/lingonest-logo.png' alt="" /></span> */}
            <span className="hidden sm:block"><img className='w-10 h-10' src={logo} alt="" /></span>
            <span>LingoNest</span>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {
            <NavLink
              to={user ? "/profile" : "/register"}
              className={({ isActive }) =>
                `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-transparent dark:text-gray-200'
                }`
              }>
              {user ? "My Profile" : "Register"}
            </NavLink>

          }

          {
            user ? <ProfileTooltip img={user.displayURL} name={user.displayName} email={user.email} /> : <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-transparent dark:text-gray-200'
                }`
              }>
              Login
            </NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
