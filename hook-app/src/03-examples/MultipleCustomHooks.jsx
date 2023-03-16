import { useFetch, useCounter } from "../hooks"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={ author } quote={ quote }/>
            }

            <button
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }
            >
                Next Quote
            </button>         
        </>
    )
}
