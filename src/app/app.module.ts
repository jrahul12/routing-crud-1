import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PostDashboardComponent } from './shared/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/post-form/post-form.component';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { ConfirmComponent } from './shared/confirm/confirm.component';
import { PostSingleCardComponent } from './shared/post-single-card/post-single-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MovieDashboardComponent } from './movie-component/movie-dashboard/movie-dashboard.component';
import { MovieFormComponent } from './movie-component/movie-form/movie-form.component';
import { MovieCardComponent } from './movie-component/movie-card/movie-card.component';
import { MovieSinleCardComponent } from './movie-component/movie-sinle-card/movie-sinle-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent,
    ConfirmComponent,
    PostSingleCardComponent,
    MovieDashboardComponent,
    MovieFormComponent,
    MovieCardComponent,
    MovieSinleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
