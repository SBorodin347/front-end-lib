import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CustomerFormularComponent} from "./customer-formular/customer-formular.component";
import {CustomerStrankaComponent} from "./customer-stranka/customer-stranka.component";
import {CustomerZoznamComponent} from "./customer-zoznam/customer-zoznam.component";
import { KnihaFormularComponent } from './kniha-formular/kniha-formular.component';
import { KnihyZoznamComponent } from './knihy-zoznam/knihy-zoznam.component';
import { KnihaStrankaComponent } from './kniha-stranka/kniha-stranka.component';


@NgModule({
  declarations: [
    AppComponent,
    KnihaFormularComponent,
    KnihyZoznamComponent,
    KnihaStrankaComponent,
    CustomerFormularComponent,
    CustomerStrankaComponent,
    CustomerZoznamComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
