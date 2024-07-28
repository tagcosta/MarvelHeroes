import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './marvel/Main';
import List from './marvel/views/list/List';
import Favorites from './marvel/views/favorites/Favorites';
import MarvelService from './marvel/services/marvelService';
import { HeroesProvider } from './marvel/context/HeroesProvider';

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
  const marvelService = new MarvelService();

  return (
    <HeroesProvider marvelService={marvelService}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </HeroesProvider>
  );
}