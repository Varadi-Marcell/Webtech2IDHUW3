import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ViewUserComponent} from "./user/view-user/view-user.component";
import {UserDetailsResolver} from "./service/user-details.resolver";
import {UpdateUserComponent} from "./user/update-user/update-user.component";
import {GuitarComponent} from "./guitar/guitar.component";
import {ViewGuitarComponent} from "./guitar/view-guitar/view-guitar.component";
import {GuitarDetailsResolver} from "./service/guitar-details.resolver";
import {UpdateGuitarComponent} from "./guitar/update-guitar/update-guitar.component";
import {CreateGuitarComponent} from "./guitar/create-guitar/create-guitar.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'guitar',
    component: GuitarComponent,
  },
  {
    path: "register",
    component: RegistrationComponent,
  },
  {
    path: "update-user",
    component: UpdateUserComponent,
  },

  { path: 'view-user/:id',
    component: ViewUserComponent ,
    resolve: {preload: UserDetailsResolver}},

  {path: 'user-update/:id', component: UpdateUserComponent, resolve: {preload: UserDetailsResolver}},

  { path: 'view-guitar/:id',
    component: ViewGuitarComponent ,
    resolve: {preload: GuitarDetailsResolver}},

  {path: 'guitar-update/:id', component: UpdateGuitarComponent, resolve: {preload: GuitarDetailsResolver}},
  {
    path: "create-guitar",
    component: CreateGuitarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
