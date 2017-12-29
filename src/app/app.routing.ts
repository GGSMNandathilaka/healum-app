import {Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {HeaderComponent} from "./components/header/header.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {FullLayoutComponent} from "../layouts/full-layout/full-layout.component";
import {Module1Component} from "./components/module1/module1.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/s1/(aux1:header//aux2:side-bar//aux3:users)',
    pathMatch: 'full'
  },
  {
    path: 's1',
    component: FullLayoutComponent,
    children: [
      {
        path: 'header',
        outlet: 'aux1',
        component: HeaderComponent
      },
      {
        path: 'side-bar',
        outlet: 'aux2',
        component: SideBarComponent
      },
      {
        path: 'users',
        outlet: 'aux3',
        component: UsersComponent
      },
      {
        path: 'module1',
        outlet: 'aux3',
        component: Module1Component
      },
      {
        path: '',
        redirectTo: 's1',
        pathMatch: 'full'
      }
    ]
  },
];
