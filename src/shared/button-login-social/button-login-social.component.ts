import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-button-login-social',
    templateUrl: './button-login-social.component.html',
    styleUrls: ['./button-login-social.component.scss']
})
export class ButtonLoginSocialComponent implements OnInit {

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
