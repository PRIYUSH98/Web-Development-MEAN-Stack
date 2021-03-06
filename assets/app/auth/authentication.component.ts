import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector:"app-authentication",
    template:`
    <header class="row-spacing">
    <nav class="col-md-8 col-md-offset-2">
    <ul class="nav nav-tabs">
    <li routerLinkActive="active"><a routerLink="signin">Signin</a></li>
    <li routerLinkActive="active"><a routerLink="signup">Signup</a></li>
    <li routerLinkActive="active"><a routerLink="logout">Logout</a></li>


    </ul>
    </nav>
    </header>
    <header class="row-spacing">
    <router-outlet></router-outlet>
    </header>
    `
})
export class AuthenticationComponent{

}