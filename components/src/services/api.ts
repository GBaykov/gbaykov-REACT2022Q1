import { Character, Info } from '../types/api-interfacies';

export default class Api {
  URL = `https://rickandmortyapi.com/api/character/?`;

  getCharacter = async (
    name: string | null,
    status = '',
    page = '',
    gender = '',
    species = '',
    type = ''
  ) => {
    try {
      const res = await fetch(
        `${this.URL}name=${name}&status=${status}&page=${page}&gender=${gender}&species=${species}&type=${type}`
      );
      if (res.ok) {
        const character: Info<Character[]> = await res.json();
        return this.characterToResponse(character);
      } else {
        throw new Error(`Ошибка HTTP: ${res.status}`);
      }
    } catch (err) {
      throw new Error('Something went wrong while getting character');
    }
  };

  characterToResponse(chars: Info<Character[]>) {
    if (!chars || !chars.results) throw new Error();
    return chars.results;
  }
}
