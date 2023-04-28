import { Pipe, PipeTransform } from '@angular/core';
import { INews } from '../models/news-interface';

@Pipe({
    name: 'filtrareNews'
})
export class FiltrareNewsPipe implements PipeTransform {

    transform(arrayDiOggettiValueCheDevoFiltrare: INews[], ...args: string[]): INews[] {

        let parolaChiave = args[0].toLowerCase();//! in questo modo prendo l'elemento dell'array "args" che ha indice ZERO e lo trasformo a lowerCase(lettera minuscola)


        let valoreArrayFiltered = arrayDiOggettiValueCheDevoFiltrare.filter((elmentoIessimoOggetto) => {

            let valoreDiProprietaTitolo = elmentoIessimoOggetto.titolo.toLowerCase();
            let valoreDiProprietaAutore = elmentoIessimoOggetto.autore.toLowerCase();
            let valoreDiProprietaDescrizione = elmentoIessimoOggetto.descrizione.toLowerCase();


            return (valoreDiProprietaTitolo.includes(parolaChiave) == true || valoreDiProprietaAutore.includes(parolaChiave) == true || valoreDiProprietaDescrizione.includes(parolaChiave) == true);
            // ! includes funziona solo con le stringhe
            // ! valoreDiProprietaTitolo.includes(parolaChiave) .ESSO vuoledire se il valore di nome di proprietà titolo COINCIDE con il parametro della pipe(cioè con quello che scrivo nel campo del input type=text) allora il metodo include mi ritorna true altrimenti mi ritorna false
            // ! e se true == true allora avrò "valoreArrayFiltered"
        })

        return valoreArrayFiltered;




        
    }

}
