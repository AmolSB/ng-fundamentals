import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/app/routes';
import { Error404Component } from 'src/app/errors/404.component';
import { AuthService } from 'src/app/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from 'src/app/events/event-details/create-session.component';

@NgModule({
  declarations: [
    EventDetailsComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [EventsAppComponent],
  providers: [EventService, EventRouteActivator, AuthService
  { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
  EventListResolver
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    window.confirm('You have not saved this event, do you really want to cancel ?')
  }
  return true; 
}
