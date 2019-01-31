import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `<input [value]="email" (keyup.enter) = "email=$event.target.value; onKeyUp()"/>
                <input [(ngModel)]="email" (keyup.enter) = "onKeyUp()"/> <br/>
                {{course.title | uppercase | lowercase }} <br/>
                {{course.students | number }} <br/>
                {{course.rating | number:'1.1-4'}} <br/>
                {{course.price | currency:'AUD':true:'3.1-2' }} <br/>
                {{course.releaseDate | date:'long'}} <br/>`
})
export class CoursesComponent {
    email = 'me@example.com';
    course = {
                title : 'The Complete Angular Course',
                rating : 4.9745 ,
                students : 30123,
                price : 190.25,
                releaseDate : new Date(2016, 3, 1)
            };

  onKeyUp() {
      console.log(this.email);
  }
}
