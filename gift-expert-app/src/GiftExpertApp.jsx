import { useState } from "react";

import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        const valueExists = categories.find((value) => value.toUpperCase() === newCategory.toUpperCase());
        if (valueExists) { return; }

        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExpert App</h1>
            <AddCategory 
                onValue={ onAddCategory } 
            />
            { 
                categories.map(category => ( 
                    <GifGrid key={ category } category={ category } /> 
                ))
            }
        </>
    );
}