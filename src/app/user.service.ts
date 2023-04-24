// import {User} from './user.model';

// import { Component, OnInit, EventEmitter, Injectable} from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import {map} from 'rxjs/operators';

// @Injectable()
// export class UserServices
// {
//   user = User;
//   constructor(private http:HttpClient)
//     {

//     }
//     fetchData()
//     {
//         this.http.get<{[key:string]:User}>("http://localhost:9992/profile/profileControler")
//     .pipe(map(responseData => {
//         const postArray =[];
//         for (const key in responseData)
//         {
//             if(responseData.hasOwnProperty(key))
//             {
//                 postArray.push({...responseData[key],id:key})
//             }
//         }

//         return postArray;

           
//     }))
//     .subscribe(posts =>{
//         console.log("array"+posts);
  
//     //    this.user = posts;
//      })
   
//     ;
//     }
// }