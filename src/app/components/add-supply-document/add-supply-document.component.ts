import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SupplyDocumentService } from 'src/app/services/supply-document.service';

@Component({
  selector: 'app-add-supply-document',
  templateUrl: './add-supply-document.component.html',
  styleUrls: ['./add-supply-document.component.css']
})
export class AddSupplyDocumentComponent {

  documentName: string = "";
  documentSubject: string = "";

  constructor(private supplyDocumentService: SupplyDocumentService, private authService: AuthService, private router: Router){
  }

  saveDocument(){
    let document={
      documentName: this.documentName,
      documentSubject: this.documentSubject,
    }
    this.supplyDocumentService.addSupplyDocument(document).subscribe(
      data => this.router.navigate(["/supply-document"]),
      error => console.log(error)
    );
  }

  resetForm(){
    this.documentName="";
    this.documentSubject="";
  }


}
