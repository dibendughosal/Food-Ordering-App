import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error/>,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact/>,
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider routes={routers} />);
