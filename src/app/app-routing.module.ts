import {RouterModule, Routes} from "@angular/router";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {NgModule} from "@angular/core";
import {KnihyZoznamComponent} from "./knihy-zoznam/knihy-zoznam.component";
import {KnihaFormularComponent} from "./kniha-formular/kniha-formular.component";

const routes: Routes = [
  {
    path: 'books',
    component: KnihaStrankaComponent
  },
  {
    path: 'books/formular',
    component: KnihaFormularComponent
  },
  {
    path: 'books/list',
    component: KnihyZoznamComponent
  }
]

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
