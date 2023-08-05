import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { MedCardComponent } from './med-card/med-card.component';
import { VisitComponent } from './visit/visit.component';
import { DocumentComponent } from './document/document.component';



@NgModule({
  declarations: [
    PatientComponent,
    MedCardComponent,
    VisitComponent,
    DocumentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
