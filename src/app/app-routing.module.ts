import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/post-form/post-form.component';
import { PostSingleCardComponent } from './shared/post-single-card/post-single-card.component';
import { MovieDashboardComponent } from './movie-component/movie-dashboard/movie-dashboard.component';
import { MovieFormComponent } from './movie-component/movie-form/movie-form.component';
import { MovieSinleCardComponent } from './movie-component/movie-sinle-card/movie-sinle-card.component';

const routes: Routes = [

  {
    path: '',
    component: PostDashboardComponent
  },
  {
    path: 'post',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'post/add',
    component: PostFormComponent
  },
  {
    path: 'post/:postId',
    component: PostSingleCardComponent
  },
  {
    path: 'post/:postId/edit',
    component: PostFormComponent
  },
  {
    path: 'movie',
    component: MovieDashboardComponent
  },
  {
    path: 'movie/add',
    component: MovieFormComponent
  },
  {
    path: 'movie/:movieId',
    component: MovieSinleCardComponent
  },
  {
    path: 'movie/:movieId/edit',
    component: MovieFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
