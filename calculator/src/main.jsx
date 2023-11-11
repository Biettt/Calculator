import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routers/Home.jsx';
import Error from './components/Error.jsx';
import Login from './routers/Login.jsx';
import Signup from './routers/Singup.jsx';
import Calculator from './routers/Calculator.jsx';
import Converter from './routers/Converter.jsx';
import AboutUs from './routers/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/singup', element: <Signup /> },
      { path: '/login', element: <Login /> },
      { path: '/calculator', element: <Calculator /> },
      { path: '/converter', element: <Converter /> },
      { path: '/about-us', element: <AboutUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
);