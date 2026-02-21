import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {Footer} from '../footer/footer';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Footer,
    Sidebar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
