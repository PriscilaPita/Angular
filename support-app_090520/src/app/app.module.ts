import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailComponent } from './customers/customers-detail/customers-detail.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersItemComponent } from './customers/customers-list/customers-item/customers-item.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksEditComponent } from './tasks/tasks-edit/tasks-edit.component'
import { TasksService } from './tasks/tasks.service';
import { AppRouteModule } from './app_route.module';
import { CustomersSelectedComponent } from './customers/customers-selected/customers-selected.component';
import { CustomersEditComponent } from './customers/customers-edit/customers-edit.component';
import { AppsComponent } from './apps/apps.component';
import { AppsListComponent } from './apps/apps-list/apps-list.component';
import { AppsDetailComponent } from './apps/apps-detail/apps-detail.component';
import { AppsItemsComponent } from './apps/apps-list/apps-items/apps-items.component';
import { AppsEditComponent } from './apps/apps-edit/apps-edit.component';
import { AppsSelectedComponent } from './apps/apps-selected/apps-selected.component'


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersDetailComponent,
    CustomersListComponent,
    CustomersItemComponent,
    HeaderComponent,
    TasksComponent,
    TasksEditComponent,
    CustomersSelectedComponent,
    CustomersEditComponent,
    AppsComponent,
    AppsListComponent,
    AppsDetailComponent,
    AppsItemsComponent,
    AppsEditComponent,
    AppsSelectedComponent
    ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    ReactiveFormsModule
  ],

  providers: [TasksService],
  bootstrap: [AppComponent]
})

export class AppModule { }
