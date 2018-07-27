import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "src/app/events/shared/event.service";
import { Router } from "@angular/router";

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        let eventExist = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExist) {
            this.router.navigate(['/404'])
        }
        return eventExist;
    }
}