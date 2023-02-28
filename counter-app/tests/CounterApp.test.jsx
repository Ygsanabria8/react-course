import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba <Counter App />', () => {

    const initialValue = 100;
    const ariaLabelCounter = 'counter-value';
    const ariaLabelButtonAdd = 'add-value';
    const ariaLabelButtonSubstract = 'substract-value';
    const ariaLabelButtonReset = 'reset-value';

    // test('should do match with snapshot', () => {

    //     // Arrange

    //     // Act
    //     render(<CounterApp  value={valueInitial} />);

    //     // Assert
    //     expect(screen.container).toMatchSnapshot();
    // });

    test('should show number counter in h4', () => {

        // Arrange

        // Act
        render(<CounterApp value={initialValue} />);

        // Assert
        expect(screen.getByRole('heading', { level: 4 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 4 }).innerHTML).toBe(initialValue.toString());
    });

    test('should show number counter', () => {

        // Arrange

        // Act
        render(<CounterApp value={initialValue} />);

        // Assert
        expect(screen.getByRole('heading', { level: 4, name: ariaLabelCounter })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 4, name: ariaLabelCounter }).innerHTML).toBe(initialValue.toString());
    });


    test('should increment counter when click in button add', () => {

        // Arrange
        const expectedValue = 101;

        // Act
        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByRole('button', { name: ariaLabelButtonAdd }));

        // Assert
        expect(screen.getByRole('heading', { level: 4, name: ariaLabelCounter }).innerHTML).toBe(expectedValue.toString());
    });

    test('should decrement counter when click in button substract', () => {

        // Arrange
        const expectedValue = 99;

        // Act
        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByRole('button', { name: ariaLabelButtonSubstract }));

        // Assert
        expect(screen.getByRole('heading', { level: 4, name: ariaLabelCounter }).innerHTML).toBe(expectedValue.toString());
    });

    test('should set counter to initial value when click in button reset', () => {

        // Act
        render(<CounterApp value={initialValue} />);

        fireEvent.click(screen.getByRole('button', { name: ariaLabelButtonSubstract }));
        fireEvent.click(screen.getByRole('button', { name: ariaLabelButtonSubstract }));
        fireEvent.click(screen.getByRole('button', { name: ariaLabelButtonSubstract }));

        fireEvent.click(screen.getByRole('button', { name: ariaLabelButtonReset }));

        // Assert
        expect(screen.getByRole('heading', { level: 4, name: ariaLabelCounter }).innerHTML).toBe(initialValue.toString());
    });

});