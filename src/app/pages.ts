import {Routes} from "@angular/router";
import {ErrorComponent} from "./core/error/error.component";
import {GuestComponent} from "./guest/guest.component";
import {AuthGuestGuard} from "./core/guard/auth-guest.guard";
import {AuthGuard, AuthGuardChild} from "./core/guard/auth.guard";

export const pages: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuardChild],
    children: [
      {
        path: 'user',
        loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
      },
    ],
  },
  {
    path: '',
    component: GuestComponent,
    loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule),
    canActivate: [AuthGuestGuard]
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];
