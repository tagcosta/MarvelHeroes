import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import MockApp from '../../../__test__/MockApp';
import Header from './Header';

describe('Header', () => {
    it('should render 0 favorites by default', () => {
        new MockApp().render(<Header />);
        expect(screen.getByTestId('nrFavorites').textContent).toContain('0');
    });

    it('should render the correct number of favorites', () => {
        const nrFavorites = 10;
        new MockApp().render(<Header nrFavorites={nrFavorites} />);
        expect(screen.getByTestId('nrFavorites').textContent).toContain(nrFavorites.toString());
    });
});