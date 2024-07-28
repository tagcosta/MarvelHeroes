import { Hero } from '../../interfaces/hero';
import './heroCard.css';
import fav from '../../../assets/fav.png';
import { Link } from 'react-router-dom';

type HeroCardProps = {
    hero: Hero;
};

export default function HeroCard({ hero }: HeroCardProps) {

    function toggleFavourite() {
        // ToDo
    }

    return (
        <div className='heroCardContainer'>
            <Link to={`/heroes/${hero.id}`}>
                <div className='heroCard'>
                    <div className='photo'>
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Thumbnail" />
                    </div>
                    <div className='info'>
                        <div className='name'>{hero.name}</div>
                    </div>
                </div>
            </Link>
            <button className='toggleFav' onClick={toggleFavourite}>
                <img src={fav} alt="Toggle Favourite" />
            </button>
        </div>
    );
}