import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-list',
  templateUrl: './one-list.component.html',
  styleUrls: ['./one-list.component.css']
})
export class OneListComponent implements OnInit {

  list = [
    { name: 'One Piece', seen: '1', total : '10'},
    { name: 'Death Note', seen: '2', total : '10'},
    { name: 'Naruto', seen: '4', total : '10'},
    { name: 'Tokyo Ghoul', seen: '10', total : '10'},
    { name: 'SNK', seen: '2', total : '10'}
  ];
  index: 1;

  constructor() {}

  ngOnInit(): void {
  }

}
