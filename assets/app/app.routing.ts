

import{RouterModule, Routes} from '@angular/router';
import { Route } from '../../node_modules/@angular/compiler/src/core';

import{MessagesComponent} from './messages/messages.component';
import{AuthenticationComponent} from './auth/authentication.component';
import { AUTH_ROUTES } from './auth/auth.routes';
import { NgModule } from '../../node_modules/@angular/core';

const APP_ROUTES: Routes= [
    {path:'', redirectTo:'/messages',pathMatch:'full'},
{path: 'messages' ,component:MessagesComponent},
{path:'auth',component:AuthenticationComponent,children:AUTH_ROUTES}
];

@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]

})

export const routing = RouterModule.forRoot(APP_ROUTES);