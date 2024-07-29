import { Hero } from '../../interfaces/hero';
import './heroCard.css';
import fav from '../../../assets/fav.png';
import favWhite from '../../../assets/favWhite.png';
import notFav from '../../../assets/notFav.png';
import { Link } from 'react-router-dom';
import useHeroesContext from '../../context/useHeroesContext';
import { useEffect, useState } from 'react';

type HeroCardProps = {
    hero: Hero;
};

export default function HeroCard({ hero }: HeroCardProps) {

    const { favoriteHeroIds, setFavoriteHeroIds } = useHeroesContext();
    const [favImage, setFavImage] = useState(notFav);

    useEffect(() => {
        if (favoriteHeroIds.includes(hero.id)) {
            setFavImage(fav);
        } else {
            setFavImage(notFav)
        }
    }, [favoriteHeroIds, hero]);

    function toggleFavorite() {
        if (favoriteHeroIds.includes(hero.id)) {
            setFavoriteHeroIds(favoriteHeroIds.filter(id => id !== hero.id));
        } else {
            setFavoriteHeroIds([...favoriteHeroIds, hero.id]);
        }
    }

    function onFavMouseEnter() {
        if (favoriteHeroIds.includes(hero.id)) {
            setFavImage(favWhite);
        }
    }

    function onFavMouseOut() {
        if (favoriteHeroIds.includes(hero.id)) {
            setFavImage(fav);
        }
    }

    return (
        <div className='heroCardContainer'>
            <Link to={`/heroes/${hero.id}`}>
                <div className='heroCard' onMouseEnter={onFavMouseEnter} onMouseOut={onFavMouseOut}>
                    <div className='photo'>
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Thumbnail" />
                    </div>
                    <div className='info'>
                        <div className='name'>{hero.name}</div>
                    </div>
                </div>
            </Link>
            <button className='toggleFav' onClick={toggleFavorite} data-testid='toggleFav'>
                <img src={favImage} alt="Toggle Favourite" />
            </button>
        </div>
    );
}