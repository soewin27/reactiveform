import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { ExpenseGuard } from './expense.guard';
import { ExpenseEntryListComponent } from './pages/expense-entry-list/expense-entry-list.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsResolverService } from './pages/product-resolver.service';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'expenses', component: ExpenseEntryListComponent, canActivate: [ExpenseGuard]},
  //{ path: 'expenses/detail/:id', component: ExpenseDataModelComponent, canActivate: [ExpenseGuard]},
  { path: '', redirectTo: 'expenses', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { products: ProductsResolverService }
  },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
