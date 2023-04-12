import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Tests on SerachPage', () => {

    beforeEach(() => jest.clearAllMocks());

    test('should show correctly with default values', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('should show batman and input with querystring value', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        const image = screen.getByRole('img');
        const alertDanger = screen.getByLabelText('alert-danger');

        expect(input.value).toBe('batman');
        expect(image.src).toContain('/assets/heroes/dc-batman.jpg');
        expect(alertDanger.style.display).toBe('none');

    });

    test('should show an error if do not find a hero', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batmanasd']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const alertDanger = screen.getByLabelText('alert-danger');

        expect(alertDanger.style.display).toBe('');
    });

    test('should call navigate to new screen', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batmanasd']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } });
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
        
    });
});