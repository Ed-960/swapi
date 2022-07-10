export default class SwapiService {
   _api = 'https://swapi.dev/api';

   async getResource(url) {
      const res = await fetch(`${this._api}${url}`);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, res status ${res.status}`);
      }

      return await res.json();
   }
   async getAllPeople(id = 1) {
      const res = await this.getResource(`/people/?page=${id}`);
      return res.results;
   }

   async getPeople(id) {
      return await this.getResource(`/people/${id}`);
   }

   async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
   }

   async getPlanet(id) {
      return await this.getResource(`/planets/${id}`);
   }
}