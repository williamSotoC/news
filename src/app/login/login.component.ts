import { Component, OnInit } from '@angular/core';

import { IUtente, Utente } from "../models/utente-interface"
import { LoggareUtenteService } from '../service/loggare-utente.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



   

    modello: Utente = new Utente("", "");

    messaggio?: string;

    messaggioDiErrore?: string;


    constructor(private loggareUtenteService: LoggareUtenteService, private router: Router) {

    };//! funzione CREATA constructor





    ngOnInit(): void { //nella fase di caricamento della pagina
        if(localStorage.getItem('token') != null){
          //se esiste l'item chiamato "token" nel localStorage significa che abbiamo fatto già l'accesso e ci siamo autenticati rilasciando alla fine una coppia chiave-valore nel localstorage
          this.router.navigate(['dashboard-news', localStorage.getItem('token')])
        }
      }








    inviaUtenteLoggato() {

        this.loggareUtenteService.autorizzazione(this.modello).subscribe({

            next: (data) => {

                console.log(data);//! esso mi ritorna un singolo oggetto.Esso lo posso vedere in POSTMAN
                //let data = {
                //     "status": 1,
                //     "data": {
                //         "authorization_code": "f3ba9327078260bd3594bffaad54901d",
                //         "expires_at": 1682351665
                //     }
                // }


                console.log(data.data.authorization_code);

                this.messaggio = `L'utente ${this.modello.username} è autenticato con il seguente Token: ${data.data.authorization_code}`;


                setTimeout(() => {


                    //! se sono arrivato qui è perchè sono autenticato, allora imposto la proprietà "isUtenteLogato" del Service a true .Per fare ciò chiamo la funzione "impostareTrueOFalseUtenteLoggato()" che si trova nel SERVIZIO "LoggareUtenteService"

                    this.loggareUtenteService.impostareTrueOFalseUtenteLoggato(true);
                    this.router.navigate(["dashboard-news", data.data.authorization_code]);

                }, 3000)


            },
            error: (error) => {


                // ! In caso di errore assegno il valore false alla proprietà "isUtenteLoggato"- Per fare ciò chiamo la funzione "impostareTrueOFalseUtenteLoggato()" che si trova nel SERVIZIO "LoggareUtenteService"
                this.loggareUtenteService.impostareTrueOFalseUtenteLoggato(false);

                console.log(error);//! esso mi ritorna un singolo oggetto.Esso lo vedo anche in POSTMAN(ma IN QUESTO CASO il risultato di postman NON coincide con il risultato della console.log)
                // HttpErrorResponse {headers: HttpHeaders, status: 400, statusText: 'Bad Request', url: 'http://api.labforweb.it/backend/web/index.php/1/authorize', ok: false, …}
                //! cioè:
                // let error = {
                //   header: HttpHeaders,
                //   status: 400,
                //   error:{
                //       "status": 0,
                //       "error_code": 400,
                //       "errors": {
                //            "code": 1,
                //            "message": "Incorrect username or password."
                //     }
                //  }
                // }

                console.log(error.error.errors.message);
                // this.messaggioDiErrore = `Si è verificato il seguente errore: ${error.error.errors.message}`,
                this.messaggioDiErrore = `Si è verificato il seguente errore: ${error.error.errors.message}`;




            },
            complete: () => {
                console.log("processo terminato")


            }





        })








    };//! funzione CREATA inviaUtenteLoggato






};//! classe(componente) LoginComponent
