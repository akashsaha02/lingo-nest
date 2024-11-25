import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (user) {
      try {
        await logoutUser();
        alert('User logged out, navigating to home');
        navigate("/"); // Navigate after successful logout
      } catch (error) {
        console.error('Error logging out:', error.message);
      }
    }
  };

  const links = <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-500'
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/start-learning"
      className={({ isActive }) =>
        isActive ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-500'
      }
    >
      Start Learning
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-500'
      }
    >
      About
    </NavLink>
    {
      user && <NavLink
        to="/tutorial"
        className={({ isActive }) =>
          isActive ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-500'
        }
      >
        Tutorial
      </NavLink>
    }
    {
      user && <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-500'
        }
      >
        My Profile
      </NavLink>
    }
  </>

  console.log('Current user:', user);

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50">
      <div className="navbar-start flex items-center space-x-4">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
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
            className="menu menu-sm dropdown-content bg-white rounded-md shadow-lg p-2 mt-2"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl font-bold text-teal-600">Lingo Bingo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? 'text-white bg-teal-600 px-4 py-2 rounded-md shadow-md' : 'text-gray-600 hover:text-teal-500'
          }
        >
          {user ? user.displayName || user.email : 'Register'}
        </NavLink>
        <NavLink
          to={user ? "/" : "/login"}
          onClick={user ? handleLogin : null}
          className={({ isActive }) =>
            isActive ? 'text-white bg-teal-600 px-4 py-2 rounded-md shadow-md' : 'text-gray-600 hover:text-teal-500'
          }
        >
          {user ? 'Logout' : 'Login'}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;