import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

  const [ counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
        <h1> Contador </h1>
        <h4 aria-label="counter-value">{ counter }</h4>
        <div>
          <button
            aria-label="add-value"
            onClick={ handleAdd }
          >
            +
          </button>
          <button
            aria-label="reset-value"
            onClick={ handleReset }
          >
            Reset
          </button>
          <button
            aria-label="substract-value"
            onClick={ handleSubstract }
          >
            -
          </button>
        </div>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
