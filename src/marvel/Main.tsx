import Header from './components/header/Header';
import List from './views/list/List';

export default function Main() {
    return (
        <>
            <Header nrFavorites={3} />
            <List />
        </>
    );
}