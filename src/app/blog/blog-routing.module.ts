import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NewBlogComponent} from "./new-blog/new-blog.component";
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {EditBlogComponent} from "./edit-blog/edit-blog.component";
import {AuthenticationGuard} from "../guard/authentication.guard";
import {ListComponent} from "./list/list.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:link', component: ArticleComponent },
  { path: 'category/:link', component: CategoryComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthenticationGuard] },
  { path: 'new-blog', component: NewBlogComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-blog/:id', component: EditBlogComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
