import './styles.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardPoke from './CardPoke';
import Searchbar from './searchbar';

interface HandlePokeTypeInterface {
  name: string
  image: string
}

interface PokeProps {
  name: string
  image: string
  apiTypes: HandlePokeTypeInterface[]
}

// API pokemon : https://pokebuildapi.fr/api/v1
function Exo4() {
  const [textToSearch, setTextToSearch] = useState('');

  const handleSubmitSearch = (searchText: string) => {
    // Lorsque le formulaire est soumis, je vais appeler mon API avec axios
    // en lui passant la valeur de la recherche
    setTextToSearch(searchText);
    // setPageNumber(1);
  };

  const [pokemons, setPokemons] = useState<PokeProps[]>([]);
  /*
  const getPokemon = async () => {
    try {
      const response = await axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/10');
      if (response.status !== 200) {
        throw new Error();
      }

      setPokemons(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getPokemon(); }, []);
*/

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/10');
        if (response.status !== 200) {
          throw new Error();
        }

        setPokemons(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getPokemonType = async () => {
      if (!textToSearch) { /* return; */ getPokemon(); }
      try {
        const response = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/type/${textToSearch}`);
        if (response.status !== 200) {
          throw new Error();
        }
        setPokemons(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemonType();
  }, [textToSearch]);

  return (
    <div className="exercice">
      <h2>
        Exo4 : [Pokedex] - Afficher les 10 premiers pokemons sous forme de carte,
        avec axios et api puis, mettre en place une recherche par type :
      </h2>
      <Searchbar onSubmitSearch={handleSubmitSearch} />
      <div className="pokedex">
        {pokemons.map((pokemon) => <CardPoke key={pokemon.name} pokemon={pokemon} />)}
      </div>
    </div>
  );
}

export default Exo4;
