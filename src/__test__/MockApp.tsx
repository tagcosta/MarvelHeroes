import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MockMarvelService from './mockMarvelService';
import { MockHeroesProvider } from './MockHeroesProvider';

export default class MockApp {

    marvelService: MockMarvelService;
    favoriteHeroIds: number[];

    constructor() {
        this.marvelService = new MockMarvelService();
        this.favoriteHeroIds = [];
    }

    setService(marvelService: MockMarvelService) {
        this.marvelService = marvelService;
        return this;
    }

    setFavoriteHeroIds(favoriteHeroIds: number[]) {
        this.favoriteHeroIds = favoriteHeroIds;
        return this;
    }

    render(children: ReactNode) {
        render(
            <MockHeroesProvider
                marvelService={this.marvelService}
                initialHeroes={this.marvelService.heroes}
                initialFavoriteHeroIds={this.favoriteHeroIds}
            >
                <MemoryRouter initialEntries={['/']}>
                    {children}
                </MemoryRouter>
            </MockHeroesProvider>
        );
        return this;
    }
}