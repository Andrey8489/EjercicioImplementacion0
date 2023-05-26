//Clase Categoria

export class Categoria {
    genero: String;
    descripcion: String;

    constructor (genero: String, descripcion: String){
        this.genero = genero;
        this.descripcion = descripcion;
    }
}

//const categoria1 = new Categoria("genero","descipcion")
//console.info (categoria1)