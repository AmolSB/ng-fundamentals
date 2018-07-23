import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
  <h1>Upcoming Angular Events</h1>
  <hr />
  <event-thumbnail [event] = "event1" (eventClick)="handleClickEvent($event)"></event-thumbnail>
  </div>
`
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    data: '9/29/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angular-connect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleClickEvent(event: any) {
    console.log(event);
  }
}
