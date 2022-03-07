import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerStrankaComponent} from "./customer-stranka/customer-stranka.component";

const routes: Routes = [
  {
    path: 'users',
    component: CustomerStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
