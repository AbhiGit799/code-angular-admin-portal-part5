# Backend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Description About this Code Push

Hi, <br/>

This is a simple Angular POC created by Abhishek Choubey. <br/>
In this POC I started building Admin Portal for Shopping website <br/>
This is 5th code push for the Admin Portal, for building this portal I am using Angular.<br/>

<br/>

<b>Highlights of 5th Push</b> <br/>

<b>Inside app.module.ts file add</b> <br/>
imports:[ <br/>
    SharedModule, <br/>
    AuthModule, <br/>
]  <br/>


<b>Inside auth.module.ts file</b><br/>
ReactiveFormsModule,<br/>
NgbModule<br/>


<b>Add routing in auth-routing.module.ts file</b><br>
{path:'auth/login',component }<br/>

<b> /auth/login <-------In url </b> <br/>

<b>Code in login component</b> </br>


<b>tsconfig.json-------------> strict = false </b> </br>

<b>Make sure  <router-outlet></router-outlet>  present in app.component.html file</b><br>

<b>Code in Login Page Done</b></br>

<b>Code In Register form is pending</b></br>

<br/>

<b>Highlights of 4th Push</b> <br/>

Inside shared--->services---> cmd run ng g s http <br/>

<b>Inside app.module.ts file Add </b> <br>

import {HttpClientModule} from '@angular/common/http';<br>
import { FormsModule } from '@angular/forms';<br>

imports:[<br>
    HttpClientModule,<br>
    FormsModule,<br>
]<br>

<b>URL Settings for API </b> <br/> 

Add inside environment.ts<======= file for development environment <br>

Add inside environment.prod.ts <===== file for production environment <br>

<b>Enum for Save/Update Button</b> <br>
ng g e db-operation <br>

<b>Custom Validation</b> <br/>
Inside Validators  create file validation.validator.ts  <br/>

<b>Create interface for Left side menu</b><br>
Inside interface folder menu.interface.ts<br>

<b>Create service for Menu data</b><br>
ng g s menu <br>

 <br/>

<b>Highlights of 3rd Push</b> <br/>

<b>Inside app create folders we create following folders</b> <br/> 
1) components <br/>
2) interceptors <br/>
3) validations  <br/>

 <br/>

<b>Inside components folder  we will create</b><br/>
ng g m dashboard --routing <br/>
create component inside dashboard module. <br/>
ng g c dashboard/dashboard --flat --skip-tests <br/>

<b>Inside components folder  we will create</b><br/>
ng g m auth --routing <br/>
Inside auth feature module we will create <br/>
login logout component <br/>
ng g c auth/login  <br/>



<b>Guard for login<b> <br/>
============ <br/>
ng g g auth/auth <br/>


CanActivate <br/>


<b>Service for auth gurad<b><br/>
=================== <br/>
ng g s auth/auth <br/>



<b>Inside components folder  we will create<b><br/>
ng g m invoice --routing <br/>

ng g m components/masters --routing <br/>

<b> Inside masters components we will create </b> <br/> 
ng g c brandlogo <br/>
ng g c category <br/>
ng g c tag <br/>
ng g c color<br/>
ng g c usertype<br/>
ng g c size<br/>

<br>

<b> Inside component folder</b> <br>
ng g m products --routing <br>
Inside products <br>
ng g c products/manage/add-product <br>
ng g c products/manage/product-list <br>

<b>Note:- Inside Products component manage is folder name.</b> <br/>


<b>Inside component folder</b><br>
====================<br>
ng g m reports --routing<br>
Inside reports<br>
ng g c reports/reports --flat<br>


<b>Inside component folder</b><br>
==================== <br>
ng g m sales --routing <br>
Inside sales <br>
ng g c sales/orders  <br>
ng g c sales/transactions <br>


<b>Inside component folder</b> <br>
==================== <br>
ng g m users --routing <br>
Inside users <br>
ng g c users/add-user <br>
ng g c users/list-user <br>


<b>Inside components</b><br>
================<br>
ng g m settings --routing <br>
inside settings<br>
ng g c settings/profile<br>


<b>shared </b><br>
====== <br>
Inside app folder we create shared feature module, for features which are common. <br>

ng g m shared <br/>

<b>Important Note:- Inside shared module we will not create routing file. </b> <br/>
Because shared contains feature which are common in whole application <br/>
so we can directly put selector where ever we need <br/>



<b>Inside shared</b>------> folder components <br/>
--------------------------------------------------- <br/>
ng g c header <br/>
ng g c footer <br/>
ng g c sidebar <br/>
ng g c feather-icon<br/>
ng g c breadcrumb<br/>


<b>master page = layout component </b><br/>
===========================<br/>
ng g c layout  <--------shared ke andar <br/>
<br/>

<b>Best practice when we apply lazy loading.</b> <br/>
Create separate file for routing<br/>
Don;t disturb app-routing.module.ts file<br/>
Inside shared-->routes folder-->content.routes.ts<br/>
Inside shared-->Create folder services<br/>
Inside shared-->Create folder interface<br/><br/>

<b>Highlights of 2nd Push</b> <br/>

<b> Following commands are used in this POC </b> <br/>
ng new backend    //for creating project  <br/>
stylesheet format would you like to use? = SCSS  <br/>
npm i bootstrap  //for installing bootstrap <br/>
npm install font-awesome  //for installing font awesome <br/>


<b>ng-bootstrap ; Installing from npm is simply doing </b> <br/>
npm install @ng-bootstrap/ng-bootstrap  <br/>
npm install @angular/localize --save  <br/>

Version Used ==> ng-bootstrap v15.1.0 <br/>
https://ng-bootstrap.github.io/#/components/progressbar/examples <br/>
npm i --save-dev @types/feather-icons  <--------------- This worked <br/>

const feather = require('feather-icons');  //<--------------------- This is required when we use above command inside ts file. <br/>

https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam <br/>

https://feathericons.com/?query=git     <------------------ Official site which contains icons. <br/>

ng g c feather-icon --skip-tests  <br/>

ngx-toastr <br/>
========
<br/>
npm i ngx-toastr@12.0.0
<br/>
npm install @angular/animations@12.0.0 --save
<br/>

<b>Important Note </b> <br/>

tsconfig.json <br/>
{
<br/>
...
<br/>
  complilerOptions: { <br/>
        ...
        "skipLibCheck": true <br/>
    } <br/>
} 

<br/>
Inside styles.css -----------> @import '../node_modules/ngx-toastr/toastr-old.css';  //<=============Imp
<br/>

npm i sweetalert2@11.7.1
<br/>
https://sweetalert2.github.io/#examples
<br/>
https://sweetalert2.github.io/#usage
<br/> <br/>


<b>Highlights of 1st Push</b> <br/>
ng new backend //for creating project
stylesheet format would you like to use? = SCSS
npm i bootstrap //for installing bootstrap
npm install font-awesome //for installing font awesome

<br/><br/>

<b> Version details of third party packages </b>
<br/>

"bootstrap": "^5.2.3",<br/>
"feather-icons": "^4.29.0",<br/>
"font-awesome": "^4.7.0",<br/>
"ngx-toastr": "^12.0.0",<br/>
"rxjs": "~7.5.0",<br/>
"sweetalert2": "^11.7.1",<br/>


Software Used <br/>
node --version = v14.20.0 <br/>
npm --version = 6.14.17 <br/>
ng version <br/>
Angular CLI: 14.0.0 <br/>


<br/>










