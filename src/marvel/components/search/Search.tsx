import { ChangeEvent } from 'react';
import './search.css';
import searchIcon from '../../../assets/search.png';
import useHeroesContext from '../../context/useHeroesContext';

type SearchProps = {
    nrResults: number;
};

export default function Search({ nrResults }: SearchProps) {

    const { searchQuery, setSearchQuery } = useHeroesContext();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchQuery(event.target.value);
    }

    return (
        <div className='searchContainer'>
            <div className='searchBox'>
                <img src={searchIcon} alt='Search' />
                <div>
                    <input name='search' data-testid='search' type='text' value={searchQuery} onChange={handleChange} placeholder='Search a character...' />
                </div>
            </div>
            <div className='nrResults' data-testid='nrResults'>
                {`${nrResults} ${nrResults === 1 ? 'Result' : 'Results'}`}
            </div>
        </div>
    );
}