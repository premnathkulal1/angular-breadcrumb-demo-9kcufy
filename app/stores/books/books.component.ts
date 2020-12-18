import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../menu.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: Array<any> = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.bookList = this.menuService
      .getMenu()[1].children[0].children;
  }

}