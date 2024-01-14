import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ArticleComponent} from "./article/article.component";
import {EditBlogComponent} from "./edit-blog/edit-blog.component";
import {NewBlogComponent} from "./new-blog/new-blog.component";
import {HomeComponent} from "./home/home.component";
import {BlogRoutingModule} from "./blog-routing.module";
import {SharedModule} from "../shared/shared.module";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {ListComponent} from "./list/list.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ArticleComponent,
    EditBlogComponent,
    NewBlogComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
