import { Component } from '@angular/core';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user!: any;
  constructor(private readonly userService: UserService) {
    this.getUser();
  }

  getUser() {
    this.userService.getMe().subscribe({
      next: (res: any) => {
        this.user = res;
      },
      error: (err: any) => {
        console.log(err.error);
      },
    });
  }
}
