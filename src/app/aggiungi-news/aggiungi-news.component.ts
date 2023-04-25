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


    constructor(private formBuilder: FormBuilder, private newsService: NewsService) {

    };//! funzione CREATA constructor




    // *opzione1 usare la classe injectable nativa di Angular "FormBuilder"
    // profileForm = this.formBuilder.group({

    //     titolo: ["", Validators.required]
    // }) 
    // *opzione1

    // *opzione2 
    laMiaForm = new FormGroup({

        titolo: new FormControl("", [Validators.required, Validators.minLength(4)]),
        descrizione: new FormControl("", [Validators.required, Validators.minLength(10)]),
        data: new FormControl("", [Validators.required]),
        home: new FormControl("1"),//! di default sarà selezionata la radio button "inHome"
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



        this.laMiaForm.setValue({//! Per pulire la form

            titolo: "",
            descrizione: "",
            data: "",
            home: "1",//! di default sarà selezionata la radio button "inHome"
            autore: ""
        })

    };//! funzionme CREATA inviaForm





};//! funzione CREATA AggiungiNewsComponent
