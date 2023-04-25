import { Injectable } from '@angular/core';
import { Utente } from '../models/utente-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoggareUtenteService {

    private isUserLoggato: boolean = false;
    //! L'account di test: username: antonio, password: Antonio1!



    constructor(private http: HttpClient) {


    };//! funzione CREATA constructor

   

    impostareTrueOFalseUtenteLoggato(valore: boolean) {
        console.log(valore);
        
        this.isUserLoggato = valore;



    };//! funzione CREATA isUtenteLoggato


    isUtenteLoggato() : boolean {
        return this.isUserLoggato;

    };//! funzione CREATA isUtenteLoggato







    URL_AUTORIZZAZIONE: string = 'http://api.labforweb.it/backend/web/index.php/1/authorize';
    
    
    autorizzazione(utente: Utente) : Observable<any> {
        console.log(utente);
        

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'

            }),
        }

        return this.http.post<any>(this.URL_AUTORIZZAZIONE, utente, httpOptions)


    };//! funzione CREATA autorizzazione





};//! servizio LoggareUtenteService
