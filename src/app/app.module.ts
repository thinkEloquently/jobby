import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { StylesGuideComponent } from './styles-guide/styles-guide.component';
import { AppFormsModule } from './shared/forms/app-forms.module';
import { SigninComponent } from './signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    StylesGuideComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    AppFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
