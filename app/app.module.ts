import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { StoresComponent } from './stores/stores.component';
import { BooksComponent } from './stores/books/books.component';
import { MenuService } from './menu.service';
import { Book1Component } from './stores/books/book1/book1.component';
import { Book2Component } from './stores/books/book2/book2.component';
import { Book3Component } from './stores/books/book3/book3.component';
import { Book4Component } from './stores/books/book4/book4.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, StoresComponent, BooksComponent, Book1Component, Book2Component, Book3Component, Book4Component ],
  bootstrap:    [ AppComponent ],
  providers: [MenuService]
})
export class AppModule { }
