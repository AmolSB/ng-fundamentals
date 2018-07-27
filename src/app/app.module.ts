import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/app/routes';
import { CreateEventComponent } from 'src/app/events/create-event.component';
import { Error404Component } from 'src/app/errors/404.component';
import { EventRouteActivator } from 'src/app/events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    EventDetailsComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService, EventRouteActivator,
  { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    window.confirm('You have not saved this event, do you really want to cancel ?')
  }
  return true; 
}
