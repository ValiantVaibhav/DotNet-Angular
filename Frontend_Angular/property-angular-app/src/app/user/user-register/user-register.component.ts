import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/Alertify.service';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm?: FormGroup
  userData : UserModel
  formSubmitted : boolean
  constructor(private fb:FormBuilder,
              private userService : UserServiceService,
              private alertifyService : AlertifyService
              ) {}
  ngOnInit() {

    // this.registerationForm = new FormGroup({
    //   userName: new FormControl('House',Validators.required),
    //   userEmail: new FormControl(null, [Validators.required,Validators.email]),
    //   password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
    //   confirmPassword: new FormControl(null,Validators.required),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator)
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registerationForm = this.fb.group({
      userName : ['House', Validators.required],
      userEmail : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword : [null, Validators.required],
      mobile : [null, [Validators.required, Validators.maxLength(10)]]
    },{validators: this.passwordMatchingValidator});
  }

  onSubmit(form : FormGroup){
    console.log(this.registerationForm)
    console.log('Valid', form.valid)

    this.formSubmitted = true
    if(this.registerationForm.valid){

      //this.userData = Object.assign(this.userData, this.registerationForm.value)
      this.userService.addUserDataToLocalStorage(this.mapUserDatatoModel())

      this.registerationForm.reset()

      this.formSubmitted = false

      this.alertifyService.showSuccessMessage('Congrats!! You have successfully registered')
    }
    else{
      this.alertifyService.showErrorMessage('Kindly provide the required fields.')
    }
}

mapUserDatatoModel() : UserModel {
    return this.userData = {
      userName : this.getUserName.value,
      userEmail : this.getUserEmail.value,
      password : this.getPassword.value,
      mobile : this.getMobile.value
    }
}



  passwordMatchingValidator(fg : AbstractControl) : ValidationErrors | null{
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : { mismatched : true };
  }

  get getUserName(){
    return this.registerationForm.get('userName') as FormControl
  }

  get getUserEmail(){
    return this.registerationForm.get('userEmail') as FormControl
  }

  get getPassword(){
    return this.registerationForm.get('password') as FormControl
  }

  get getConfirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl
  }
  get getMobile(){
    return this.registerationForm.get('mobile') as FormControl
  }

}
