import { Injectable } from '@angular/core';
import { UserModel } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUserDataToLocalStorage(userDataElement : UserModel){
  let users = []
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'))
    users = [userDataElement, ...users] //Spread operator which allows elements of Array to expand
  }
  else{
    users = [userDataElement]
  }
  localStorage.setItem('Users',JSON.stringify(users))
}
}

