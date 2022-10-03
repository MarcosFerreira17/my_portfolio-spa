import { AdminUpdatePostComponent } from './admin/admin-update-post/admin-update-post.component';
import { HomeComponent } from './home/home.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin-posts',
    component: AdminPostsComponent
  },
  {
    path: 'admin-update/:id',
    component: AdminUpdatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
