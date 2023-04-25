import { Injectable } from '@angular/core';
import { NOTIZIE } from '../models/news-dati';
import { INews } from '../models/news-interface';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    data: INews[] = NOTIZIE;


    
    constructor() {

    };//! funzione CREATA constructor



    prendereNews() {
        console.log(this.data);


        return this.data;

    };//! funzione CREATA prendereNews



    aggiungereOggettoAllArray(elmentoIessimoOggetto: any) {
        // ! scrivo "any" perchè  nei campi della form non c'è l'id , altrimenti avrei sostituito "any" con "INews"

        this.data.push(elmentoIessimoOggetto);
        // ! in questo modo aggiungo all' array "data" ,l'oggetto che scrivo nella form(aggiungi news)



    };//! funzione CREATA aggiungereOggettoAllArray




};//! SERVIZIO NewsService
