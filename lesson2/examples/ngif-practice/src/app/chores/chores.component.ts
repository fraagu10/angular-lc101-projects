import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Buy groceries', "Exercise", ];
   finishedChores = ['Complete LaunchCode prep work', "Fold clothes", ];

   targetImage = '../../favicon.ico';

   constructor() { }

   ngOnInit() {
   }

}
