import { Component, OnInit } from '@angular/core';
// Import the service that we have created:
import { DataService } from '../data.service';
// rxjs - holds the data that is returned from the api.
import { Observable } from 'rxjs';
// Animation functions (some are required, some are extras depending on the purpose)
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { StaticReflector } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // animations:
  animations: [
    trigger('listStaggerAnimate', [
      transition('* <=> *', [
        query(':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }), //from
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'}))) //to
        ], { optional: true }),
        query(':leave', 
          animate('50ms', 
          style({ opacity: 0 })), {
            optional: true
          })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  // Property for holding the data from api:
  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}
