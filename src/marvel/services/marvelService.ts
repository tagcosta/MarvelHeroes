import { Hero } from '../interfaces/hero';

export default interface MarvelService {
    getHeroes(): Promise<Hero[]>;
}