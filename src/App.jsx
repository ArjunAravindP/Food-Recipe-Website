import HomePage from './Pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/Root';
import Login from './Pages/Login';
import Recipes from './Pages/Recipies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: null,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/recipes',
        children: [
          { index: true, element: <Recipes /> },
          { path: ':id', element: <Recipes /> },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  { path: '*', element: <HomePage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
