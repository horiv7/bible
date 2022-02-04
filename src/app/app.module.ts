import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardGroupComponent } from './pages/home/card-group/card-group.component';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { PagesHeaderComponent } from './shared/components/pages-header/pages-header.component';
import { BookComponent } from './pages/book/book.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { ChaptersComponent } from './pages/book/chapters/chapters.component';
import { PoetsCardComponent } from './pages/chapter/poets-card/poets-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardGroupComponent,
    BooksListComponent,
    PagesHeaderComponent,
    BookComponent,
    ChapterComponent,
    ChaptersComponent,
    PoetsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
