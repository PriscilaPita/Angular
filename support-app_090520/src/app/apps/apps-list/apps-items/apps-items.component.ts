import { Component, OnInit, Input } from '@angular/core';
import { Apps } from '../../apps.model';

@Component({
  selector: 'app-apps-items',
  templateUrl: './apps-items.component.html',
  styleUrls: ['./apps-items.component.css']
})
export class AppsItemsComponent implements OnInit {
  @Input() apps: Apps;
  @Input() index: number;


  constructor() { }

  ngOnInit() {
  }

}
