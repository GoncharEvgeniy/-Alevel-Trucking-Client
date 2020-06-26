import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DatePipe} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterseptor} from "./service/jwtInterceptor";
import {NgxWebstorageModule} from 'ngx-webstorage';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    NgxWebstorageModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [DatePipe, {provide: HTTP_INTERCEPTORS, useClass: JwtInterseptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
