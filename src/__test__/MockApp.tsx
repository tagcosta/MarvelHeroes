import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export default class MockApp {
    render(children: ReactNode) {
        render(
            <MemoryRouter initialEntries={['/']}>
                {children}
            </MemoryRouter>
        );
        return this;
    }
}