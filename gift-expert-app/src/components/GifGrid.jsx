import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const { gifs, isLoading } = useFetchGifs(category);
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando ...</h2>)
            }
            <div className='card-grid'>
                {
                    gifs.map((image) => (
                        <GifGridItem 
                            key = { image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}