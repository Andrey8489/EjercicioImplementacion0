//Serie Plan
import { Plataforma } from "./plataforma.js";

export class Plan {
    nombredelPlan: String;
    costo: Number [];
    nombreplataforma: Plataforma;

    constructor(nombredelplan: String, costo: Number [], nombreplataforma: Plataforma){
        this.nombredelPlan = nombredelplan;
        this.costo = costo;
        this.nombreplataforma = nombreplataforma;
    }
}

//const plan1 = new Plan ("NombredelPLan", [Costo del plan], "nombre del la plataforma")
//console.info (plan1)
