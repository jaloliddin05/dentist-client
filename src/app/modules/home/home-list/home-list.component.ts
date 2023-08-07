import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent {
  active = 'today';
  data = [
    {
      id: '1',
      time: '9:00-10:00',
      phone: '99-999-99-99',
      name: 'John Doe',
      year: '25 year',
      service: 'Реставрация зубов',
    },
    {
      id: '2',
      time: '10:00-11:00',
      phone: '99-999-99-99',
      name: 'Kaneki Ken',
      year: '25 year',
      service: 'Реставрация зубов',
    },
    {
      id: '3',
      time: '11:00-12:00',
      phone: '99-999-99-99',
      name: 'Natsu Drag',
      year: '25 year',
      service: 'Реставрация зубов',
    },
    {
      id: '4',
      time: '12:00-13:00',
      phone: '99-999-99-99',
      name: 'Kilua Zlot',
      year: '25 year',
      service: 'Реставрация зубов',
    },
    {
      id: '5',
      time: '13:00-14:00',
      phone: '99-999-99-99',
      name: 'Kirito Kun',
      year: '25 year',
      service: 'Реставрация зубов',
    },
    {
      id: '6',
      time: '14:00-15:00',
      phone: '99-999-99-99',
      name: 'Maxiro Shine',
      year: '25 year',
      service: 'Реставрация зубов',
    },
  ];

  constructor(private readonly router: Router) {}

  clickCard(id: string) {
    this.router.navigate(['patient', id]);
  }
}
