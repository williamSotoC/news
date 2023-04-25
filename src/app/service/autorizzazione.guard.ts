import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggareUtenteService } from './loggare-utente.service';

@Injectable({
    providedIn: 'root'
})
export class AutorizzazioneGuard implements CanActivate {


    constructor(private loggareUtenteService: LoggareUtenteService, private router: Router) {


    };//! funzione CREATA constructor



    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

            let valoreRitornato = this.loggareUtenteService.isUtenteLoggato();
            console.log(valoreRitornato);//! esso mi ritorna o true o false

            if (valoreRitornato == true) {
                console.log("rotta permessa")
                return true;
            }
            else {
                console.log("rotta NON permessa")
                this.router.navigate(["login"]);
                return false;
            }
            
            
            

           


            
    }

}
