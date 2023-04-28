import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../service/news.service';
import { INews } from '../models/news-interface';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-dashboard-news',
    templateUrl: './dashboard-news.component.html',
    styleUrls: ['./dashboard-news.component.css']
})
export class DashboardNewsComponent implements OnInit {

    arrayDiOggettiNotizie: INews[] = [];

    // *opzione 1 usando reactiv form
    parolaChiave = new FormControl("");
    // *opzione 1
    // *opzione 2 usando template driven form
    // modello = {
    //     titolo: ""
    // }
    // *opzione 2
    



    myParam: any //!esso è il token


    constructor(private route: ActivatedRoute, private router: Router, private newsService: NewsService) {



    };//! funzione CREATA constructor



    //!  al caricamento della pagina scrivo nel localStorage il token in modo da poter navigare tra le funzionalità della "dashboard-news"
    ngOnInit(): void {


        this.arrayDiOggettiNotizie = this.newsService.prendereNews();
        console.log(this.arrayDiOggettiNotizie);
        



        this.myParam = this.route.snapshot.params['token'] //! utilizzo la proprietà snapshot del Service ActivatedRoute
        console.log(this.myParam)//! esso mi ritorna il token che ho  preso dal segnaposto "token"



        if (this.myParam != null) {//! cioè se c'è il token nel segnaposto "token" allora tale token lo inserisco nel "localStorage"

            //!  tale token lo inserisco nel "localStorage" del browser
            localStorage.setItem('token', this.myParam)

        }
    }//! funzione CREATA ngOnInit

   


    logout() {

        if (confirm("Sei sicuro?") == true) {


            if (localStorage.getItem('token') != null) {
                // ! cioè se c'è il token nel "localStorage" allora RIMUOVI tale token dal "localStorage"

                localStorage.removeItem("token")
                // ! e poi indirizzami nel login
                this.router.navigate(['login'])
            }
            else {
                this.router.navigate(['not-found'])
            }
        }

    };//! funzione CREATA logout


    rimuoviNews(elementoIessimoOggettoEliminato: any) {


        if (confirm("Sei sicuro di eliminate questa news?") == true) {
            this.newsService.eliminaNews(elementoIessimoOggettoEliminato);

            this.arrayDiOggettiNotizie = this.newsService.prendereNews();
            console.log(this.arrayDiOggettiNotizie);
    
    
    
    
    
    
    
    
    
    
            this.myParam = this.route.snapshot.params['token'] //! utilizzo la proprietà snapshot del Service ActivatedRoute
            console.log(this.myParam)//! esso mi ritorna il token che ho  preso dal segnaposto "token"
    
            this.router.navigate(["news"]);
            setTimeout(() => {
            this.router.navigate(["dashboard-news", this.myParam]);
    
    
            },10)
    
            
        }
       








        // this.arrayDiOggettiNotizie.push(
        // {
        //     id: 55,
        //     titolo: "imparare",
        //     descrizione: "Dopo il test fallito Elon Musk si è congratulato coi suoi, affermando che oggi SpaceX ha «imparato» un sacco, e questa è effettivamente la filosofia di Musk, lontana mille miglia da quella delle agenzie aerospaziali",
        //     data: "2023-04-24",
        //     inHome: true,
        //     autore: "wiliam"
        // }
        // )

        // console.log(this.arrayDiOggettiNotizie);
        
        



    };//! funzione CREATA rimuoviNews





   

};//! classe(componente) DashboardNewsComponent
