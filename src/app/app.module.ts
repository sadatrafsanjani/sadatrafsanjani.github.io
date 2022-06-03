import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {NavigationComponent} from "./template/navigation/navigation.component";
import {SidebarComponent} from "./template/sidebar/sidebar.component";
import {FooterComponent} from "./template/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
