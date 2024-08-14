import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SupplyDocumentService } from 'src/app/services/supply-document.service';

@Component({
  selector: 'app-supply-document',
  templateUrl: './supply-document.component.html',
  styleUrls: ['./supply-document.component.css']
})

export class SupplyDocumentComponent {
  isManger: boolean = false;
  documents: any[] = [];

  constructor(private supplyDocumentService: SupplyDocumentService, private authService: AuthService, private router: Router){
    this.isManger = this.authService.isManger();
  }

  ngOnInit(){
    this.supplyDocumentService.getSupplyDocuments().subscribe(
      data => this.documents = data
    )
  }

  delete(id: any){
    this.supplyDocumentService.deleteSupplyDocument(id).subscribe(
      data => {
        this.documents = this.documents.filter(d => d.id !== id);
      }
    );
  }

  approve(id: any){
    let document = this.documents.find(d => d.id === id);
    document.status = "aproved";
    this.documents = this.documents.filter(d => d.id !== id);
    this.supplyDocumentService.setSupplyDocumentStatus(document).subscribe(
      data => this.documents.push(document)
    );
    console.log(document.status);
  }

  decline(id: any){
    let document = this.documents.find(d => d.id === id);
    document.status = "declined";
    this.documents = this.documents.filter(d => d.id !== id);
    this.supplyDocumentService.setSupplyDocumentStatus(document).subscribe(
      data => this.documents.push(document)
    );
    console.log(document.status);
  }


}
