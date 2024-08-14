import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { AddWarehouseComponent } from './components/add-warehouse/add-warehouse.component';
import { SupplyDocumentComponent } from './components/supply-document/supply-document.component';
import { AddSupplyDocumentComponent } from './components/add-supply-document/add-supply-document.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    WarehouseComponent,
    AddWarehouseComponent,
    SupplyDocumentComponent,
    AddSupplyDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
