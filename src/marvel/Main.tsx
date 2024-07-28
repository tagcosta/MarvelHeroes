import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import useHeroesContext from './context/useHeroesContext';

export default function Main() {
    const { marvelService, setHeroes, favoriteHeroIds } = useHeroesContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const heroes = await marvelService.getHeroes();
            setHeroes(heroes);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header nrFavorites={favoriteHeroIds.length} />
            {loading ? <p>Loading...</p> : <Outlet />}
        </>
    );
}