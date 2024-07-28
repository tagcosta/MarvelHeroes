import { createContext, Dispatch, SetStateAction } from 'react';
import { Hero } from '../interfaces/hero';
import MarvelService from '../services/marvelService';
import MarvelServiceApi from '../services/marvelServiceApi';

export interface HeroesState {
    marvelService: MarvelService;
    heroes: Hero[];
    setHeroes: Dispatch<SetStateAction<Hero[]>>;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    favoriteHeroIds: number[];
    setFavoriteHeroIds: Dispatch<SetStateAction<number[]>>;
}

export const HeroesContext = createContext<HeroesState>({
    marvelService: new MarvelServiceApi(),
    heroes: [],
    setHeroes: () => { },
    searchQuery: '',
    setSearchQuery: () => { },
    favoriteHeroIds: [],
    setFavoriteHeroIds: () => { },
});