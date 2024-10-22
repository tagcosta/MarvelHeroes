import { useState, ReactNode } from 'react';
import { Hero } from '../interfaces/hero';
import { HeroesContext } from './heroesContext';
import MarvelService from '../services/marvelService';

type HeroesProviderProps = {
    marvelService: MarvelService,
    children: ReactNode,
};

export function HeroesProvider({ marvelService, children }: HeroesProviderProps) {

    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [favoriteHeroIds, setFavoriteHeroIds] = useState<number[]>([]);

    return (
        <HeroesContext.Provider value={{ marvelService, heroes, setHeroes, searchQuery, setSearchQuery, favoriteHeroIds, setFavoriteHeroIds }}>
            {children}
        </HeroesContext.Provider>
    );
}