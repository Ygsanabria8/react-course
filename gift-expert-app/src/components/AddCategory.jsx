import { useState } from 'react';

export const AddCategory = ({ onValue }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSumbit = (event) => {
        event.preventDefault();
        
        if (inputValue.length <= 1) { return; }

        setinputValue('');
        onValue(inputValue);
    }

    return (
        <form onSubmit={ onSumbit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
