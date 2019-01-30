import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: ` <h2> {{ "String Interpolation Example " + "Title : " + title }} </h2>
                <ul>
                    <li *ngFor="let course of courses"> {{ course }} </li>
                </ul>
                <img  [src] = "imgUrl"/>
                <table>
                    <tr>
                        <td [attr.colsapn]="colSpan"> </td>
                    </tr>
                </table>`
})

export class CoursesComponent {
    title = 'List Of Courses';
    courses;
    imgUrl = "https://www.pexels.com/photo/nature-red-love-romantic-67636/";
    colSpan = 2;

  constructor(service: CoursesService) {
      // let service = new CoursesService();
      this.courses = service.getCourses();
  }

}
