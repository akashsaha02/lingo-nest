import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Button, Navbar, Avatar } from "flowbite-react";

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
    } else {
      navigate("/login");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };


  return (
    <div className="sticky top-0 z-50 py-4 bg-bg-1  backdrop:blur-md">
      <Navbar fluid className="bg-bg-1">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-bold text-accent-1">Lingo Nest</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {!user ? (
            <Button onClick={handleRegister} className="mr-2 bg-accent-1 text-bg-1">
              {'Register'}
            </Button>
          ) : (
            <Avatar className="mr-2" alt="User settings" img={user.photoURL} rounded />
          )}
          <Button onClick={handleLogin} className='mr-2 md:mr-0 bg-blue-600'>
            {user ? 'Logout' : 'Login'}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-1 text-md lg:text-lg ${isActive ? "font-semibold bg-blue-600 rounded-lg text-white" : "text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/start-learning"
            className={({ isActive }) =>
              `px-2 py-1 text-md lg:text-lg ${isActive ? "font-semibold bg-blue-600 rounded-lg text-white" : "text-white"}`
            }
          >
            Start Learning
          </NavLink>
          {user && (
            <NavLink
              to="/tutorial"
              className={({ isActive }) =>
                `px-2 py-1 text-md lg:text-lg ${isActive ? "font-semibold bg-blue-600 rounded-lg text-white" : "text-white"}`
              }
            >
              Tutorial
            </NavLink>
          )}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-2 py-1 text-md lg:text-lg ${isActive ? "font-semibold bg-blue-600 rounded-lg text-white" : "text-white"}`
            }
          >
            About
          </NavLink>
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-2 py-1 text-md lg:text-lg ${isActive ? "font-semibold bg-blue-600 rounded-lg text-white" : "text-white"}`
              }
            >
              My Profile
            </NavLink>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
