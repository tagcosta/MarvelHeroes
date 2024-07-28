import { Hero } from '../../interfaces/hero';
import './heroCard.css';
import fav from '../../../assets/fav.png';
import notFav from '../../../assets/notFav.png';
import { Link } from 'react-router-dom';
import useHeroesContext from '../../context/useHeroesContext';

type HeroCardProps = {
    hero: Hero;
};

export default function HeroCard({ hero }: HeroCardProps) {

    const { favoriteHeroIds, setFavoriteHeroIds } = useHeroesContext();

    function toggleFavorite() {
        if (favoriteHeroIds.includes(hero.id)) {
            setFavoriteHeroIds(favoriteHeroIds.filter(id => id !== hero.id));
        } else {
            setFavoriteHeroIds([...favoriteHeroIds, hero.id]);
        }
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
            <button className='toggleFav' onClick={toggleFavorite} data-testid='toggleFav'>
                <img src={favoriteHeroIds.includes(hero.id) ? fav : notFav} alt="Toggle Favourite" />
            </button>
        </div>
    );
}