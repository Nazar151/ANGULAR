import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import {RouterModule, Routes} from "@angular/router";
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {UserDeactivatorService} from "./services/user-deactivator.service";
import {PostActivatorService} from "./services/post-activator.service";
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import {ResolveService} from "./services/resolve.service";

let routes : Routes = [
  {path : '', component : HomeComponent },
  {path : 'users', component : UsersComponent,
    canDeactivate:[UserDeactivatorService],
    children : [{path:':id',
      component : UserDetailsComponent}] },

  {path : 'posts', component : PostsComponent,
    canActivate : [PostActivatorService] },
/**render into app**/
  {path : 'posts/:id', component : PostDetailsComponent},
  {path : 'comments', component : CommentsComponent, resolve : {xxx: ResolveService}},

]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
