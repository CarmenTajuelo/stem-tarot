import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import App from '../App';

/**
 * Router configuration for the Tarot Card application
 * Routes:
 * - / : Home page displaying all cards
 * - /card/:id : Detail page for a specific card
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error: Page Not Found!</div>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'card/:id',
        element: <Detail />,
      }
    ]
  }
]);
