import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {

  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        count is { counter }
      </p>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
};
