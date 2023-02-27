import { CounterApp } from './CounterApp';

export const App = () => {

    let counter = 10;

    return (
        <>
            <CounterApp value={counter}/>
        </>
    )
}