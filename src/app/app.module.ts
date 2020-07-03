import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DatePipe} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./service/jwtInterceptor";
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { AddManagerComponent } from './add-manager/add-manager.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    NgxWebstorageModule.forRoot(),
    ConfirmationPopoverModule.forRoot({ confirmButtonType: 'danger' })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddManagerComponent
  ],
  providers: [DatePipe, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
