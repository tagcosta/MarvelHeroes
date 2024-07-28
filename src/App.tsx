import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './marvel/Main';
import List from './marvel/views/list/List';
import Favorites from './marvel/views/favorites/Favorites';
import { HeroesProvider } from './marvel/context/HeroesProvider';
import MarvelServiceApi from './marvel/services/marvelServiceApi';
import Details from './marvel/views/details/Details';

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
    {
      path: '/heroes/:id',
      element: <Details />,
    },
  ],
}];

export default function App() {
  const marvelService = new MarvelServiceApi();

  return (
    <HeroesProvider marvelService={marvelService}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </HeroesProvider>
  );
}