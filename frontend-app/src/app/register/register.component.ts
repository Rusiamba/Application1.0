import { Component, OnInit } from '@angular/core';
import { CheckformService } from '../checkform.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './register.component350.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  secname: String;
  age: String;
  email: String;
  password: String;
  confpassword: String;


  constructor(private checkForm: CheckformService, private flashMSG: FlashMessagesService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  userRegisterClick() {
    const user = {
      name: this.name,
      secname: this.secname,
      age: this.age,
      email: this.email,
      password: this.password,
      confpassword: this.confpassword
    };

    if (!this.checkForm.checkName(user.name)) {
      this.flashMSG.show("Username is not specified", {
        cssClass: 'alert-danger',
        timeout: 5000
    });
      return false;
    } else if (!this.checkForm.checkLstName(user.secname)) {
      this.flashMSG.show("Last Name is not specified", {
        cssClass: 'alert-danger',
        timeout: 5000
    });
      return false;
    } else if (!this.checkForm.checkAge(user.age)) {
      this.flashMSG.show("Age is not specified", {
        cssClass: 'alert-danger',
        timeout: 5000
    });
      return false;
    }  
    // } else if (!this.checkForm.checkEmail(user.email)) {
    //   this.flashMSG.show("Email is not specified", {
    //     cssClass: 'alert-danger',
    //     timeout: 5000
    //   });
    //   return false;
    // } 
    // else if (!this.checkForm.checkPassword(user.password)) {
    //   this.flashMSG.show("Password is not specified", {
    //     cssClass: 'alert-danger',
    //     timeout: 5000
    //   });
    //   return false;
    // } else if (!this.checkForm.checkConfPass(user.confpassword)) {
    //   this.flashMSG.show("Conf Pass is not specified", {
    //     cssClass: 'alert-danger',
    //     timeout: 5000
    //   });
    //   return false;
    // }

    this.authService.regesterUser(user).subscribe(data => {
      if (!data.success) {
        this.flashMSG.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        return false;
      } else {
        this.flashMSG.show(data.msg, {
          cssClass: 'alert-success',
          timeout: 2000
        });
        this.router.navigate(['/users']);
      }
    });
  }
}
