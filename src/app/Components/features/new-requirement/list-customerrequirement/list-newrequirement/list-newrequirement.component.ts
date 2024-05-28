import { Component } from '@angular/core';

@Component({
  selector: 'app-list-newrequirement',
  templateUrl: './list-newrequirement.component.html',
  styleUrls: ['./list-newrequirement.component.css']
})
export class ListNewrequirementComponent {
  columnDefs = [
 
    { headerName: 'CRID', field: 'name',  sortable: true, filter: true },

    
    // Add more columns as needed
  ];
  rowData: any[] = [];
}
