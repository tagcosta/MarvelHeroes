import { useContext } from 'react';
import { HeroesContext, HeroesState } from './heroesContext';

export default function useHeroesContext(): HeroesState {
    return useContext(HeroesContext);
}