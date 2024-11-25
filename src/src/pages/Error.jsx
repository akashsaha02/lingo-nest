import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-teal-100 via-purple-100 to-pink-100">
            <Helmet>
                <title>LingoNest | 404 Not Found</title>
            </Helmet>
            <div className="text-center px-6 md:px-20">
                <h1 className="text-9xl font-bold text-teal-600">404</h1>
                <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                    Oops! Page not found.
                </p>
                <p className="mt-2 text-gray-600">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <Link to="/" className="mt-6 inline-block px-8 py-3 bg-teal-600 text-white text-lg font-medium rounded-full hover:bg-teal-700">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
