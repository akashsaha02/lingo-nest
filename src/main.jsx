import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';
import DataProvider from './providers/DataProvider';
import Profile from './pages/Profile';
import PrivateRoute from './routes/PrivateRoute';
import Error from './pages/Error';
import LetsLearn from './pages/LetsLearn';
import About from './pages/About';
import Tutorial from './pages/Tutorial';
import LessonDetails from './pages/LessonDetails';
import UpdateProfile from './pages/UpdateProfile';
import ForgotPassword from './pages/ForgotPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/start-learning',
        element: <LetsLearn />
      },
      {
        path: '/lesson/:lesson_no',
        element: (
          <PrivateRoute>
            <LessonDetails />
          </PrivateRoute>
        )
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/tutorial',
        element: (
          <PrivateRoute>
            <Tutorial />
          </PrivateRoute>
        )
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      },
      {
        path: '/update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        )
      },
      {
        path: '/forget-password',
        element: <ForgotPassword />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);