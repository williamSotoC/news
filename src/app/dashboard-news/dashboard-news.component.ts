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

    parolaChiave = new FormControl("");



    myParam: any //!esso è il token


    constructor(private route: ActivatedRoute, private router: Router, private newsService: NewsService) {



    };//! funzione CREATA constructor



    //!  al caricamento della pagina scrivo nel localStorage il token in modo da poter navigare tra le funzionalità della "dashboard-news"
    ngOnInit(): void {


        this.arrayDiOggettiNotizie = this.newsService.prendereNews();



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


    // prendereNews() {
    //     this.arrayDiOggettiNotizie = this.newsService.prendereNews();



    // };//! funzione CREATA prendereNews

};//! classe(componente) DashboardNewsComponent
