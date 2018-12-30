import { Component } from "../../../node_modules/@angular/core";
import { AuthenticationComponent } from '../auth/authentication.component';

@Component({
selector:"app-messages",
template:
`
 <div class='col-md-8 col-md-offset-2'>
            <app-message-input></app-message-input>
         </div>
         <hr>
         <div class='col-md-8 col-md-offset-2'>
            <app-message-list></app-message-list>
         </div>
`
})

export class MessagesComponent{

}