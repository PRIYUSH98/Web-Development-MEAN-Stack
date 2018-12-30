import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from "./messages/message.component";
import { AppComponent } from "./app.component";
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header.component';
import{RouterModule, Routes} from '@angular/router';
import{routing} from "./app.routing";
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { Http, HttpModule } from '../../node_modules/@angular/http';
import{MessageService} from './messages/message.service';
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent,
        MessagesComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
        

    ],
    imports: [BrowserModule,FormsModule,RouterModule,routing,ReactiveFormsModule,HttpModule],
    providers:[MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}