import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/mvc-api/services/ClassManagementSystem.API.Controllers.Test.Service';
import { IntValue } from '../services/mvc-api/datatypes/ClassManagementSystem.API.Dtos.IntValue';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.scss']
})
export class ClasslistComponent implements OnInit {

  constructor(public testService: TestService) { }

  a: number = 0;
  b: number = 0;
  c: number = 0;

  calculate(){
    this.testService.Add(this.a, this.b).subscribe((value: IntValue) => {
       this.c = value.Value;
    });
  }

  ngOnInit() {
  }

}
