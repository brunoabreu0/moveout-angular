import {Component} from '@angular/core';
import {
  faTasks,
  faList,
  faCloudDownloadAlt,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iconCloudDownload = faCloudDownloadAlt;
  iconList = faList;
  iconTasks = faTasks;
  iconEdit = faEdit;

  ngOnInit() {
    $('body').addClass('df');
  }
}
