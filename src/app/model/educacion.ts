export class Educacion {
    id?:number;
    nombreEd: string;
    periodoEd: string;
    descripcionEd: string;

    constructor(nombreEd: string, periodoEd: string, descripcionEd: string){
        this.nombreEd = nombreEd;
        this.periodoEd = periodoEd;
        this.descripcionEd = descripcionEd;
    }
}
