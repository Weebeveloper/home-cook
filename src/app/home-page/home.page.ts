import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { SITE_URL } from '../common/URLs.enum';

@Component({
  selector: 'home-page',
  imports: [MatExpansionModule, MatListModule, MatDividerModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  readonly RECIPE_BOOK_URL = SITE_URL.RECIPE_BOOK_URL;

  constructor(private readonly _router: Router) {}

  onActionClick(navigationURL: string) {
    this._router.navigateByUrl(navigationURL);
  }
}
