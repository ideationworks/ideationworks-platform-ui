import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResetPasswordService {

    public changchang: string;

    constructor() {
    }

    public chaChing(pop: string) {

        this.changchang = pop;

        console.log(pop);

    }

}
