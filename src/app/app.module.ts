import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './features/user/component/user-list/user-list.component';
import {UserFormComponent} from './features/user/component/user-form/user-form.component';
import {ErrorComponent} from './core/error/error.component';
import {GuestComponent} from './guest/guest.component';
import {LoginComponent} from './guest/login/login.component';
import {environment} from 'src/environments/environment';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpClientModule} from "@angular/common/http";
import {FakeApiService} from "./_fake/fake-api.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ErrorComponent,
    GuestComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        environment.isMockEnabled
            ? HttpClientInMemoryWebApiModule.forRoot(FakeApiService)
            : [],
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
