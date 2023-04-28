import { Component, OnInit } from '@angular/core';
import { CorsiService } from '../service/corsi.service';
import { ICorso } from '../models/corso-interface';
import { INews } from '../models/news-interface';
import { NewsService } from '../service/news.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    arrayDiOggettiCorsi: ICorso[] = [];

    arrayDiOggettiNotizie: INews[] = [];

    

    // *opzione 1 usando reactiv form
    parolaChiave = new FormControl("");
    // *opzione 1
    // *opzione 2 usando template driven form
    // modello = {
    //     titolo: ""
    // }
    // *opzione 2


    constructor(private corsiService: CorsiService, private newsService: NewsService) {


    };//! funzione CREATA constructor




    ngOnInit(): void {
        this.arrayDiOggettiCorsi = this.corsiService.prendereCorsi();

        this.arrayDiOggettiNotizie = this.newsService.inserireNewsNellaHome();




    };//! funzione CREATA ngOnInit

    rimuoviCorso(elementoIessimoOggettoCorso: any) {


        if (confirm("Sei sicuro di voler eliminare questo corso?") == true) {

            this.corsiService.eliminaCorso(elementoIessimoOggettoCorso);
            this.arrayDiOggettiCorsi = this.corsiService.prendereCorsi();
            console.log(this.arrayDiOggettiCorsi);
            
            
        }
       
        


    }


    rimuoviNews(elementoIessimoOggettoEliminato: any) {


        if (confirm("Sei sicuro di voler eliminare questa news?") == true) {
            
            this.newsService.eliminaNews(elementoIessimoOggettoEliminato);
            this.arrayDiOggettiNotizie = this.newsService.inserireNewsNellaHome();
            console.log(this.arrayDiOggettiNotizie);
            
        }
       
        


    };//! funzione CREATA rimuoviNews

    





};//! classe(componente) HomeComponent
