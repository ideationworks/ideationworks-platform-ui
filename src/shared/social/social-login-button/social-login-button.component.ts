import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-social-login-button',
    templateUrl: './social-login-button.component.html',
    styleUrls: [ './social-login-button.component.scss' ]
})
export class SocialLoginButtonComponent implements OnInit {

    @Input() public type: string;

    private currentType;
    public types = [

        {

            icon: 'fab fa-google',
            label: 'Google'

        }, {

            icon: 'fab fa-facebook',
            label: 'Facebook'

        }

    ];

    public constructor() {

    }

    public ngOnInit(): void {

        this.currentType = this.types.find(type => type.label == this.type);

    }

}
