import { Injectable } from '@angular/core';
import { NOTIZIE } from '../models/news-dati';
import { INews } from '../models/news-interface';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    data: INews[] = NOTIZIE;


    
    constructor(private router: Router) {

    };//! funzione CREATA constructor



    prendereNews() {
        // console.log(this.data);


        return this.data;

    };//! funzione CREATA prendereNews



    aggiungereOggettoAllArray(elmentoIessimoOggetto: any) {
        // ! scrivo "any" perchè  nei campi della form non c'è l'id , altrimenti avrei sostituito "any" con "INews"

        this.data.push(elmentoIessimoOggetto);
        // ! in questo modo aggiungo all' array "data" ,l'oggetto che scrivo nella form(aggiungi news)
        // console.log(this.data.push(elmentoIessimoOggetto));//! esso mi ritorna un numero
        



    };//! funzione CREATA aggiungereOggettoAllArray





    inserireNewsNellaHome() {

        console.log(this.data);
        
        let valoreArrayFiltered = this.data.filter((elementoIessimoOggetto) => {
            return (elementoIessimoOggetto.inHome == true);
        })

        return valoreArrayFiltered;


    };//! funzione CREATA inserireNewsNellaHome


    eliminaNews(elementoIessimoOggettoEliminato: any) {
        console.log(elementoIessimoOggettoEliminato);
        
        let indiceElementoIessimoOggettoEliminato = this.data.indexOf(elementoIessimoOggettoEliminato);
        console.log(indiceElementoIessimoOggettoEliminato);
        

        if (indiceElementoIessimoOggettoEliminato > -1) {
            this.data.splice(indiceElementoIessimoOggettoEliminato, 1);
            


        }

        



    };//! funzione CREATA eliminaNews

   



};//! SERVIZIO NewsService
