export class Requisition {
  id?: number;
  createdAt?: string;
  status?: string;
  dbName?: string;
  tableName?: string;
  filterClause?: string;
  selectedColumns?: string;
  tasksQuantity?: number;
}
