import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `{{ text | summary:10 }} `
})
export class CoursesComponent {
    // tslint:disable-next-line:max-line-length
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien magna, mattis et nisi vel, lacinia tincidunt urna. Sed a sodales sem, ut maximus metus. Quisque sed efficitur mauris. Phasellus varius lacinia lorem. Duis ultrices volutpat nulla at interdum. Cras eu posuere felis, et tristique ipsum ';

}
