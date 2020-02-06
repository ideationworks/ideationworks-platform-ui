import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public constructor(private httpClient: HttpClient) {
    }

    public resetSend(emailAddress: string) {

        this.httpClient.post('http://localhost:3000/users/reset/send?email=' + emailAddress, {}).subscribe(result => {

            console.log(result);

        })

    }

    public login(email: string, password: string) {

    }


}
