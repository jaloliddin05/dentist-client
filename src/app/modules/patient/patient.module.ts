import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { MedCardComponent } from './med-card/med-card.component';
import { VisitComponent } from './visit/visit.component';
import { DocumentComponent } from './document/document.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PatientComponent,
    MedCardComponent,
    VisitComponent,
    DocumentComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PatientModule {}
