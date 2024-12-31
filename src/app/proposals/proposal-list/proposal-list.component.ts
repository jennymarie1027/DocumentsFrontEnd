import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://www.google.com', 'Ruby on Rails', 15, 100, 3, 'clientemail.com')
  proposalTwo: Proposal = new Proposal(25, 'Def Company', 'http://www.google.com', 'React', 15, 100, 3, 'clientemail.com')
  proposalThree: Proposal = new Proposal(35, 'Xyz Company', 'http://www.google.com', 'Angular', 15, 100, 3, 'clientemail.com')
  
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
