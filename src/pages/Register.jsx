import { signOut, updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import auth from '../firebase/firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        photoUrl: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        setErrorMessage('');

        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passwordRegex.test(formData.password)) {
            setErrorMessage('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter');
            return;
        }

        // Create user
        createUser(formData.email, formData.password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: formData.username,
                    photoURL: formData.photoUrl
                }).catch(error => {
                    toast.error('Error updating user profile:', error.code, error.message);
                });

                // Log out after registration
                signOut(auth)
                    .catch(error => {
                        toast.error('Error logging out:', error.code, error.message);
                    });

                setSuccess(true);
                toast.success('User registered successfully!');
                setFormData({
                    username: '',
                    photoUrl: '',
                    email: '',
                    password: '',
                });
                e.target.reset();
            }).catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                setSuccess(false);
                toast.error('Error registering user!');
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-200 via-pink-200 to-yellow-200 p-6">
            <Helmet>
                <title>LingoNest | Register</title>
            </Helmet>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-700">Create Your Account</h2>
                <hr className="my-4 border-gray-300" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                            placeholder="Enter a username"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-600">Avatar URL</label>
                        <input
                            type="text"
                            name="photoUrl"
                            value={formData.photoUrl}
                            onChange={handleChange}
                            autoComplete="photo"
                            required
                            placeholder="Enter avatar URL"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter a strong password"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-4 top-6 flex items-center text-gray-600 hover:text-gray-800"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-semibold text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <span onClick={() => navigate("/login")} className="text-teal-500 hover:underline cursor-pointer">
                        Log in
                    </span>
                </p>

                {errorMessage && <p className="text-sm text-red-500 text-center">{errorMessage}</p>}
                {success && <p className="text-sm text-green-500 text-center">User registered successfully!</p>}
            </div>
        </div>
    );
};

export default Register;
