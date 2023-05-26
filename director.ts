// Clase Director
import { Serie } from "./serie.js";

export class Director {
  nombre: String;
  foto: String;
  numDirectores: Number;
  seriesDirigidas: Serie;
  descripcion: String;
  

  constructor(nombre: String, foto: String, numDirectores: Number, seriesDirigidas: Serie, descripcion: String) {
    this.nombre = nombre;
    this.foto = foto;
    this.numDirectores = numDirectores;
    this.seriesDirigidas = seriesDirigidas;
    this.descripcion = descripcion;
  }
}

//const {director1} = new Director("Nombre del director", "Foto del director", Numero de series dirigidas, "Series dirigidas", "Descripcion");
//console.log (director1);