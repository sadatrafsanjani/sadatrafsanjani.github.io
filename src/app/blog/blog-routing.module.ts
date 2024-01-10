import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NewBlogComponent} from "./new-blog/new-blog.component";
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {EditBlogComponent} from "./edit-blog/edit-blog.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article:/id', component: ArticleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-blog', component: NewBlogComponent },
  { path: 'edit-blog', component: EditBlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
