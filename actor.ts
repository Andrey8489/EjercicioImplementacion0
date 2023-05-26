// Clase Actor
import { Serie } from "./serie.js";

export class Actor {
  nombre: String;
  foto: String;
  numActores: Number;
  seriesActuadas: Serie;
  descripcion: String;

  constructor(nombre: String, foto: String, numActores: Number, seriesActuadas: Serie, descripcion: String) {
    this.nombre = nombre;
    this.foto = foto;
    this.numActores = numActores;
    this.seriesActuadas = seriesActuadas;
    this.descripcion = descripcion;

  }
}

//const {actor1} = new Actor("Nombre del actor", "Foto del actor", Numero del actores, "Series actuadas", "Descripcion");
//console.log (actor1);
