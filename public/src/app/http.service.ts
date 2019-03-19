import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
  export class HttpService {
    constructor(private _http: HttpClient) {
      this.getPokemon();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("Got our bulbasaur info!", data));

    let pikachu = this._http.get('https://pokeapi.co/api/v2/pokemon/pikachu/');
    pikachu.subscribe(data1 => console.log("Got our pikachu info!", data1));

    let charmander = this._http.get('https://pokeapi.co/api/v2/pokemon/charmander/');
    charmander.subscribe(data2 => console.log("Got our charmander info!", data2));
  }
}



