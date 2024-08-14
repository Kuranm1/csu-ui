import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { AddWarehouseComponent } from './components/add-warehouse/add-warehouse.component';
import { SupplyDocumentComponent } from './components/supply-document/supply-document.component';
import { AddSupplyDocumentComponent } from './components/add-supply-document/add-supply-document.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'warehouse', component: WarehouseComponent},
  { path: 'warehouse/add', component: AddWarehouseComponent},
  { path: 'supply-document', component: SupplyDocumentComponent},
  { path: 'supply-document/add', component: AddSupplyDocumentComponent},
  { path: '**', redirectTo: '/supply-document' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
