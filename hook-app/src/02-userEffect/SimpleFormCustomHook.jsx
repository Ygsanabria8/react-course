import { useForm } from "../hooks/useForm";

export const SimpleFormCustomHook = () => {

    const { formState, onInputChange, onResetFormt } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const {username, email, password} = formState;

    return (
        <>
            <h1>Formulario Custom Hook</h1>
            <hr />
            <input 
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="prueba@peruba.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onResetFormt }
            >
                Borrar
            </button>
        </>
    )
}
