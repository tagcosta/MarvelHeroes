import { useState, ReactNode } from 'react';
import { Hero } from '../marvel/interfaces/hero';
import { HeroesContext } from '../marvel/context/heroesContext';
import MarvelService from '../marvel/services/marvelService';

type HeroesProviderProps = {
    marvelService: MarvelService,
    initialHeroes: Hero[],
    children: ReactNode,
};

export function MockHeroesProvider({ marvelService, initialHeroes, children }: HeroesProviderProps) {

    const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <HeroesContext.Provider value={{ marvelService, heroes, setHeroes, searchQuery, setSearchQuery }}>
            {children}
        </HeroesContext.Provider>
    );
}