import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Journey Worship Network' },
  // Future pages:
  // { path: 'events', loadComponent: () => import('./events/events.page').then(m => m.EventsPage) },
  // { path: 'releases', loadChildren: () => import('./releases/releases.routes') },
  { path: '**', redirectTo: '' },
];
