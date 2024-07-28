import { useState, useEffect } from 'react';
import HeroesList from '../../components/heroesList/HeroesList';
import Search from '../../components/search/Search';
import useHeroesContext from '../../context/useHeroesContext';

export default function List() {
    const { heroes, searchQuery } = useHeroesContext();
    const [filteredHeroes, setFilteredHeroes] = useState(heroes);

    useEffect(() => {
        setFilteredHeroes(heroes.filter(hero => hero.name.toUpperCase().includes(searchQuery.toUpperCase())));
    }, [heroes, searchQuery]);

    return (
        <>
            <Search nrResults={filteredHeroes.length} />
            <HeroesList heroes={filteredHeroes} />
        </>
    );
}