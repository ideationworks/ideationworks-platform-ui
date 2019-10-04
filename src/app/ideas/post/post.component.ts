import { Component, OnInit } from '@angular/core';
import * as marked           from 'marked';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: [ './post.component.scss' ]
})
export class PostComponent implements OnInit {

    compiledMarkdown: string;
    startingValue = '';

    ngOnInit() {
        this.startingValue = this.getPlaceHolder();

        this.compiledMarkdown = this.compileMarkdown(this.startingValue);
    }

    onValueChanged(value: string) {
        this.compiledMarkdown = this.compileMarkdown(value);
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

    public constructor() {


    }

}
