import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolverService,
} from './events';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
