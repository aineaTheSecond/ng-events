import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/events.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  selector: 'app-event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <app-event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          >
          </app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName): void {
    this.toastr.success(eventName);
  }
}
