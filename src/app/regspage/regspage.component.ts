import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-regspage',
  templateUrl: './regspage.component.html',
  styleUrls: ['./regspage.component.css']
})
export class RegspageComponent {
  
  firstname: string ="";
  lastname: string ="";
  email: string ="";
  id: string ="";
  password: string ="";

  constructor(private http: HttpClient)
  {
  }
 
  ngOnInit(): void
  {
  }
 
  register()
  {
    let bodyData =
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "id" : this.id,
      "password" : this.password,
    };
    this.http.post("http://localhost:9992/student/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
    });
  }
 
  save()
  {
    this.register();
  }
}
