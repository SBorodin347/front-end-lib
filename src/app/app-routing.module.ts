import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerStrankaComponent} from "./customer-stranka/customer-stranka.component";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {BorrowingStrankaComponent} from "./borrowing-stranka/borrowing-stranka.component";

const routes: Routes = [
  {
    path: 'users',
    component: CustomerStrankaComponent
  },
  {
    path: 'books',
    component: KnihaStrankaComponent
  },
  {
    path: 'borrowings',
    component: BorrowingStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
