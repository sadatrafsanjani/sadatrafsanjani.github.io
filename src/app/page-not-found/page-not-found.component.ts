import { Component } from '@angular/core';
import {NgxSpinnerModule} from "ngx-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
    imports: [
        NgxSpinnerModule,
        ReactiveFormsModule,
        SharedModule
    ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
