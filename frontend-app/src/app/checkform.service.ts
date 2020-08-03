import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckformService {

  constructor() { }

  checkName(name) {
    if (name == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkLstName(secname) {
    if (secname == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkAge(age) {
    if (age == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkEmail(email) {
    if (email == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkPassword(password) {
    if (password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkConfPass(confpassword) {
    if (confpassword == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
