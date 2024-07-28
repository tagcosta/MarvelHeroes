import { Hero } from '../../interfaces/hero';
import HeroCard from '../heroCard/HeroCard';
import './heroesList.css';

type HeroesListProps = {
    heroes: Hero[];
};

export default function HeroesList({ heroes }: HeroesListProps) {
    return (
        <div className='heroesListContainer' data-testid='heroesList'>
            {heroes.map(hero => <HeroCard hero={hero} key={hero.id} />)}
        </div>
    );
}