import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CustomerFormComponent} from "./customer-form/customer-form.component";
import {CustomerPageComponent} from "./customer-page/customer-page.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPageComponent } from './book-page/book-page.component';
import {MenuComponent} from "./menu/menu.component";
import {HttpClientModule} from "@angular/common/http";
import {BorrowingListComponent} from "./borrowing-list/borrowing-list.component";
import {BorrowingPageComponent} from "./borrowing-page/borrowing-page.component";
import {BorrowingFormComponent} from "./borrowing-form/borrowing-form.component";
import { BorrowingFormPopupComponent } from './borrowing-form-popup/borrowing-form-popup.component';
import {RefDirective} from "./ref.directive";
import {BooksFilterPipe} from "./shared/books-filter.pipe";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {PanelModule} from "primeng/panel";
import {RadioButtonModule} from "primeng/radiobutton";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {MessageModule} from "primeng/message";
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({

  declarations: [
    AppComponent,
    BorrowingListComponent,
    BorrowingPageComponent,
    BorrowingFormComponent,
    BookFormComponent,
    BookListComponent,
    BookPageComponent,
    CustomerFormComponent,
    CustomerPageComponent,
    CustomerListComponent,
    MenuComponent,
    BorrowingFormPopupComponent,
    BooksFilterPipe,
    RefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot({
      provideSwal: () => import('sweetalert2/dist/sweetalert2.js')
    }),
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    PanelModule,
    RadioButtonModule,
    DividerModule,
    CardModule,
    MessageModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
