import { EventDetailsComponent } from "src/app/events/event-details/event-details.component";
import { EventsListComponent } from "src/app/events/events-list.component";
import { Routes } from '@angular/router'; 
import { CreateEventComponent } from "src/app/events/create-event.component";
import { Error404Component } from "src/app/errors/404.component";
import { EventRouteActivator } from "src/app/events/event-details/event-route-activator.service";
import { EventListResolver } from "src/app/events/events-list-resolver.service";
import { CreateSessionComponent } from "src/app/events/event-details/create-session.component";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]