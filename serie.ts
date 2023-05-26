// Clase Serie
import { Actor } from "./actor.js";
import { Director } from "./director.js";
import { Episodio } from "./episodios.js";
import { Plataforma } from "./plataforma.js";

export class Serie {
  nombre: String;
  imagen: String;
  categoria: String[];
  director: Director[];
  actor: Actor[];
  episodio: Episodio[];
  nombreplataforma: Plataforma;

  constructor(nombre: String, imagen: String, categoria: String[], director: Director[], actor: Actor[], episodio: Episodio[], nombreplataforma: Plataforma) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.categoria = categoria;
    this.director = director;
    this.actor = actor;
    this.episodio = episodio;
    this.nombreplataforma = nombreplataforma;
  }
}

//const {serie1} = new Serie("nombre", "foto", ["categorias", "..."], ["director"], ["actor"], [espisodios], "nombre de la plataforma");
//console.info(serie1);