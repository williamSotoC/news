import { Component } from '@angular/core';
import { Contatti, IContatti, IRispostaServer } from '../models/contatti-interface';
import { CorsiService } from '../service/corsi.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-contatti',
    templateUrl: './contatti.component.html',
    styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

    rispostaServerOggetto?: IRispostaServer;

    //! opzione1 uso l'interfaccia "IContatti"
    // modello: IContatti = {
    //     nome: "",
    //     email: "",
    //     telefono: "",
    //     messaggio: ""
    // }
    //! opzione1




    //! opzione2 uso la classe "Contatti" e basta 
    modello = new Contatti("", "", "", "");
    //! opzione2



    //! opzione3
    // ! uso la classe "Contatti" implementando l'interfaccia "IContatti"
    //! opzione3


    constructor(private corsiService: CorsiService, private router: Router, private location: Location) {


    };//! funzione CREATA constructor




    inviareUtenteRegistratoAlServer() {
        this.corsiService.inviareUtenteRegistratoAlServer(this.modello).subscribe(

            {
                next: (data) => {
                    console.log(data);//! esso mi dovrebbe ritornare un unico oggetto cioè {"msg":"Inserimento riuscito"}
                    this.rispostaServerOggetto = data;

                    //! opzione 1 uso l'interfaccia "IContatti"
                    // this.modello = {//! per pulire la form
                    //     nome: "",
                    //     email: "",
                    //     telefono: "",
                    //     messaggio: ""
                    // }
                    //! opzione 1


                    //! opzione 2 e 3 uso la classe "Contatti" per pulire la form
                    this.modello = new Contatti("", "", "", "");
                    //! opzione 2 e 3


                    // this.router.navigate(["home"]);//! per andare alla "home" dopo aver fatto click sul button "Invia"


                },
                error: (error) => { console.log(error); },
                complete: () => console.log("processo terminato")
                
            }
        );

    };//! funzione CREATA inviareUtenteRegistratoAlServer


    tornaIndietro() {
        this.location.back();



    }; //!funzione CREATA tornaIndietro



};//! classe(componente) ContattiComponent
