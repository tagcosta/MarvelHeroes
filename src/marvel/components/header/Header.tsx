import './header.css';
import logo from '../../../assets/logo.png';
import fav from '../../../assets/fav.png';
import { Link } from 'react-router-dom';

type HeaderProps = {
    nrFavorites?: number;
}

export default function Header({ nrFavorites }: HeaderProps) {
    return (
        <header id='header'>
            <div id='headerContent'>
                <Link to='/heroes'>
                    <img id='logo' src={logo} alt='Marvel Heroes' />
                </Link>
                <Link to='/favorites'>
                    <div id='favourites'>
                        <img id='favouritesLogo' src={fav} alt='Favourites' />
                        <span data-testid='nrFavorites'>{nrFavorites ?? 0}</span>
                    </div>
                </Link>
            </div>
        </header>
    );
}