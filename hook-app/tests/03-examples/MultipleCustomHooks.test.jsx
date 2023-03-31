import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test on MultipleCustomHook', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show the default component', () => {

        // Arramge
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        // Act
        render(<MultipleCustomHooks/>);
        const  nextButton = screen.getByRole('button', {name: 'Next Quote'});

        // Assert
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('BrakingBad Quotes'));
        expect(nextButton.disabled).toBeTruthy();
    });

    test('should show quote', () => {

        // Arrange
        useFetch.mockReturnValue({
            data: [{ author: 'Yesid', quote: 'Hello World'}],
            isLoading: false,
            hasError: null,
        });

        // Act
        render(<MultipleCustomHooks/>);
        const  nextButton = screen.getByRole('button', {name: 'Next Quote'});        

        // Assert
        expect(screen.getByText('Hello World')).toBeTruthy();
        expect(screen.getByText('Yesid')).toBeTruthy();
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should call increment', () => {

        // Arrange      
        useFetch.mockReturnValue({
            data: [{ author: 'Yesid', quote: 'Hello World'}],
            isLoading: false,
            hasError: null,
        });

        // Act
        render(<MultipleCustomHooks/>);       
        const  nextButton = screen.getByRole('button', {name: 'Next Quote'}); 
        fireEvent.click(nextButton);

        // Assert
        expect(mockIncrement).toHaveBeenCalled();
    });


});