import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Unit testing useCounter', () => {

    test('should return default data', () => {

        // Act
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        
        // Assert
        expect(counter).toBe(1);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('should return counter with 100 value', () => {

        // Arrange
        const initialValue = 100;

        // Act
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;
        
        // Assert
        expect(counter).toBe(initialValue);

    });

    test('should increment value by default value', () => {

        // Act
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => {
            increment();
        });
        
        // Assert
        expect(result.current.counter).toBe(2);

    });
    
    test('should increment value by 2', () => {

        // Act
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => {
            increment(2);
        });
        
        // Assert
        expect(result.current.counter).toBe(3);

    });

    test('should decrement value by default value', () => {

        // Act
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act(() => {
            decrement();
        });
        
        // Assert
        expect(result.current.counter).toBe(0);

    });
    
    test('should decrement value by 2', () => {

        // Arrange
        const initialValue = 100;

        // Act
        const { result } = renderHook(() => useCounter(initialValue));
        const { decrement } = result.current;

        act(() => {
            decrement(2);
        });
        
        // Assert
        expect(result.current.counter).toBe(98);

    });

    test('should reset value by default', () => {

        // Act
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        });
        
        // Assert
        expect(result.current.counter).toBe(1);

    });

    test('should reset value 100', () => {

        // Arrange
        const initialValue = 100;

        // Act
        const { result } = renderHook(() => useCounter(initialValue));
        const { decrement, reset } = result.current;

        act(() => {
            decrement(2);
            reset();
        });
        
        // Assert
        expect(result.current.counter).toBe(initialValue);

    });
});