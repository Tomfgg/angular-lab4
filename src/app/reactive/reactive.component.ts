import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  register : FormGroup;
  constructor(){
    this.register = new FormGroup (
      {
        name : new FormControl ('',[Validators.required]),
        email: new FormControl ('',[Validators.required,]),
        username: new FormControl ('',[Validators.required,this.nospaces('username')]),
        password: new FormControl ('',[Validators.required,Validators.minLength(8),this.lowerCase('password'),this.upperCase('password'),this.digit('password'),this.special('password')]),
        confirm: new FormControl ('',[Validators.required,])
      },{
        validators: this.equalOrNot('password','confirm')
      }
    )
  }
  log(){
    console.log(this.register);
  }
  equalOrNot(num1:string,num2:string): ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const val1 = formGroup.get(num1)?.value;
      const val2 = formGroup.get(num2)?.value;
      
      if (val1==val2) return null;
      else return {notMatch : true};
    }
  }
  nospaces(name:string): ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null => {
      const val = control.value;
      if (val.includes(' ')) return {space: true};
      else return null;
    }
  }
  lowerCase(pass:string){
    return (control: AbstractControl) : ValidationErrors | null => {
      const mypass = control.value;
      if (this.noLowerCase(mypass)) return {noLowerCase : true};
      return null;
    }
  }
  noLowerCase(st:string):boolean{
    const regex = /^[^a-z]*$/;
    return regex.test(st);
  }
  upperCase(pass:string){
    return (control: AbstractControl) : ValidationErrors | null => {
      const mypass = control.value;
      if (this.noUpperCase(mypass)) return {noUpperCase : true};
      return null;
    }
  }
  noUpperCase(st:string):boolean{
    const regex = /^[^A-Z]*$/;
    return regex.test(st);
  }
  digit(pass:string){
    return (control: AbstractControl) : ValidationErrors | null => {
      const mypass = control.value;
      if (this.noDigit(mypass)) return {noDigit : true};
      return null;
    }
  }
  noDigit(st:string):boolean{
    const regex = /^[^0-9]*$/;
    return regex.test(st);
  }
  special(pass:string){
    return (control: AbstractControl) : ValidationErrors | null => {
      const mypass = control.value;
      if (this.noSpecial(mypass)) return null;
      return { noSpecial: true };
    }
  }
  noSpecial(st:string):boolean{
    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    return regex.test(st);
  }
}
