import { Comic } from '../../interfaces/comic';
import './comicCard.css';

type ComicCardProps = {
    comic: Comic,
};

export default function ComicCard({ comic }: ComicCardProps) {

    function getYear() {
        const dates = comic.dates.filter(date => date.type === 'onsaleDate');
        if (dates && dates.length > 0) {
            return new Date(dates[0].date).getFullYear();
        } else {
            return '--';
        }
    }

    return (
        <div className='comicCard'>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Thumbnail" />
            <div className='title'>{comic.title}</div>
            <div className='year'>{getYear()}</div>
        </div>
    );
}