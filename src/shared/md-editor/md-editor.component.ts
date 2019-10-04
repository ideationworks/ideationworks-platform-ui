import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-md-editor',
    template: `

        <div id="editor">

            <textarea [placeholder]="placeHolder" (keyup)="onValueChange($event)"></textarea>
            <div [innerHtml]="compiled"></div>

        </div>

    `,
    styleUrls: [ './md-editor.component.scss' ]
})
export class MdEditorComponent {

    @Input() public compiled: string;
    @Input() public placeHolder: string;

    @Output() public valueChanged = new EventEmitter<string>();

    private onValueChange(e) {

        const body = e.target.value;

        if (!body) {
            // reset to initial state
            return this.valueChanged.emit(this.placeHolder);

        } else {

            this.valueChanged.emit(body);

        }

    }
    
}
