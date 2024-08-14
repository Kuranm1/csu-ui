import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WarehouseService } from 'src/app/services/warehouse.service';


@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent {

  warehouseName: string ="";
  warehouseDescription: string ="";
  itemName: string = "";
  itemDescription: string = "";
  quantity: number = 0;
  items: any[] = [];

  constructor(private warehouseService: WarehouseService, private authService: AuthService, private router: Router){}

  saveWarehouse(){
    let warehouse={
      warehouseName: this.warehouseName,
      warehouseDescription: this.warehouseDescription,
      items: this.items
    }
    this.warehouseService.addWarehouse(warehouse).subscribe(
      data => this.router.navigate(["/warehouse"]),
      error => console.log(error)
    );
  }

  saveItem(){
    this.items.push({
      itemName: this.itemName,
      itemDescription: this.itemDescription,
      quantity: this.quantity
    })

    this.itemName = "";
    this.itemDescription = "";
    this.quantity = 0;
  }

  removeItem(event: Event, name: string){
    event.preventDefault();
    this.items = this.items.filter(item => item.itemName !== name)
  }
  resetForm(){
    this.warehouseName="";
    this.warehouseDescription="";
    this.items = [];
  }
}
