import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet';


const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <Helmet>
        <title>LingoBingo | Profile</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome, {user?.displayName || 'User'}!</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-center">{user?.displayName || 'No Name Provided'}</h2>
        <p className="text-gray-600 text-center mb-4">{user?.email}</p>
        <button
          className="btn btn-primary w-full"
          onClick={() => navigate('/update-profile')}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
