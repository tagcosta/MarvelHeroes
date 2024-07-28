import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import { useEffect } from 'react';
import useHeroesContext from './context/useHeroesContext';

export default function Main() {
    const { marvelService, setHeroes } = useHeroesContext();

    useEffect(() => {
        async function fetchData() {
            const heroes = await marvelService.getHeroes();
            setHeroes(heroes);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header nrFavorites={3} />
            <Outlet />
        </>
    );
}