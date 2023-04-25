import { Component, OnInit } from '@angular/core';
import { CorsiService } from '../service/corsi.service';
import { ICorso } from '../models/corso-interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit   {

    arrayDiOggettiCorsi: ICorso[] = [];

    
    constructor(private corsiService: CorsiService ) {


    };//! funzione CREATA constructor




    ngOnInit(): void {
        this.arrayDiOggettiCorsi = this.corsiService.prendereCorsi();
        



    };//! funzione CREATA ngOnInit





};//! classe(componente) HomeComponent
