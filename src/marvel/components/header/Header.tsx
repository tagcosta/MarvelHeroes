import './header.css';
import logo from '../../../assets/logo.png';
import fav from '../../../assets/fav.png';

type HeaderProps = {
    nrFavorites?: number;
}

export default function Header({ nrFavorites }: HeaderProps) {
    return (
        <header id='header'>
            <div id='headerContent'>
                <a href='/heroes'>
                    <img id='logo' src={logo} alt='Marvel Heroes' />
                </a>
                <a href='/favorites'>
                    <div id='favourites'>
                        <img id='favouritesLogo' src={fav} alt='Favourites' />
                        <span >{nrFavorites ?? 0}</span>
                    </div>
                </a>
            </div>
        </header>
    );
}