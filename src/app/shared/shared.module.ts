import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DateParserPipe } from './pipe/date-parser.pipe';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, DateParserPipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, DateParserPipe],
})
export class SharedModule {}
