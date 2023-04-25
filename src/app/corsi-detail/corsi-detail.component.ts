import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CorsiService } from '../service/corsi.service';
import { ICorso } from '../models/corso-interface';
import { of, switchMap } from 'rxjs';
import { Location } from '@angular/common';

@Component({
    selector: 'app-corsi-detail',
    templateUrl: './corsi-detail.component.html',
    styleUrls: ['./corsi-detail.component.css']
})
export class CorsiDetailComponent implements OnInit {

    elementoIessimoOggettoCorso?: ICorso;


    constructor(private route: ActivatedRoute, private corsiService: CorsiService, private location: Location) {


    };//! funzione CREATA constructor



    valoreDelSegnaPosto: string = "";



    // !opzione1 PIU' moderno..Esso è il metodo piu usato

    sub: any
    // ngOnInit(): void {

    //     this.sub = this.route.params.subscribe(
    //         (params) => {
    //             console.log(params["id"]);

    //             this.valoreDelSegnaPosto = params["id"];
    //     })

    //     console.log(this.sub);//! esso mi ritorna un'oggetto chiamato "SafeSubscriber "


    //     this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);
    //     console.log(this.elementoIessimoOggettoCorso);



    // };//! funzione CREATA ngOnInit
    // !opzione1

    tornaIndietro() {
        this.location.back();



    }; //!funzione CREATA tornaIndietro





    //! opzione2 usando l'oggetto snapshot
    // ngOnInit(): void {

    //     this.valoreDelSegnaPosto = this.route.snapshot.params["id"];

    //     this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);


    // };//! funzione CREATA ngOnInit
    //! opzione2






    //! opzione3 usando il metodo get
    messagioDiErrore?: string;

    // ngOnInit(): void {

    //     // *opzione1
    //     // const valoreSegnaposto = this.route.snapshot.paramMap.get("id");
    //     // this.valoreDelSegnaPosto = valoreSegnaposto!;
    //     // *opzione1


    //     // *opzione2
    //     const valoreSegnaposto = this.route.snapshot.paramMap.get("id");
    //     if (valoreSegnaposto != null) {
    //         this.valoreDelSegnaPosto = valoreSegnaposto;//! quindi verrà mostrato il corso

    //         this.messagioDiErrore = undefined;//! quindi non verrà mostrato il messaggio di errore 

    //     }
    //     else if (valoreSegnaposto == null) {
    //         this.messagioDiErrore = "Parametro id non trovato";//! quindi verrà mostrato il messaggio di errore
    //         this.elementoIessimoOggettoCorso = undefined;//! quindi non verrà mostrato il corso


    //     }
    //     // *opzione2



    //     this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);


    // };//! funzione CREATA ngOnInit
    //! opzione3





    //! opzione4 usando la pipe e of
    // ! tale metodo di solito viene usato per le applicazioni piu grosse
    // ngOnInit(): void {

    //     this.route.paramMap.pipe(
    // ! "paramMap" serve per prendere il valore del segnaposto
    //         // !  "this.route.paramMap.pipe" mi ritorna un "Observable" con generix "<string | null>"  per cui per PRENDERE il valore di tale "Observable" devo per forza usare il metodo "subscribe()"
    //         switchMap((params: ParamMap) =>
    //         // !  "switchMap" è un operatore della pipe e l' importiamo dalla libreia "rxjs"
    // ! "switchMap" serve eliminare tutte chiamate precedenti
    // ! "paramMap" e "switchMap" sono due Observebol  e sono chimate uno dopo altro e si usa la paip per poter collegare queste due obsevebol

    //         // ! "ParamMap" è un'interface nativa di Angular
    //             of(params.get('id'))
    // ! "of" è uno operatore(cioè una funzione) della libreria rxjs che permette di EMETTERE i valori che scrivo dentro le tonde di "of"
    // ! "of" ci permette di intercettare una serie di dati EMESSI
    //             // ! "of" l' importiamo dalla libreia "rxjs"
    //         )
    //     ).subscribe(d => {

    //         console.log(d);//! in questo caso esso mi ritorna un numero di tipo "string"

    //         this.valoreDelSegnaPosto = d!;//! uso il punto esclamativo (!) per dire al browser che il valore di tale "Observable" sarà SEMPRE diverso da null

    //     });



    //     this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);


    // };//! funzione CREATA ngOnInit
    //! opzione4
    //! opzione5 usando async
    ngOnInit(): void {
        this.route.paramMap
            .pipe(switchMap(async param => param.get('id')))
            // ! "async" mi permette di prendere la risposta solo ed esclussivamente dell'ultima CHIAMATA 
            // ! "async" è un parametro che mi dice che la chiamata sarà asincrona e che io devo aspettare che la risposta arrivi
            .subscribe(
                {
                    next: (ris) => {
                        this.valoreDelSegnaPosto = ris!;
                        console.log(this.valoreDelSegnaPosto);


                        // ! se uso async devo per forza scrivere la seguente istruzine proprio dentro le GRAFFE di next altrimenti non funziona
                        this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);
                        console.log(this.elementoIessimoOggettoCorso);
                    }



                })



        // ! se scrivo esso fuori dalle graffe di subscribe , esso NON funziona proprio perche sto usando async
        // this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);
        // console.log(this.elementoIessimoOggettoCorso);






    }
    //! opzione5







};//! classe(componente) CorsiDetailComponent



