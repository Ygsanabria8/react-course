import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Unit testing useForm', () => {

    const initialForm = {
        name: 'Yesid',
        email: 'yesid@email.com'
    };

    test('should return default data', () => {

        // Act
        const { result } = renderHook(() => useForm(initialForm));

        // Assert
        expect(result.current).toEqual({
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('should return new value of name form', () => {

        // Arrange
        const newValue = 'Giovanny';

        // Act
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue} });
        });

        // Assert
        expect(result.current.formState.name).toEqual(newValue);

    });

    test('should return initial value', () => {

        // Arrange
        const newValue = 'Giovanny';

        // Act
        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue} });
            onResetForm();
        });

        // Assert
        expect(formState.name).toEqual(initialForm.name);

    });
});