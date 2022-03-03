import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { KnihaFormularComponent } from './kniha-formular/kniha-formular.component';
import { KnihyZoznamComponent } from './knihy-zoznam/knihy-zoznam.component';
import { KnihaStrankaComponent } from './kniha-stranka/kniha-stranka.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    KnihaFormularComponent,
    KnihyZoznamComponent,
    KnihaStrankaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
