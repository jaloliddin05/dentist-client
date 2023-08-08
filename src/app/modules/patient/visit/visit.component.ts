import { Component, OnInit } from '@angular/core';
import { VisitService } from '../../../core/service/visit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss'],
})
export class VisitComponent implements OnInit {
  visits: any[] = [];

  constructor(
    private readonly visitService: VisitService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const patientId = this.route.parent?.snapshot.paramMap.get('id') as string;

    this.visitService.getByPatientId(patientId).subscribe({
      next: (res: any) => {
        this.visits = res;
      },
      error: (err: any) => {
        console.log(err.error);
      },
    });
  }
}
