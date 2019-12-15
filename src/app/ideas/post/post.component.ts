import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as marked from 'marked';
import { ToastrService } from 'ngx-toastr';
import { Pageable } from '../../../_lib/Pageable';
import { Category } from '../../category/category';
import { IdeasService } from '../ideas.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: [ './post.component.scss' ]
})
export class PostComponent implements OnInit {

    public compiledMarkdown: string;
    public startingValue = '';

    public categories: Pageable<Category>;

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('asdf', [

            Validators.minLength(2),
            Validators.maxLength(255)

        ]),

        description: new FormControl('asdf', [

            Validators.minLength(2),
            Validators.maxLength(255)

        ]),

        categories: new FormControl('', Validators.required)

    });

    public constructor(private ideasService: IdeasService,
                       private toastrService: ToastrService) {

        ideasService.categoriesGet().subscribe(pageable => this.categories = pageable);

    }

    public ngOnInit() {

        this.startingValue = this.getPlaceHolder();
        this.compiledMarkdown = this.compileMarkdown(this.startingValue);

    }

    public onValueChanged(value: string) {

        this.compiledMarkdown = this.compileMarkdown(value);

        this.formGroup.get('description').setValue(this.compiledMarkdown);

    }

    private compileMarkdown(value: string): string {
        return marked.parser(marked.lexer(value));
    }

    private getPlaceHolder() {
        return (
            '# Title \n\n' +

            '**bold**\n\n' +

            '*italic*\n\n' +

            'inline `code`\n\n' +

            '### code block\n' +
            '```\n' +
            `const foo = () => {

    return 1;

}\n` +

            '```\n\n' +

            '### unordered list\n' +
            '- item 1\n' +
            '* item 2\n\n' +

            '### orderd list\n\n' +
            '1. item a\n' +
            '2. item b'
        );
    }

    public onCreateClick(): void {

        console.log(this.formGroup.value);

        this.ideasService.ideaCreate(this.formGroup.value).subscribe(idea => {

            console.log(idea);

        });

    }

}
