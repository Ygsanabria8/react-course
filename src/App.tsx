import Counter from './Counter';

const App = () =>{

    let counter = 10;

    return (
        <>
            <h1>Counter App</h1>
           <Counter counter={counter} /> 
        </>
    );
};

export default App;