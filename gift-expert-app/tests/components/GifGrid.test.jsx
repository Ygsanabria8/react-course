import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests for <GifGrid />', () => {

    const category = 'Valorant';

    test('should show loading initially', () => {

        // Arrange
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoagin: true,
        });

        // Act
        render(<GifGrid category={ category }/>)

        // Assert
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    });

    test('should show items when images are loading from useFetchGifs', () => {

        // Arrange
        const gifs = [
            { id: 'ABC', title: 'Valorant', url:'https://hola.com'},
            { id: 'ABCD', title: 'Pokemon', url:'https://pokemon.com'}
        ];
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoagin: false,
        });
        
        // Act
        render(<GifGrid category={ category }/>)

        // Assert
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});