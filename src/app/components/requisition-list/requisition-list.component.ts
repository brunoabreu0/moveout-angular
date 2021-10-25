import {Component, OnInit} from '@angular/core';
import {Requisition} from 'src/app/models/requisition.model';
import {RequisitionService} from 'src/app/services/requisition.service';
import {
  faAirFreshener,
  faHashtag,
  faTable,
  faTasks,
  faCalendar,
  faStopwatch,
  faFilter,
  faList,
  faEdit
} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-requisition-list',
  templateUrl: './requisition-list.component.html',
  styleUrls: ['./requisition-list.component.css']
})
export class RequisitionListComponent implements OnInit {

  requisitions?: Requisition[];
  iconFresh = faAirFreshener;
  iconList = faList;
  iconHash = faHashtag;
  iconTable = faTable;
  iconTasks = faTasks;
  iconCalendar = faCalendar;
  iconStopwatch = faStopwatch;
  iconFilter = faFilter;
  iconEdit = faEdit;

  constructor(
    private requisitionService: RequisitionService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.retrieveRequisitions();
  }

  retrieveRequisitions(): void {
    this.requisitionService.getAll().subscribe(
      data => {
        this.requisitions = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  navToDetail(id: any): void {
    this._router.navigate(['requisitions', id.toString()]);
  }

}
