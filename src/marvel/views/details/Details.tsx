import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import notFav from '../../../assets/notFav.png';
import fav from '../../../assets/fav.png';
import useHeroesContext from '../../context/useHeroesContext';
import ComicCard from '../../components/comicCard/ComicCard';
import { Comic } from '../../interfaces/comic';
import { Hero } from '../../interfaces/hero';

export default function Details() {
    const { marvelService, heroes, favoriteHeroIds, setFavoriteHeroIds } = useHeroesContext();
    const id = Number(useParams().id);
    const [comics, setComics] = useState<Comic[]>([]);
    const [loading, setLoading] = useState(true);
    const [hero, setHero] = useState<Hero | undefined>();

    useEffect(() => {
        setHero(heroes.find(x => x.id === id));
    }, [heroes, id]);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            if (hero?.comics) {
                const comicsData = await marvelService.getComics(hero.comics.collectionURI);
                setComics(comicsData);
                setLoading(false);
            }
        }
        if (hero) {
            fetchData();
        }
    }, [marvelService, hero]);

    function toggleFavourite() {
        if (hero) {
            if (favoriteHeroIds.includes(hero.id)) {
                setFavoriteHeroIds(favoriteHeroIds.filter(id => id !== hero.id));
            } else {
                setFavoriteHeroIds([...favoriteHeroIds, hero.id]);
            }
        }
    }

    if (!hero) {
        return <>Not Found!</>;
    }

    return (
        <>
            <div className='bannerContainer'>
                <div className='banner'>
                    <div className='photo'>
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Thumbnail" />
                    </div>
                    <div className='article'>
                        <div className='title'>
                            <div className='name'>{hero.name}</div>
                            <div>
                                <button className='toggleFav' onClick={toggleFavourite}>
                                    <img src={favoriteHeroIds.includes(hero.id) ? fav : notFav} alt="Toggle Favourite" />
                                </button>
                            </div>
                        </div>
                        <div className='content'>{hero.description}</div>
                    </div>
                </div>
            </div>
            <div className='comicsContainer'>
                <div className='title'>COMICS</div>
                {loading ? (
                    <p>Loading...</p>
                ) : <div className='comics' data-testid='comicsList'>
                    {comics.map(comic => <ComicCard comic={comic} key={comic.id} />)}
                </div>
                }
            </div>
        </>
    );
}