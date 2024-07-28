import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockApp from '../../../__test__/MockApp';
import MockMarvelService from '../../../__test__/mockMarvelService';
import Favorites from './Favorites';

describe('Favorites', () => {
    it('should render 0 heroes by default', () => {
        const nrHeroes = 10;
        const marvelService = new MockMarvelService();
        marvelService.addHeros(nrHeroes);
        new MockApp().setService(marvelService).render(<Favorites />);
        expect(screen.getByTestId('heroesList').children).toHaveLength(0);
    });

    it('should render selected favorites', () => {
        const marvelService = new MockMarvelService();
        marvelService.addHeroWithName(1, 'ABC');
        marvelService.addHeroWithName(2, 'BC');
        marvelService.addHeroWithName(3, 'C');
        marvelService.addHeroWithName(4, 'ABC');
        marvelService.addHeroWithName(5, 'BC');
        marvelService.addHeroWithName(6, 'C');
        new MockApp().setService(marvelService).setFavoriteHeroIds([4, 5, 6]).render(<Favorites />);
        const heroesList = screen.getByTestId('heroesList');
        expect(heroesList.children).toHaveLength(3);
    });

    it('should render selected favorites according to the search query', async () => {
        const marvelService = new MockMarvelService();
        marvelService.addHeroWithName(1, 'ABC');
        marvelService.addHeroWithName(2, 'BC');
        marvelService.addHeroWithName(3, 'C');
        marvelService.addHeroWithName(4, 'ABC');
        marvelService.addHeroWithName(5, 'BC');
        marvelService.addHeroWithName(6, 'C');
        new MockApp().setService(marvelService).setFavoriteHeroIds([4, 5, 6]).render(<Favorites />);
        const user = userEvent.setup();
        const heroesList = screen.getByTestId('heroesList');
        expect(heroesList.children).toHaveLength(3);
        const search = screen.getByTestId('search');
        const nrResults = screen.getByTestId('nrResults');
        expect(nrResults.textContent).toEqual('3 Results');
        userEvent.clear(search);
        await user.type(search, 'a');
        expect(nrResults.textContent).toEqual('1 Result');
        userEvent.clear(search);
        await user.type(search, 'b');
        expect(nrResults.textContent).toEqual('2 Results');
        userEvent.clear(search);
        await user.type(search, 'c');
        expect(nrResults.textContent).toEqual('3 Results');
    });

    it('should remove a favorite after toggling it off', async () => {
        const marvelService = new MockMarvelService();
        marvelService.addHeroWithName(1, 'ABC');
        marvelService.addHeroWithName(2, 'BC');
        marvelService.addHeroWithName(3, 'C');
        new MockApp().setService(marvelService).setFavoriteHeroIds([1, 2, 3]).render(<Favorites />);
        const user = userEvent.setup();
        const heroesList = screen.getByTestId('heroesList');
        expect(heroesList.children).toHaveLength(3);
        const toggleFavs = screen.getAllByTestId('toggleFav');
        expect(toggleFavs).toHaveLength(3);
        await user.click(toggleFavs[1]);
        expect(heroesList.children).toHaveLength(2);
    });
});