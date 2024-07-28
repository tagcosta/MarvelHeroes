import { Hero } from '../marvel/interfaces/hero';
import MarvelService from '../marvel/services/marvelService';

export default class MockMarvelService implements MarvelService {

    heroes: Hero[];

    constructor() {
        this.heroes = [];
    }

    addHero(id: number) {
        this.addHeroWithName(id, `Hero ${id}`);
    }

    addHeroWithName(id: number, name: string) {
        this.heroes.push({
            id,
            name,
            thumbnail: { path: '', extension: '' },
        });
    }

    addHeros(number: number) {
        for (let i = 0; i < number; i++) {
            this.addHero(i + 1);
        }
    }

    async getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => resolve(this.heroes));
    }
}