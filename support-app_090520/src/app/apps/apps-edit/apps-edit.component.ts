import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppsService } from '../apps.service';
import { Apps } from '../apps.model';

@Component({
  selector: 'app-apps-edit',
  templateUrl: './apps-edit.component.html',
  styleUrls: ['./apps-edit.component.css']
})
export class AppsEditComponent implements OnInit {

  id: number;
  editApps = false;
  appsForm: FormGroup;

  constructor(private route: ActivatedRoute, private appsService: AppsService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editApps = params['id'] != null;
          this.init();
        }
      );
  }

  onSubmit() {
    if(this.editApps){
      this.appsService.updateApp(this.id, this.appsForm.value);
    } else {
      this.appsService.addApp(this.appsForm.value);
    }
    this.deleteApp();
  }

  private init() {
    let appimageURLPath = '';
    let appURL;
    let appname = '';


    if (this.editApps) {
      const apps = this.appsService.getApp(this.id);
      appimageURLPath = apps.imageURLPath;
      appURL = apps.URL;
      appname = apps.name;
    }

    this.appsForm =  new FormGroup({
      'imageURLPath': new FormControl(appimageURLPath),
      'URL': new FormControl(appURL, Validators.required),
      'name': new FormControl(appname, Validators.required),
    });
  }

  deleteApp() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
