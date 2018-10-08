import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './containers/menu-bar/menu-bar.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { FooterComponent } from './containers/footer/footer.component';
import { DetailsComponent } from './containers/details/details.component';
import { JourneyComponent } from './containers/journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    WelcomeComponent,
    FooterComponent,
    DetailsComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
