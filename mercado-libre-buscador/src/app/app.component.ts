import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  lang: string;
  constructor(
    private translate: TranslateService
  ) {
    this.lang = 'es'; // this.translate.getBrowserLang();
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }
}
