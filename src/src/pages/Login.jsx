import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { user, loginUser, googleSignIn, logoutUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(formData.email, formData.password);
            setFormData({ email: '', password: '' }); // Reset form data
            emailRef.current.value = '';
            passwordRef.current.value = '';
            toast.success('Logged in successfully!');
        } catch (error) {
            toast.error('Error logging in!');
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            toast.success('Logged in successfully with Google!');
        } catch (error) {
            toast.error('Error logging in with Google!');
        }
    };

    const handleLogout = async () => {
        try {
            await logoutUser();
            toast.success('Logged out successfully!');
            navigate('/');
        } catch (error) {
            toast.error('Error logging out!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
            <Helmet>
                <title>LingoNest | Login</title>
            </Helmet>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
                {user ? (
                    <div className="text-center">
                        <div className="p-6 bg-green-100 rounded-md flex flex-col items-center gap-4">
                            <img
                                src={user.photoURL}
                                alt="Avatar"
                                className="w-24 h-24 object-cover rounded-full border-4 border-green-500"
                            />
                            <p className="text-lg text-gray-700 font-semibold">
                                Logged in successfully! {user.displayName || user.email}
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            type="button"
                            className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    ref={emailRef}
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    ref={passwordRef}
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            >
                                Login
                            </button>
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center gap-3 px-4 py-2 mt-3 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <FaGoogle />
                                Login with Google
                            </button>

                            <hr className="my-6 border-gray-300" />
                            <p className="text-sm text-center text-gray-600">
                                Forgot your password?{' '}
                                <span
                                    onClick={() =>
                                        navigate('/forget-password', { state: { email: formData.email } })
                                    }
                                    className="text-teal-500 hover:underline cursor-pointer"
                                >
                                    Reset it here
                                </span>
                            </p>

                            <p className="text-sm text-center text-gray-600">
                                Don&apos;t have an account?{' '}
                                <span
                                    onClick={() => navigate("/register")}
                                    className="text-teal-500 hover:underline cursor-pointer"
                                >
                                    Register here
                                </span>
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
