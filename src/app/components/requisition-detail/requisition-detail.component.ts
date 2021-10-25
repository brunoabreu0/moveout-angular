import {Component, OnInit} from '@angular/core';
import {Requisition} from "../../models/requisition.model";
import {RequisitionService} from "../../services/requisition.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-requisition-details',
  templateUrl: './requisition-detail.component.html',
  styleUrls: ['./requisition-detail.component.css']
})
export class RequisitionDetailComponent implements OnInit {

  requisition: Requisition = {
    id: 0,
    createdAt: '',
    status: '',
    dbName: '',
    tableName: '',
    filterClause: '',
    selectedColumns: '',
    tasksQuantity: 0,
  }

  constructor(
    private requisitionService: RequisitionService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getRequisition(this.route.snapshot.params.id)
  }

  getRequisition(id: number): void {
    this.requisitionService.get(id).subscribe(data => {
        this.requisition = data;
      },
      error => {
        console.log(error);
      });
  }

}
