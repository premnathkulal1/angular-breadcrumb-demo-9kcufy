import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoresComponent } from './stores/stores.component';
import { BooksComponent } from './stores/books/books.component';
import { Book1Component } from './stores/books/book1/book1.component';
import { Book2Component } from './stores/books/book2/book2.component';
import { Book3Component } from './stores/books/book3/book3.component';
import { Book4Component } from './stores/books/book4/book4.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'stores', component: StoresComponent },
  // { path: 'stores/books', component: BooksComponent },
  // { path: 'stores/books/book1', component: Book1Component },
  // { path: 'stores/books/book2', component: Book2Component },
  // { path: 'stores/books/book3', component: Book3Component },
  // { path: 'stores/books/book4', component: Book4Component },  
  // { path: '', redirectTo: 'home', pathMatch: 'full' }

  { path: 'home', component: HomeComponent },
  { 
    path: 'stores', 
    component: StoresComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'books/book1', component: Book1Component },
      { path: 'books/book2', component: Book2Component },
      { path: 'books/book3', component: Book3Component },
      { path: 'books/book4', component: Book4Component }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
