import {Component} from '@angular/core'

@Component({
    selector:'app-root',
    template:`
        @for(user of users;track user.id){
            <p>{{user.name}} </p>
        }    
    ` ,
})
export class App{
    users = [
    {id:0,name:'Dilnaz'},
    {id:1,name:'Merei'},
    {id:2,name:'Aldiyar'},
    {id:3,name:'Malika'}
    ]
}