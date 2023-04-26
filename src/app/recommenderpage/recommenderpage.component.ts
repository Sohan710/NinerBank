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
        // Process the data here as needed.
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
