import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@econogest/dashboard').then((m) => m.DashboardComponent),
    pathMatch: 'full',
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('@econogest/transactions').then((m) => m.TransactionsComponent),
  },
];
