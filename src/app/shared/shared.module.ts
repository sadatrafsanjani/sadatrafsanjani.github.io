import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "../template/navigation/navigation.component";
import {SidebarComponent} from "../template/sidebar/sidebar.component";
import {FooterComponent} from "../template/footer/footer.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [CommonModule, FontAwesomeModule, HttpClientModule, RouterLink],
  declarations: [ NavigationComponent, SidebarComponent, FooterComponent ],
  exports:      [ NavigationComponent, SidebarComponent, FooterComponent ]
})
export class SharedModule { }
