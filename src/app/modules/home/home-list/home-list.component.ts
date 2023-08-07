import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitService } from '../../../core/service/visit.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
  active = 'today';
  date = '';
  data: any[] = [];

  constructor(
    private readonly router: Router,
    private readonly visitService: VisitService
  ) {}

  ngOnInit(): void {
    this.getByDate(1);
  }

  clickCard(id: string) {
    this.router.navigate(['patient', id]);
  }

  getByDate(index: number) {
    let value: Date | string = new Date();
    if (index == 1) {
      this.active = 'today';
      value = this.generateDate(value);
    } else if (index == 2) {
      this.active = 'tomorrow';
      const tomorrow = new Date(value);
      tomorrow.setDate(value.getDate() + 1);
      value = this.generateDate(tomorrow);
    } else {
      this.active = 'date';
      value = this.generateDate(this.date);
    }

    this.getVisitByDate(value);
  }

  getVisitByDate(date: any) {
    this.visitService.getByDate(date).subscribe({
      next: (res: any) => {
        this.data = res;
      },
      error: (err: any) => {
        console.log(err.error);
      },
    });
  }

  generateDate(date: any) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month =
      d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    return year + '-' + month + '-' + day;
  }
}
