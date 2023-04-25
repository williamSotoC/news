import { ICorso } from "./corso-interface";

export const CORSI: ICorso[] = [

    {
        id: 1,
        titolo: "Front end development",
        durata: 450,//! ore
        costo: 3400,//! euro
        docente: "Giovanni Giannasca",
        data_partenza: "17/10/2022",
        n_partecipanti: 38
    },
    {
        id: 2,
        titolo: "Back end development",
        durata: 450,//! ore
        costo: 3400,//! euro
        docente: "Antonio Giannasca",
        data_partenza: "17/10/2022",
        n_partecipanti: 24
    },
    {
        id: 3,
        titolo: "Full stack",
        durata: 600,
        costo: 4400,
        docente: "Matteo Valenzi",
        data_partenza: "12/10/2022",
        n_partecipanti: 41
    },



]

// console.log(CORSI[2]);
