import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksResolver } from './services/books.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: ':part', component: BooksListComponent,
    resolve: { BooksResolver }
  },
  {
    path: ':part/:book', component: BookComponent,
    resolve: { BooksResolver }
  },
  {
    path: ':part/:book/:chapter', component: ChapterComponent,
    resolve: { BooksResolver }
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
