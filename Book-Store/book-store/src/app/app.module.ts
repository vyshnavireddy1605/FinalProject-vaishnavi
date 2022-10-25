import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route,RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes:Routes=[{path:'',component:WelcomeComponent},{path:'book',component:BookListComponent},{path:'bookform',component:BookFormComponent},{path : 'updateBook/:book_id',component:BookFormComponent},{path : 'search/:bname',component:BookListComponent}]

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookListComponent,
    SearchComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
