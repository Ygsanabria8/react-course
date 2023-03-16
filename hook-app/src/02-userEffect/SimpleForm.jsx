import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Yesid',
        email: 'yesid@hotmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    useEffect(() => {
        //console.log("Effect")
    },[]);

    useEffect(() => {
        //console.log("Email Change")
    },[formState.email]);
    

    return (
        <>
            <h1>Formulario</h1>
            <hr />
            <input 
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            {
                (username === 'Yesid S.') && <Message />
            }
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="prueba@peruba.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
        </>
    )
}
