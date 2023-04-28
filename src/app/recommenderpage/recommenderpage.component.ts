import { Component } from '@angular/core';
import { PythonScriptService } from '../python-script.service';
@Component({
  selector: 'app-recommenderpage',
  templateUrl: './recommenderpage.component.html',
  styleUrls: ['./recommenderpage.component.css']
})
export class RecommenderpageComponent {
  output: string = '';

  constructor(private pythonScriptService: PythonScriptService) {}

  ngOnInit(): void {
    this.pythonScriptService.getPythonScriptOutput({ INTERESTSUBJECTS: 'YourSearchTerm' }).subscribe(
      (data) => {
        console.log(data);
        if (data.status === 'Success') {
          const recommendedCourses = data.data;
  
          let outputHtml = '';
          recommendedCourses.forEach((course: { [x: string]: any; }) => {
            outputHtml += `<div>
              <h3>${course['Course Name']}</h3>
              <p>Skills: ${course['Skills']}</p>
            </div>`;
          });
  
          this.output = outputHtml;
        } else {
          this.output = data.message;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
