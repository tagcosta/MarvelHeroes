import { describe, expect, it, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import MockApp from '../__test__/MockApp';
import Main from './Main';

describe('Main', () => {
    it('should call API to fetch heroes', async () => {
        const app = new MockApp();
        app.marvelService.getHeroes = vi.fn();
        app.render(<Main />);
        await waitFor(() => {
            expect(app.marvelService.getHeroes).toHaveBeenCalled();
        });
    });
});