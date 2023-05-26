//Clase Plataforma
import { Serie } from "./serie.js";
import { Plan } from "./plan.js";

export class Plataforma {
    nombrePlataforma: String;
    sitioWeb: String;
    nombreplan: Plan;
    nombreserie: Serie;
  
    constructor(nombrePlataforma: String, sitioWeb: String, nombreplan: Plan, nombreserie: Serie) {
      this.nombrePlataforma = nombrePlataforma;
      this.sitioWeb = sitioWeb;
      this.nombreplan = nombreplan;
      this.nombreserie = nombreserie;
    }
    darDetalles(): String {
      return `${this.nombrePlataforma} (${this.sitioWeb}) cuenta con los planes ${this.nombreplan} y cuneta con las sigientes series (${this.nombreserie})`
    }
  }

//const {plataforma1} = new Plataforma("Nombre", "Url", "nombre del plan" , "series");
//console.info (plataforma1);