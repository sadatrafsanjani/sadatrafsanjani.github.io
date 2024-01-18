import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {NgOptimizedImage} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxWebstorageModule} from "ngx-webstorage";
import {JWTInterceptor, JWTProvider} from "./interceptor/JWTInterceptor";
import {HttpClientModule} from "@angular/common/http";
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    SharedModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [JWTProvider],
  exports: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
