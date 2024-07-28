import { Comic } from '../marvel/interfaces/comic';
import { Hero } from '../marvel/interfaces/hero';
import MarvelService from '../marvel/services/marvelService';

export default class MockMarvelService implements MarvelService {

    heroes: Hero[];
    comics: Comic[];

    constructor() {
        this.heroes = [];
        this.comics = [];
    }

    addHero(id: number) {
        this.addHeroWithName(id, `Hero ${id}`);
    }

    addHeroWithName(id: number, name: string) {
        this.heroes.push({
            id,
            name,
            description: `Description for Hero ${id}`,
            comics: { collectionURI: '' },
            thumbnail: { path: '', extension: '' },
        });
    }

    addHeros(number: number) {
        for (let i = 0; i < number; i++) {
            this.addHero(i + 1);
        }
    }

    addComics(number: number) {
        for (let i = 0; i < number; i++) {
            this.comics.push({
                id: i + 1,
                title: `Comic ${i + 1}`,
                dates: [{
                    type: 'onsaleDate',
                    date: new Date().toString(),
                }],
                thumbnail: { path: '', extension: '' },
            });
        }
    }

    async getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => resolve(this.heroes));
    }

    async getComics(): Promise<Comic[]> {
        return new Promise(resolve => resolve(this.comics));
    }
}