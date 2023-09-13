import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ekart';
  // fullName: string = '';
  @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef>;
  // showFullName() {
  //   let name = '';
  //   this.inputElements.forEach((el) => {
  //     name += el.nativeElement.value + ' ';
  //   });
  //   this.fullName = name.trim();
  // }
  toggle: Boolean = false;
  onToggle() {
    this.toggle = !this.toggle;
  }
}
