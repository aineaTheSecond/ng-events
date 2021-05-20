import { CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { EventService } from '../shared/events.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const eventExists = !!this.eventService.getEvent(+route.params.id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
