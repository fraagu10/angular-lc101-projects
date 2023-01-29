import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   inactiveS: boolean = false;
   inactiveC: boolean = false;

   constructor() { }

   ngOnInit() { }

   resetButtons(): void {
      this.inactive = false;
      this.inactiveC = false;
      this.inactiveS = false;
   }

}
