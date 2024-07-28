import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

export default function Main() {
    return (
        <>
            <Header nrFavorites={3} />
            <Outlet />
        </>
    );
}