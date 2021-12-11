import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Apps } from '../apps.model';
import { AppsService } from '../apps.service';


@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {

  apps: Apps[];


  constructor(private appsService: AppsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.appsService.appsMod
      .subscribe(
        (apps: Apps[]) => {
          this.apps = apps;
        }
      )
    this.apps = this.appsService.getApps();
  }

  newApp(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
