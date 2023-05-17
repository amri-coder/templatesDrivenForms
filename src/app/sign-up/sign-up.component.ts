import { Component } from '@angular/core';
import { User } from '../model/signUpForm.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  user: User = new User('', '', '', '');

  submitted: boolean = false;
  constructor() {}

  onSubmit() {
    this.submitted = true;
    console.log(
      'Message envoyer ! Bonjour User => [ votre prénom :' +
        this.user.firstname +
        '] [nom :' +
        this.user.lastname +
        '] [email :' +
        this.user.email +
        '] [password :' +
        this.user.password +
        ' ]'
    );
  }
}
