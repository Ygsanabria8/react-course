import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test for useFetchGifs()', () => {
    test('should return initial state', () => {

        // Act
        const { result } = renderHook(() => useFetchGifs('Valorant'));
        const { gifs, isLoading } = result.current;

        // Assert
        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return gifs array and isLoading false', async () => {

        // Act
        const { result } = renderHook(() => useFetchGifs('Valorant'));
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );
        const { gifs, isLoading } = result.current;

        // Assert
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});