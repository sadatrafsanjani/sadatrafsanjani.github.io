import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "../template/navigation/navigation.component";
import {SidebarComponent} from "../template/sidebar/sidebar.component";
import {FooterComponent} from "../template/footer/footer.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterLink,
    NgxPaginationModule],
  declarations: [ NavigationComponent, SidebarComponent, FooterComponent ],
  exports:      [
    NavigationComponent,
    SidebarComponent,
    FooterComponent,
    FontAwesomeModule,
    HttpClientModule,
    RouterLink,
    ReactiveFormsModule,
    NgxPaginationModule ]
})
export class SharedModule { }
