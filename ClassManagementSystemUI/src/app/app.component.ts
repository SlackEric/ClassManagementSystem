
import { Component } from '@angular/core';
import { TestService } from './services/mvc-api/services/ClassManagementSystem.API.Controllers.Test.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Class Management System';

  public constructor(public testService: TestService) {

  }
}
