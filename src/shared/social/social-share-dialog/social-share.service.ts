import { Injectable }     from '@angular/core';
import { SocialProvider } from '../social-provider';

@Injectable({
    providedIn: 'root'
})
export class SocialShareService {

    public icon: SocialProvider;
    public message: string;

}
