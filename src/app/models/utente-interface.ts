export interface IUtente {

    username: string;
    password: string;
}

export class Utente implements IUtente {

    username: string;//! se non scrivo esso mi da errore
    password: string;//! se non scrivo esso mi da errore

    constructor(_username: string, _password: string) {

        this.username = _username,
        this.password = _password;
    }
}

