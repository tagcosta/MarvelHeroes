import { Comic } from '../interfaces/comic';
import { Hero } from '../interfaces/hero';

export default interface MarvelService {
    getHeroes(): Promise<Hero[]>;
    getComics(collectionUri: string): Promise<Comic[]>;
}