import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';
import { ProposalService } from 'src/app/proposal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  
  proposals: Proposal[] = []
  constructor(private proposalService: ProposalService, private router: Router) { }

  ngOnInit(): void {
    this.getProposals();
  }

  getProposals(): void {
    this.proposalService.getProposals().subscribe((props) => {
      this.proposals = props;
    })
  }

  goToShow(proposal: Proposal): void{
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }
}
