import {Component} from '@angular/core';


@Component({
    selector:'app-root',
    template:`Welcome to My World`,
    styles: `
        :host{
            color:red;
        }
    
    `,
})

export class App {}