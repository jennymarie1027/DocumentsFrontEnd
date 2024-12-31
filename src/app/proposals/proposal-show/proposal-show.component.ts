import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
  
  id: number
  routeId: any;

  constructor(
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];  // + is used to convert string to number
    })
  }

}
