import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  // pre-load events
  resolve(): Observable<any> | Promise<any> | any {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
