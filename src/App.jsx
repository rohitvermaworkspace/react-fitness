import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css'
import AppLayout from "./components/AppLayout";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Exercise from './pages/Exercise';
import Members from './pages/Members';
import WorkoutTemplate from './pages/WorkoutTemplate';
import DietTemplate from './pages/DietTemplate';
import Expenses from './pages/Expenses';
import Settings from './pages/Settings';


  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
       children: [
        // { path: '/', element: <Home /> },
        // { path: '/about', element: <About /> },
        // { path: '/service', element: <Services />},
        // { path: '/contact', element: <Contact />} 
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
  return <RouterProvider router={router} />;
};
export default App;