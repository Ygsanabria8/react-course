import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const initialValue = 0;
    const { counter, increment, decrement, reset } = useCounter(initialValue)

    return (
        <>
            <h1>Counter With Hook: { counter }</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +
            </button>
            <button
                className="btn btn-primary"
                onClick={ reset }
            >
                reset
            </button>
            <button
                className="btn btn-primary"
                onClick={ () => decrement() }
            >
                -
            </button>
        </>
    )
}
