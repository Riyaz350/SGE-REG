import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Registration from './Components/Registration/Registration.jsx';
import Registration2 from './Components/Registration2/Registration2.jsx';
import RegistrationDummy from './Components/Registration/RegistrationDummy.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/Authentication/LogIn.jsx';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import RegistrationList from './Components/RegistrationList/RegistrationList.jsx';
import SingleRegistration from './Components/RegistrationList/SingleRegistration.jsx';
import LandingPage from './Components/Home/LandingPage.jsx';
import PrivateRoute from './Components/Hooks/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path: '/studentForm',
        // element: <Registration/>
        // element:<RegistrationDummy/>
        element: <Registration2 />,
      },
      {
        path: 'logIn',
        element: <LogIn />
      },
      {
        path: 'registrations',
        element: <PrivateRoute><RegistrationList/></PrivateRoute>
      },
      {
        path:'/singleRegistration/:id',
        element:<PrivateRoute><SingleRegistration/></PrivateRoute>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </AuthProvider>
)
