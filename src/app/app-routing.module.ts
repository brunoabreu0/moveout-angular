import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequisitionListComponent} from "./components/requisition-list/requisition-list.component";
import {RequisitionDetailComponent} from "./components/requisition-detail/requisition-detail.component";
import {CreateRequisitionComponent} from "./components/create-requisition/create-requisition.component";
import {TaskDetailComponent} from "./components/task-detail/task-detail.component";
import {TaskListComponent} from "./components/task-list/task-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'requisitions', pathMatch: 'full'},
  {path: 'requisitions', component: RequisitionListComponent},
  {path: 'requisitions/:id', component: RequisitionDetailComponent},
  {path: 'requisition', component: CreateRequisitionComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'tasks/:id', component: TaskDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
