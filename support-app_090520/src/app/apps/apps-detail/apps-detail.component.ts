import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppsService } from '../apps.service';
import { Apps } from '../apps.model';

@Component({
  selector: 'app-apps-detail',
  templateUrl: './apps-detail.component.html',
  styleUrls: ['./apps-detail.component.css']
})
export class AppsDetailComponent implements OnInit {

  apps: Apps;
  id: number;

  constructor(private appsService: AppsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.apps = this.appsService.getApp(this.id);
        }
      );
  }

  newApp() {
    this.router.navigate(['edit'], {relativeTo:this.route})
  }

  deleteApp() {
    this.appsService.deleteApp(this.id);
    this.router.navigate(['/apps']);
  }

}
