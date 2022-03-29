import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerPageComponent} from "./customer-page/customer-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {BorrowingPageComponent} from "./borrowing-page/borrowing-page.component";
import {MenuComponent} from './menu/menu.component';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomerPageComponent
  },
  {
    path: 'books',
    component: BookPageComponent
  },
  {
    path: 'borrowings',
    component: BorrowingPageComponent
  },
  {
    path: '',
    component: MenuComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
