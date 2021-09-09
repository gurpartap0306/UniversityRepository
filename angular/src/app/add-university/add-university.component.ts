import { Component, OnInit } from '@angular/core';
import { University } from '../Models/university';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.scss']
})
export class AddUniversityComponent implements OnInit {

  hosturl = 'http://dev.cs.smu.ca:8118';
  model:University=new University();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)
    this.http.post(this.hosturl + "/universities", this.model).subscribe(res =>{}, err =>{
    });
    alert("university added successfully");
  }

}
