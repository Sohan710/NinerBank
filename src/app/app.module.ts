import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CoursecatelogComponent } from './coursecatelog/coursecatelog.component';
import { CourseadvComponent } from './courseadv/courseadv.component';
import { CourseresgComponent } from './courseresg/courseresg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegspageComponent } from './regspage/regspage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { CourseElecComponent } from './course-elec/course-elec.component';
import { CourseCompComponent } from './course-comp/course-comp.component';
import { CourseItisComponent } from './course-itis/course-itis.component';
import { CourseDsbaComponent } from './course-dsba/course-dsba.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumebuildComponent } from './resumebuild/resumebuild.component';
import { InterviewtipComponent } from './interviewtip/interviewtip.component';
import { SelfassessmentComponent } from './selfassessment/selfassessment.component';
import { StrategiesjobComponent } from './strategiesjob/strategiesjob.component';
import { RecommenderpageComponent } from './recommenderpage/recommenderpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PythonScriptService } from './python-script.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MyprofileComponent,
    CoursecatelogComponent,
    CourseadvComponent,
    CourseresgComponent,
    NavbarComponent,
    LoginpageComponent,
    RegspageComponent,
    LoginComponent,
    CourseElecComponent,
    CourseCompComponent,
    CourseItisComponent,
    CourseDsbaComponent,
    ResumebuildComponent,
    InterviewtipComponent,
    SelfassessmentComponent,
    StrategiesjobComponent,
    RecommenderpageComponent,
    
  ],
  imports: [
    BrowserModule,
    MdbCheckboxModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [PythonScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
