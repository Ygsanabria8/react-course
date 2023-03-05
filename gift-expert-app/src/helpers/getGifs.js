export const getGifsRequest = async( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=m7SMHwlMWg1vniE8ahf1Xp6Ur3NUPJjP&q=${ category }&limit=5`;

    const resp = await fetch (url);
    const { data = [] } = await resp.json();
    
    return data.map((image) => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));   
}