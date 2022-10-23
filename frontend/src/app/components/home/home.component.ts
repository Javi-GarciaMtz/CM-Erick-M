import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  public page_title: string;
  public user: User;

  constructor(
    private _userService: UserService
  ) {
    this.page_title = 'Home of City Maderas XD'
    this.user = new User('JhonAng', 'Doe', 'jhon@mail.mx', '+525542759898');
  }

  ngOnInit(): void {
    // this.onSubmit();
  }

  onSubmit() {
    this._userService.save_user(this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
