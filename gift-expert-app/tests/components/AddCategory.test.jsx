import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

describe('Tests for <AddCategory />', () => {

    const inputValue = 'Valorant';

    test('should change input value', () => {

        // Arrange
        render(<AddCategory onValue={ () => {} }/>);
        const inputReference = screen.getByRole('textbox');

        // Act
        fireEvent.input(inputReference, {
            target: { value: inputValue} 
        });

        // Assert
        expect(inputReference.value).toBe(inputValue);
    });

    test('should call onValue if input value has a value', () => {

        // Arrange
        const onValue = jest.fn();
        render(<AddCategory onValue={ onValue }/>);
        const inputReference = screen.getByRole('textbox');
        const formReference = screen.getByRole('form');

        // Act
        fireEvent.input(inputReference, {
            target: { value: inputValue}
        });

        fireEvent.submit(formReference);

        // Assert
        expect(inputReference.value).toBe('');
        expect(onValue).toHaveBeenCalled();
        expect(onValue).toHaveBeenCalledTimes(1);
        expect(onValue).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onValue if input value is empty', () => {

        // Arrange
        const onValue = jest.fn();
        render(<AddCategory onValue={ onValue }/>);
        const formReference = screen.getByRole('form');

        // Act
        fireEvent.submit(formReference);

        // Assert
        expect(onValue).toHaveBeenCalledTimes(0);
    });
});