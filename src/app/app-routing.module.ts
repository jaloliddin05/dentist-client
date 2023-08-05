import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { ScheduleComponent } from './modules/home/schedule/schedule.component';
import { RequestComponent } from './modules/home/request/request.component';
import { ArchiveComponent } from './modules/home/archive/archive.component';
import { HomeListComponent } from './modules/home/home-list/home-list.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeListComponent,
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
      {
        path: 'request',
        component: RequestComponent,
      },
      {
        path: 'archive',
        component: ArchiveComponent,
      },
    ],
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
