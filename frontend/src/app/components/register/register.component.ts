import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User;
  public status_register: String;

  constructor(
    private _userService: UserService

  ) {
    this.user = new User('', '', '', '');
    this.status_register = "";
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._userService.save_user(this.user).subscribe(
      response => {
          if(response.status == "success") {
            this.status_register = response.status;
            form.reset();
            this.user = new User('', '', '', '');

          } else {
            this.status_register = response.status;
            // console.log("status error");
          }
      },
      error => {
        // console.log(<any>error);
      }
    );

  }

}
