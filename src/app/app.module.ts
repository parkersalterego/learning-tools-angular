import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { TeacherDashComponent } from './components/teacher-dash/teacher-dash.component';
import { StudentDashComponent } from './components/student-dash/student-dash.component';
import { ParentDashComponent } from './components/parent-dash/parent-dash.component';
import { StudentWorkComponent } from './components/student-work/student-work.component';
//import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const appRoutes: Routes = [
  {path:'new-account', component:NewAccountComponent},
  {path:'login', component:LoginComponent},
  {path:'teacher-dash', component:TeacherDashComponent},
  {path:'student-dash', component:StudentDashComponent},
  {path:'parent-dash', component:ParentDashComponent},
  {path:'student-work', component:StudentWorkComponent},
  //{path:'navbar', component:NavbarComponent},
  {path:'user-details/:id', component:UserDetailsComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    LoginComponent,
    TeacherDashComponent,
    StudentDashComponent,
    ParentDashComponent,
    StudentWorkComponent,
    //NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
