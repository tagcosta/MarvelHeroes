import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MockMarvelService from './mockMarvelService';
import { MockHeroesProvider } from './MockHeroesProvider';

export default class MockApp {

    marvelService: MockMarvelService;

    constructor() {
        this.marvelService = new MockMarvelService();
    }

    setService(marvelService: MockMarvelService) {
        this.marvelService = marvelService;
        return this;
    }

    render(children: ReactNode) {
        render(
            <MockHeroesProvider
                marvelService={this.marvelService}
                initialHeroes={this.marvelService.heroes}
            >
                <MemoryRouter initialEntries={['/']}>
                    {children}
                </MemoryRouter>
            </MockHeroesProvider>
        );
        return this;
    }
}