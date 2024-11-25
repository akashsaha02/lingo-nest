import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';


const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleUpdate = async () => {
    if (!name || !photoURL) {
      alert('Please fill out both fields.');
      return;
    }
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      alert('Profile updated successfully!');
      navigate('/profile'); // Navigate back to My Profile page
    } catch (error) {
      console.error('Error updating profile:', error.message);
      alert('Failed to update profile. Try again.');
    }
  };

  return (
    <div className="p-6">
        <Helmet>
            <title>LingoBingo | Update Profile</title>
        </Helmet>
      <h1 className="text-3xl font-bold mb-6">Update Your Profile</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter photo URL"
          />
        </div>
        <button
          className="btn btn-primary w-full"
          onClick={handleUpdate}
        >
          Update Information
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
