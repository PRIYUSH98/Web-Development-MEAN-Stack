 import { Component } from "../../../node_modules/@angular/core";
import{MessageService} from './message.service';
import { Message } from "./message.model";
import { NgForm } from "../../../node_modules/@angular/forms";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";import { Injectable } from '../../../node_modules/@angular/core';
import {ISubscription} from "rxjs/Subscription";

@Component({
    selector:'app-message-input',
    template:`
    <div class='col-md-8 col-md-offset-2'>
    <form ngNativeValidate (ngSubmit)="onSubmit(f)" #f="ngForm">
    <div class="form-group">
    <label for="content">Content</label>
    <input type="text" 
    id="content" 
    class="form-control" 
    ngModel
    name="content"
    required>
    </div>
    <button class="btn-primary" type="submit" >Save</button>
    </form>
    </div>
    `
    
})
export class MessageInputComponent{
    constructor(private messageService:MessageService){

    }
onSubmit(form:NgForm){
    const message=new Message(form.value.content,"priyushhhhh");
    this.messageService.addMessage(message)
    .subscribe(
            (data) => console.log(data),
            (error)  => console.error(error)
    );
    form.resetForm();
}
}