import { createContext, Dispatch, SetStateAction } from 'react';
import { Hero } from '../interfaces/hero';
import MarvelService from '../services/marvelService';

export interface HeroesState {
    marvelService: MarvelService;
    heroes: Hero[];
    setHeroes: Dispatch<SetStateAction<Hero[]>>;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const HeroesContext = createContext<HeroesState>({
    marvelService: new MarvelService(),
    heroes: [],
    setHeroes: () => { },
    searchQuery: '',
    setSearchQuery: () => { },
});