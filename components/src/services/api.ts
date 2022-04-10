import { Character, Info } from '../types/api-interfacies';

export default class Api {
  URL = `https://rickandmortyapi.com/api/character/?`; //name=${name}&status=${status}&gender=${gender}&species=${species}&type=${type}

  getAllCharacters = async (page = 1) => {
    try {
      const res = await fetch(`${this.URL}page=${page}`);
      const body: Info<Character[]> = await res.json();
      return this.characterToResponse(body);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  getCharacter = async (
    name: string,
    status = '',
    page = 1,
    gender = '',
    species = '',
    type = ''
  ) => {
    try {
      const res = await fetch(
        `${this.URL}name=${name}&status=${status}&page=${page}&gender=${gender}&species=${species}&type=${type}`
      );
      const character: Info<Character[]> = await res.json();
      return this.characterToResponse(character);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  characterToResponse(chars: Info<Character[]>) {
    if (!chars || !chars.results) throw new Error();
    console.log(chars.results);
    return chars.results;
  }
}
