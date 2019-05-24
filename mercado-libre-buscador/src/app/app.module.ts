import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Components
import { AppComponent } from './app.component';
import { SearchingBarComponent } from './components/searching-bar/searching-bar.component';
import { HomeComponent } from './components/home/home.component';
// Services
import { ItemService } from './services/item.service';
import { AuthInterceptor } from './services/authInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchingBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    ItemService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
