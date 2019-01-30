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
                </table>
                <button class = "btn btn-primary" [class.active]="isActive" >Save </button>
                <button [style.background]="isActive ? 'blue' : 'white'" >Save </button>
                <div (click)="onDivClick()">
                    <button (click)="onSave($event)">show</button>
                </div>`
})
export class CoursesComponent {
    title = 'List Of Courses';
    courses;
    imgUrl = 'https://www.pexels.com/photo/nature-red-love-romantic-67636/';
    colSpan = 2;
    isActive = true;

    onDivClick() {
        console.log('Div was clicked');
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('Button was clicked',$event);
    }
  constructor(service: CoursesService) {
      // let service = new CoursesService();
      this.courses = service.getCourses();
  }

}
