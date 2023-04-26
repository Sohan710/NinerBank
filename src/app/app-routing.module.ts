import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LoginComponent } from './login/login.component';
import { RegspageComponent } from './regspage/regspage.component';
import { CourseresgComponent } from './courseresg/courseresg.component';
import { CourseadvComponent } from './courseadv/courseadv.component';
import { CoursecatelogComponent } from './coursecatelog/coursecatelog.component';
import { CourseElecComponent } from './course-elec/course-elec.component';
import { CourseCompComponent } from './course-comp/course-comp.component';
import { CourseDsbaComponent } from './course-dsba/course-dsba.component';
import { CourseItisComponent } from './course-itis/course-itis.component';
import { ResumebuildComponent } from './resumebuild/resumebuild.component';
import { SelfassessmentComponent } from './selfassessment/selfassessment.component';
import { StrategiesjobComponent } from './strategiesjob/strategiesjob.component';
import { InterviewtipComponent } from './interviewtip/interviewtip.component';
import { RecommenderpageComponent } from './recommenderpage/recommenderpage.component';


const routes: Routes = 
[  
    {path: '', redirectTo: '/homepage', pathMatch: 'full' },
    {path:'homepage',component:HomepageComponent},
    {path:'myprofile',component:MyprofileComponent},
    {path:'login',component:LoginComponent},
    {path:'regspage',component:RegspageComponent},
    {path:'courseadv',component:CourseadvComponent},
    {path:'courseresg',component:CourseresgComponent},
    {path:'coursecatelog',component:CoursecatelogComponent},
    {path:'courseelec',component:CourseElecComponent},
    {path:'coursecomp',component:CourseCompComponent},
    {path:'coursedsba',component:CourseDsbaComponent},
    {path:'courseitis',component:CourseItisComponent},
    {path: 'myprofile/:id', component: MyprofileComponent},
    {path:'resumebuild',component:ResumebuildComponent},
    {path:'selfassessment',component:SelfassessmentComponent},
    {path:'strategiesjob',component:StrategiesjobComponent},
    {path:'interviewtop',component:InterviewtipComponent},
    {path:'recommenderpage',component:RecommenderpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
