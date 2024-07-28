import { Comic } from '../interfaces/comic';
import { Hero } from '../interfaces/hero';
import MarvelService from './marvelService';

export default class MarvelServiceApi implements MarvelService {

    constructor() { }

    async getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => resolve([
            {
                id: 1,
                name: 'Hero 1',
                description: 'Hero 1 Description',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg',
                },
                comics: {
                    collectionURI: '',
                },
            },
            {
                id: 2,
                name: 'Hero 2',
                description: 'Hero 2 Description',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg',
                },
                comics: {
                    collectionURI: '',
                },
            },
            {
                id: 3,
                name: 'Hero 3',
                description: 'Hero 3 Description',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg',
                },
                comics: {
                    collectionURI: '',
                },
            }
        ]));
    }

    async getComics(collectionUri: string): Promise<Comic[]> {
        return new Promise(resolve => resolve([
            {
                id: 1,
                title: 'Comic 1',
                dates: [{
                    type: 'onsaleDate',
                    date: new Date().toString(),
                }],
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3',
                    extension: 'jpg',
                },
            },
            {
                id: 2,
                title: 'Comic 2',
                dates: [{
                    type: 'onsaleDate',
                    date: new Date().toString(),
                }],
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3',
                    extension: 'jpg',
                },
            },
            {
                id: 3,
                title: 'Comic 3',
                dates: [{
                    type: 'onsaleDate',
                    date: new Date().toString(),
                }],
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3',
                    extension: 'jpg',
                },
            },
        ]));
    }
}