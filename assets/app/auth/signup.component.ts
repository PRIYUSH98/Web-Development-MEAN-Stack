import { Component, OnInit } from "../../../node_modules/@angular/core";
import { FormGroup, FormControl, Validators } from "../../../node_modules/@angular/forms";

@Component({
    selector:"app-signup",
    templateUrl:"./signup.component.html"
})
export class SignupComponent implements OnInit{

    myForm: FormGroup;
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm =new FormGroup({
            'firstname':new FormControl(null,Validators.required),
            'lastname':new FormControl(null,Validators.required),
            'email':new FormControl(null,Validators.required),
            'password':new FormControl(null,Validators.required),

        });

    }

}