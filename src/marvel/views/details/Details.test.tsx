/* eslint-disable  @typescript-eslint/no-explicit-any */

import { describe, expect, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import MockApp from '../../../__test__/MockApp';
import Details from './Details';
import MockMarvelService from '../../../__test__/mockMarvelService';

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return { ...actual as any, useParams: () => ({ id: '1' }) };
});

describe('Details', () => {
    it('should render not found if there are no details', () => {
        new MockApp().render(<Details />);
        expect(screen.queryByText('Not Found!')).toBeTruthy();
    });

    it('should call API to fetch comics', async () => {
        const app = new MockApp();
        app.marvelService.addHeros(1);
        app.marvelService.getComics = vi.fn(async () => []);
        app.render(<Details />);
        await waitFor(() => {
            expect(app.marvelService.getComics).toHaveBeenCalled();
        });
    });

    it('should render comics', async () => {
        const nrComics = 3;
        const marvelService = new MockMarvelService();
        marvelService.addHeros(1);
        marvelService.addComics(nrComics);
        new MockApp().setService(marvelService).render(<Details />);
        await waitFor(() => {
            const comicsList = screen.getByTestId('comicsList');
            expect(comicsList.children).toHaveLength(nrComics);
        });
    });
});