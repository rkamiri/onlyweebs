import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-onelist',
  templateUrl: './onelist.component.html',
  styleUrls: ['./onelist.component.css']
})

export class OnelistComponent implements OnInit {

  list = [
    {name: 'One Piece', seen: '1', total: '10'},
    {name: 'Death Note', seen: '2', total: '10'},
    {name: 'Naruto', seen: '4', total: '10'},
    {name: 'Tokyo Ghoul', seen: '10', total: '10'},
    {name: 'SNK', seen: '2', total: '10'}
  ];
  index: 1;
  closeResult = '';

  str: object;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
