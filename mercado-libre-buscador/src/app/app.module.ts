import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { SearchingBarComponent } from './components/searching-bar/searching-bar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchingBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
