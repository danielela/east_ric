import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// Router
import { APP_ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
