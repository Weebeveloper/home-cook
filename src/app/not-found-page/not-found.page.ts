import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SITE_URL } from '../common/URLs.enum';

@Component({
  selector: 'not-found-page',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.scss',
})
export class NotFoundPage {
  constructor(private readonly _router: Router) {}

  navigateHome() {
    this._router.navigateByUrl(SITE_URL.HOME_URL);
  }
}
