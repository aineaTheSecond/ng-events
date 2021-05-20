import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
} from './events';

import { EventsAppComponent } from './events-app.component';
import {} from './events/event-list.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    ToastrService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved your progress, are you sure you want to leave this page?'
    );
  }
  return true;
}
