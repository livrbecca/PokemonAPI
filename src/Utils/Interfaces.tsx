// SmallPokemonData interface is an OBJECT
export interface SmallPokemonData {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface ResultsArray {
  name: string;
  url: string;
}

export interface FullLengthPokemonData {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
    }
  ];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    front_default: string;
  };
  stats: [];
  types: [
    {
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
}

export interface CardProps {
  pokemon: FullLengthPokemonData;
}
