import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockApp from '../../../__test__/MockApp';
import MockMarvelService from '../../../__test__/mockMarvelService';
import List from './List';

describe('List', () => {
    it('should render the heroes', () => {
        const nrHeroes = 10;
        const marvelService = new MockMarvelService();
        marvelService.addHeros(nrHeroes);
        new MockApp().setService(marvelService).render(<List />);
        expect(screen.getByTestId('heroesList').children).toHaveLength(nrHeroes);
    });

    it('should only render heroes that fulfil the search query', async () => {
        const marvelService = new MockMarvelService();
        marvelService.addHeroWithName(1, 'ABC');
        marvelService.addHeroWithName(2, 'BC');
        marvelService.addHeroWithName(3, 'C');
        new MockApp().setService(marvelService).render(<List />);
        const user = userEvent.setup();
        const search = screen.getByTestId('search');
        const heroesList = screen.getByTestId('heroesList');
        expect(heroesList.children).toHaveLength(3);
        userEvent.clear(search);
        await user.type(search, 'a');
        expect(heroesList.children).toHaveLength(1);
        userEvent.clear(search);
        await user.type(search, 'b');
        expect(heroesList.children).toHaveLength(2);
        userEvent.clear(search);
        await user.type(search, 'c');
        expect(heroesList.children).toHaveLength(3);
    });

    it('should show the number of results according to the search query', async () => {
        const marvelService = new MockMarvelService();
        marvelService.addHeroWithName(1, 'ABC');
        marvelService.addHeroWithName(2, 'BC');
        marvelService.addHeroWithName(3, 'C');
        new MockApp().setService(marvelService).render(<List />);
        const user = userEvent.setup();
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
});