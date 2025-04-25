import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'page-one',
    loadComponent: () => import('./page-one/page-one.page').then( m => m.PageOnePage)
  },
  {
    path: 'page-two',
    loadComponent: () => import('./page-two/page-two.page').then( m => m.PageTwoPage)
  },
  {
    path: 'status',
    loadComponent: () => import('./status/status.page').then( m => m.StatusPage)
  },
];
