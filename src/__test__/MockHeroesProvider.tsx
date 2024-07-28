import { useState, ReactNode } from 'react';
import { Hero } from '../marvel/interfaces/hero';
import { HeroesContext } from '../marvel/context/heroesContext';
import MarvelService from '../marvel/services/marvelService';

type HeroesProviderProps = {
    marvelService: MarvelService,
    initialHeroes: Hero[],
    initialFavoriteHeroIds: number[],
    children: ReactNode,
};

export function MockHeroesProvider({ marvelService, initialHeroes, initialFavoriteHeroIds, children }: HeroesProviderProps) {

    const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [favoriteHeroIds, setFavoriteHeroIds] = useState<number[]>(initialFavoriteHeroIds);

    return (
        <HeroesContext.Provider value={{ marvelService, heroes, setHeroes, searchQuery, setSearchQuery, favoriteHeroIds, setFavoriteHeroIds }}>
            {children}
        </HeroesContext.Provider>
    );
}