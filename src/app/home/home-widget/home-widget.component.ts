import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home-widget',
    templateUrl: './home-widget.component.html',
    styleUrls: [ './home-widget.component.scss' ]
})
export class HomeWidgetComponent {

    @Input() public title: string;
    @Input() public icon: string;
    @Input() public buttonColor: string = 'primary';
    @Input() public linkText: string;
    @Input() public linkPath: string;

}
