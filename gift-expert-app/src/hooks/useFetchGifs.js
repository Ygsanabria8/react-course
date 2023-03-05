import { useEffect, useState } from 'react';

import { getGifsRequest } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifs = async () => {
        const gifs = await getGifsRequest(category);
        setGifs(gifs);
        setIsLoading(false);
    }; 

    useEffect(() => {
        getGifs();
    }, [])

    return {
        gifs,
        isLoading,
    }

}
