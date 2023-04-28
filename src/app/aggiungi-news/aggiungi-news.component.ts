import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../service/news.service';

@Component({
    selector: 'app-aggiungi-news',
    templateUrl: './aggiungi-news.component.html',
    styleUrls: ['./aggiungi-news.component.css']
})
export class AggiungiNewsComponent {

    messaggio?: string;

    tuttiGliErrori?: any;


    constructor(private formBuilder: FormBuilder, private newsService: NewsService) {





    };//! funzione CREATA constructor




    // *opzione1 usando la classe injectable nativa di Angular "FormBuilder"
    // profileForm = this.formBuilder.group({

    //     titolo: ["", Validators.required]
    // }) 
    // *opzione1

    // *opzione2 
    laMiaForm = new FormGroup({

        titolo: new FormControl("", [Validators.required, Validators.minLength(4)]),
        descrizione: new FormControl("", [Validators.required, Validators.minLength(10)]),
        data: new FormControl("", [Validators.required]),
        inHome: new FormControl(true),//! di default sarà selezionata la radio button "inHome"
        autore: new FormControl("", [Validators.required, Validators.pattern(/^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/)]),
    })
    // *opzione2



    inviaForm() {

        console.log(this.laMiaForm.value);//! esso mi ritorna un' oggetto
        console.log(this.laMiaForm.get("titolo")!.value);//! esso mi ritorna il valore di nome di proprieta "titolo"
        console.log(this.laMiaForm.valid);//! esso mi ritorna true se la form complessiva è valida altrimenti mi ritorna false



        this.newsService.aggiungereOggettoAllArray(this.laMiaForm.value)//! Per aggiungere un elemento(oggetto) all'array:  data INews[]



        if (this.laMiaForm.valid == true) {//! per scrivere il messaggio che la notizia è stata aggiunta  con successo all'array: data INews[]
            this.messaggio = "Notizia aggiunta con successo";

        }

        if (this.laMiaForm.valid == true) {

            this.laMiaForm.setValue({//! Per pulire la form

                titolo: "",
                descrizione: "",
                data: "",
                inHome: true,//! di default sarà selezionata la radio button "inHome"
                autore: ""
            })
            
        }

        

    };//! funzionme CREATA inviaForm


    // !se il button è SEMPRE abilitato,e se faccio click viene eseguita tale funzione
    invia() {


        if (this.laMiaForm.invalid == true) {
            // todo   SE l'intero form è invalido allora mi costruisco un'oggetto con TUTTI GLI ERRORI
            this.tuttiGliErrori = {};//! assegno un oggetto vuoto alla proprietà "tuttiGliErrori" e dentro tale oggetto ci mettero delle proprieta legati ai campi della form EX titolo
            // ! ATTENZIONE tali "if" vengono eseguite in sequenza:"if else if"(in questo caso viene eseguito o "if" o "else if") è DIVERSO da" if if"(in questo caso viene eseguite entrambe le "if" in sequenza)

            if (this.laMiaForm.get("titolo")!.errors?.["required"] == true) {//! cioè se c'è l'errore di tipo required legato alla chiave "titolo"
                this.tuttiGliErrori.Titolo = "Non hai inserito il titolo";
                console.log(this.tuttiGliErrori);


            }
            
            if (this.laMiaForm.get("data")!.errors?.["required"] == true) {
                this.tuttiGliErrori.Data = "Non hai inserito la data";

                console.log(this.tuttiGliErrori);


            }
            if (this.laMiaForm.get("autore")!.errors?.["required"] == true) {
                this.tuttiGliErrori.Autore = "Non hai inserito l'autore";
                console.log(this.tuttiGliErrori);


            }
            if (this.laMiaForm.get("descrizione")!.errors?.["required"] == true) {
                this.tuttiGliErrori.descrizione = "Non hai inserito la descrizione";
                console.log(this.tuttiGliErrori);


            }
        }
        else {
            this.tuttiGliErrori = {}

        }



    };//! funzionme CREATA invia





};//! funzione CREATA AggiungiNewsComponent
