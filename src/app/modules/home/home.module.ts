import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RequestComponent } from './request/request.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ScheduleComponent,
    RequestComponent,
    ArchiveComponent,
    HomeListComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
