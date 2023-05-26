// Clase Episodio
import { Director } from "./director.js";
import { Serie } from "./serie.js";

export class Episodio {
    nombre_episodio: String;
    duracionEpisodio: Number;
    numEpisodio: Number;
    nombredirector: Director;
    serie: Serie[];

  
    constructor(nombre_episodio: String, duracionEpisodio: Number, numEpisodio: Number, nombredirector: Director, serie: Serie []) {
      this.nombre_episodio = nombre_episodio;
      this.duracionEpisodio = duracionEpisodio;
      this.numEpisodio = numEpisodio;
      this.nombredirector = nombredirector;
      this.serie = serie;
    }
  }

  //const director1 = new Director("Nombre del director"); 
  //const serie1 = new Serie("Nombre de la serie");
  //const episodio1 = new Episodio("Nombre del episodio", Duracion del episodio, numero de episodios, Nombre del director, [serie]);


  //console.info (episodio1);