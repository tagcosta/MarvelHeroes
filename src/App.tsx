import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './marvel/Main';
import List from './marvel/views/list/List';
import Favorites from './marvel/views/favorites/Favorites';

const routes: RouteObject[] = [{
  path: '/',
  element: <Main />,
  children: [
    {
      index: true,
      element: <Navigate to={'/heroes'} />,
    },
    {
      path: '/heroes',
      element: <List />,
    },
    {
      path: '/favorites',
      element: <Favorites />,
    },
  ],
}];

export default function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}