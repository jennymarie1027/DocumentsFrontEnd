import { Component, OnInit, Input } from '@angular/core';
import { Proposal } from '../proposal';
import { HttpClient } from '@angular/common/http';
import { ProposalService } from 'src/app/proposal.service';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {

  proposal: Proposal;

  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: HttpClient
  ){}
  
  ngOnInit(): void {
    let propRequest = this.route.params.pipe(map((params: Params) => params.id));
    propRequest.subscribe((id: number) => {
      this.getProposal(id);
    });
  }

  getProposal(id: number) {
    this.proposalService.getProposal(id).subscribe((proposal: Proposal) => {
      this.proposal = proposal;
    });

  }
}
