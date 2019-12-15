import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: [ './about.component.scss' ]
})
export class AboutComponent {

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('', Validators.required),
        email: new FormControl('', [

            Validators.required,
            Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)

        ]),
        message: new FormControl('', [

            Validators.minLength(8)

        ])

    });

    public onSubmitClick() {

        console.log(this.formGroup.value);
        console.log(this.formGroup.valid);

    }

}
