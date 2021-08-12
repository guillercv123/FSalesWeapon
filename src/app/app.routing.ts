import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: 'home',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'login'
  }
]
