import { CardProps } from "../Utils/Interfaces";

const Card = ({ pokemon }: CardProps): JSX.Element => {
  return (
    <div className="card" key={pokemon.id}>
      <div className="card__img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card__name">{pokemon.name}</div>
      <div className="card__types">
        {pokemon.types.map((type) => {
          return <div className="card__type">{type.type.name}</div>;
        })}
      </div>
      <div className="card__info">
        <div className="card__data card_data--weight">
          <p className="title">Weight: </p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="card__data card_data--height">
          <p className="title">Height: </p>
          <p>{pokemon.height}</p>
        </div>
        <div className="card__data card_data--ability">
          <p className="title">Ability:</p>
          <p className='ab'>{pokemon.abilities[0].ability.name}</p>
          {/* {pokemon.abilities.map((ab) => {
            return <p>{ab.ability.name}</p>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
