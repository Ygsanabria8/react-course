import { heroes } from '../data/heroes';

export const getHeroesByid = (id: string) => {
    return heroes.find((heroe) => heroe.id === id);
};
