import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css'
import AppLayout from "./components/AppLayout";

import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Exercise from './pages/Exercise';
import Members from './pages/Members';
import WorkoutTemplate from './pages/WorkoutTemplate';
import DietTemplate from './pages/DietTemplate';
import Expenses from './pages/Expenses';
import Settings from './pages/Settings';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import UpdatePassword from './components/update-password';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import { supabase } from './config/config';


const router = createBrowserRouter([
  { path: "/login", element: <Login />, },
  { path: "/register", element: <Register />, },
  { path: "/forgot", element: <ForgotPassword />, },
  { path: "/update-password", element: <UpdatePassword />, },
  {
    path: '/',
    element: (<ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/employee', element: <Employees /> },
      { path: '/exercise', element: <Exercise /> },
      { path: '/members', element: <Members /> },
      { path: '/workoutTemplate', element: <WorkoutTemplate /> },
      { path: '/dietTemplate', element: <DietTemplate /> },
      { path: '/expenses', element: <Expenses /> },
      { path: '/settings', element: <Settings /> },
    ]
  }
]);
const App = () => {
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        localStorage.setItem("supabaseSession", JSON.stringify(data.session));
      } else {
        localStorage.removeItem("supabaseSession");
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        localStorage.setItem("supabaseSession", JSON.stringify(session));
      } else {
        localStorage.removeItem("supabaseSession");
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />,
    </>
  )
};
export default App;