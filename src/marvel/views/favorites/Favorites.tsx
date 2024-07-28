import { useEffect, useState } from 'react';
import HeroesList from '../../components/heroesList/HeroesList';
import Search from '../../components/search/Search';
import useHeroesContext from '../../context/useHeroesContext';
import { Hero } from '../../interfaces/hero';

export default function Favorites() {
    const { heroes, searchQuery, favoriteHeroIds } = useHeroesContext();
    const [filteredHeroes, setFilteredHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        setFilteredHeroes(heroes.filter(hero =>
            hero.name.toUpperCase().includes(searchQuery.toUpperCase()) &&
            favoriteHeroIds.includes(hero.id)
        ));
    }, [heroes, searchQuery, favoriteHeroIds]);

    return (
        <>
            <Search nrResults={filteredHeroes.length} />
            <HeroesList heroes={filteredHeroes} />
        </>
    );
}