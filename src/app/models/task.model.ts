import {Requisition} from "./requisition.model";

export class Task {
  id?: number;
  createdAt?: string;
  status?: string;
  rowGroup?: number;
  requisition?: Requisition;
}
