import { Component, OnInit } from '@angular/core';
import { NewrequirementService } from '../../services/newrequirement.service';

@Component({
  selector: 'app-list-newrequirement',
  templateUrl: './list-newrequirement.component.html',
  styleUrls: ['./list-newrequirement.component.css']
})
export class ListNewrequirementComponent  implements OnInit {
 
  gridApi: any;
  
  onGridReady(params: any): void {
    this.gridApi = params.api;
  }
constructor(private newcustomrerequirementservice:NewrequirementService )
{


}

columnDefs = [
  { headerName: 'CRID', field: 'crid', sortable: true, filter: true, floatingFilter: true },
  { headerName: 'Customer', field: 'customername', sortable: true, filter: true, floatingFilter: true },
  { headerName: 'Division', field: 'divisionname', sortable: true, filter: true, floatingFilter: true },
  { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
  // Add more columns as needed
];
  rowData: any[] = [];


  ngOnInit(): void {
    this.newcustomrerequirementservice.getNewcustomerRequirementDetails().subscribe({
      next: (response) => {
        // Assuming response is an array of data
        console.log(JSON.stringify(response));
        this.rowData = response;
      },
      error: (error) => {
        // Handle error if needed
        console.error('Error fetching data:', error);
      }
    });
  }
}
