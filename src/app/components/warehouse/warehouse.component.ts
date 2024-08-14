import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {
  isManger: boolean = false;
  warehouses: any[] = [];
  items: any[]= [];
  constructor(private warehouseService: WarehouseService, private authService: AuthService, private router: Router) { 
     this.isManger = this.authService.isManger();
  }

  ngOnInit(): void {
    if (this.isManger){
      this.warehouseService.getWarehouses().subscribe(
        (data) =>{
          this.warehouses = data;
          console.log(data);
        },
        (error) =>{
           this.isManger = false;
           console.error(error);
          }
      );
    }
  }

  showModal(id: any){
    this.items = this.warehouses.find(w => w.id === id).items;
  }

  delete(id: any){
    this.warehouseService.deleteWarehouse(id).subscribe(
      data => {
        this.warehouses = this.warehouses.filter(w => w.id !== id);
      }
    );
  }

  export(){
    this.warehouseService.exportWarehouses().subscribe(
      data =>  alert(data),
      error => alert(error.error)
      
    );
  }
}
