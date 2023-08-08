import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { ScheduleComponent } from './modules/home/schedule/schedule.component';
import { RequestComponent } from './modules/home/request/request.component';
import { ArchiveComponent } from './modules/home/archive/archive.component';
import { HomeListComponent } from './modules/home/home-list/home-list.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { PatientComponent } from './modules/patient/patient/patient.component';
import { VisitComponent } from './modules/patient/visit/visit.component';
import { MedCardComponent } from './modules/patient/med-card/med-card.component';
import { DocumentComponent } from './modules/patient/document/document.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
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
      {
        path: 'patient/:id',
        component: PatientComponent,
        children: [
          {
            path: 'visit',
            component: VisitComponent,
          },
          {
            path: 'med-card',
            component: MedCardComponent,
          },
          {
            path: 'document',
            component: DocumentComponent,
          },
          { path: '**', redirectTo: 'visit' },
        ],
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
