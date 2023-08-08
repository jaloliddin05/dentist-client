import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ClientRequestComponent } from './client-request/client-request.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    ClientRequestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
