import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './module-shared/shared.module';
// Components
import { AppComponent } from './app.component';
import { SearchingBarComponent } from './components/searching-bar/searching-bar.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { ItemService } from './module-shared/services/item.service';
import { AuthInterceptor } from './module-shared/services/authInterceptor';
import { SearchService } from './module-shared/services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchingBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    ItemService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }