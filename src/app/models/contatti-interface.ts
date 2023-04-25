//! opzione1 uso l'interfaccia "IContatti"
export interface IContatti {

    nome: string;
    email: string;
    telefono: string;
    messaggio: string;
}
//! opzione1



//! opzione2 uso la classe "Contatti" e basta
// export class Contatti {
//     nome: string;
//     email: string;
//     telefono: string;
//     messaggio: string;

//     constructor(_nome: string, _email: string, _telefono: string, _messaggio: string) {
//         this.nome = _nome;
//         this.email = _email;
//         this.telefono = _telefono;
//         this.messaggio = _messaggio;
//     }

// }
//! opzione2



//! opzione3 uso la classe "Contatti" implementando l'interfaccia "IContatti"
export class Contatti implements IContatti{
    nome: string;
    email: string;
    telefono: string;
    messaggio: string;

    constructor(_nome: string, _email: string, _telefono: string, _messaggio: string) {
        this.nome = _nome;
        this.email = _email;
        this.telefono = _telefono;
        this.messaggio = _messaggio;
    }

}
//! opzione3 


export interface IRispostaServer {
    msg: string;
}
