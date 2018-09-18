import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './_directives/click-outside.directive';
import { UiComponent } from './ui/ui.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { DataService } from './_services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
