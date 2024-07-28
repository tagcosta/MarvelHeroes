import { Comic } from '../interfaces/comic';
import { Hero } from '../interfaces/hero';
import MarvelService from './marvelService';

export default class MarvelServiceApi implements MarvelService {

    url: string;
    heroesLimit: number;
    apiKey: string;
    comicsLimit: number;

    constructor() {
        this.url = 'https://gateway.marvel.com/v1/';
        this.heroesLimit = 50;
        this.apiKey = import.meta.env.VITE_API_PUBLIC_KEY;
        this.comicsLimit = 10;
    }

    async getHeroes(): Promise<Hero[]> {
        const response = await fetch(`${this.url}public/characters?apikey=${this.apiKey}&limit=${this.heroesLimit}`, {
            method: 'get',
            headers: {},
        });
        if (response.status === 200) {
            return (await response.json()).data.results;
        } else {
            // Error Handling outside of the scope of this project
            return [];
        }
    }

    async getComics(collectionUri: string): Promise<Comic[]> {
        const response = await fetch(`${collectionUri}?apikey=${this.apiKey}&limit=${this.comicsLimit}`, {
            method: 'get',
            headers: {},
        });
        if (response.status === 200) {
            return (await response.json()).data.results;
        } else {
            // Error Handling outside of the scope of this project
            return [];
        }
    }
}