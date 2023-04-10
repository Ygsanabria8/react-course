import { Link } from 'react-router-dom'

const CharactersByActor = ({alter_ego, characters}:{alter_ego:string, characters: string}) => {
    return (alter_ego === characters)
    ? <></>
    : <p>{ characters }</p>
};


export const HeroCard = ({ hero }: { hero: any }) => {

    const heroUrl = `/assets/heroes/${hero.id}.jpg`;
    
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutter">
                    <div className="col-4">
                        <img 
                            src={ heroUrl }
                            className="card-img"
                            alt={ hero.superhero }
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ hero.superhero }</h5>
                            <p className="card-text">{ hero.alter_ego }</p>
                            <CharactersByActor
                                alter_ego={ hero.alter_ego }
                                characters={ hero.characters }
                            />
                            <p className="card-text">
                                <small className="text-muted">{ hero.first_appearance }</small>
                            </p>

                            <Link to={`/hero/${hero.id}`}>
                                Mas ...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
