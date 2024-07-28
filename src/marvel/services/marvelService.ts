import { Hero } from '../interfaces/hero';

export default class MarvelService {

    constructor() { }

    async getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => resolve([
            {
                id: 1,
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg',
                }
            },
            {
                id: 2,
                name: 'Hero 2',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg',
                }
            },
            {
                id: 3,
                name: 'Hero 3',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg',
                }
            }
        ]));
    }
}