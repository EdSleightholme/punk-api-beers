
export const fetchAllBeers = async () => {
  return fetch(
    " https://api.punkapi.com/v2/beers",
    {
      method: "GET",
    }

  )
    .then((response) => response.json())
    .then((data) => {
      return data.map(beer => {return{ 
        abv: beer.abv, 
        description: beer.description, 
        food_pairing: beer.food_pairing,
        image_url:beer.image_url,
        name:beer.name,
        tagline:beer.tagline
       }})
    });
};
