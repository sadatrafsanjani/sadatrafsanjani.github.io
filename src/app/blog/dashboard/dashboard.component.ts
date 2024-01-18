import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {BlogService} from "../../service/blog.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: Title,
              private blogService: BlogService) { }

  ngOnInit() {
    this.titleService.setTitle("Dashboard");

  }
}
