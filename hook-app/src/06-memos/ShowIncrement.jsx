export const ShowIncrement = ({ increment }) => {

    console.log('Again :c')

    return (
        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            Incrementar
        </button>
    )
}
