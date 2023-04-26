import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseresg',
  templateUrl: './courseresg.component.html',
  styleUrls: ['./courseresg.component.css']
})
export class CourseresgComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  id: string = '';
  numsubjects: string = '';
  intensityslevel: string = '';
  interestfields: string = '';
  interestsubjects: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  Submit(): void {
    const bodyData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      id: this.id,
      numsubjects: this.numsubjects,
      intensityslevel: this.intensityslevel,
      interestfields: this.interestfields,
      interestsubjects: this.interestsubjects
    };
    this.http.post('http://localhost:9992/recommender/store-csv', bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Data stored successfully in CSV file');
        this.router.navigateByUrl('/recommenderpage');
      },
      (error) => {
        console.log(error);
        alert('Error storing data in CSV file');
      }
    );

  }
}
    // courseForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private courseService: CourseService) {
  //   this.courseForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     studentID: ['', Validators.required],
  //     intensityLevel: ['', Validators.required],
  //     interestFields: ['', Validators.required],
  //     interestSubjects: ['', Validators.required],
  //   });
  // }

  // onSubmit() {
  //   if (this.courseForm.valid) {
  //     this.courseService.submitForm(this.courseForm.value).subscribe(
  //       (response) => {
  //         console.log('Data stored successfully in CSV file');
  //         this.router.navigate(['/recommenderpage']);
  //       },
  //       (error) => {
  //         console.error('Error submitting form:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }


