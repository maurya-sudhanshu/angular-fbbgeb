import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppDossierCorrespondenceComponent } from './app-dossier-correspondence-list.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AppDossierCorrespondenceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
