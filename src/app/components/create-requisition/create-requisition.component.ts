import {Component, OnInit} from '@angular/core';
import {RequisitionBody} from "../../models/requisition-body.model";
import {RequisitionService} from "../../services/requisition.service";
import {
  faAirFreshener,
  faHashtag,
  faTable,
  faTasks,
  faCalendar,
  faStopwatch,
  faFilter,
  faList,
  faEdit,
  faDatabase,
  faColumns,
  faEraser,
  faPaperPlane,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-requisition',
  templateUrl: './create-requisition.component.html',
  styleUrls: ['./create-requisition.component.css']
})
export class CreateRequisitionComponent implements OnInit {

  requisitionBody: RequisitionBody = {
    dbName: '',
    tableName: '',
    filterClause: '',
    selectedColumns: '',
  };
  submitted = false;
  createdRequisitionId = 0;
  iconFresh = faAirFreshener;
  iconList = faList;
  iconHash = faHashtag;
  iconTable = faTable;
  iconTasks = faTasks;
  iconCalendar = faCalendar;
  iconStopwatch = faStopwatch;
  iconFilter = faFilter;
  iconEdit = faEdit;
  iconDatabase = faDatabase;
  iconColumns = faColumns;
  iconEraser = faEraser;
  iconPaperPlane = faPaperPlane;
  iconClipboardCheck = faClipboardCheck;

  constructor(private requisitionService: RequisitionService) {
  }

  ngOnInit(): void {
  }

  createRequisition(): void {
    const data = this.requisitionBody;
    this.requisitionService.create(data).subscribe(response => {
        this.createdRequisitionId = response.requisitionId;
        this.submitted = true;
      },
      error => {
        console.log(error)
      });
  }

  resetForm(): void {
    this.submitted = false;
    this.requisitionBody = {
      dbName: '',
      tableName: '',
      filterClause: '',
      selectedColumns: '',
    };
  }

}
