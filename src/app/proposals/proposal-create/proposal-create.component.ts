import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProposalService } from 'src/app/proposal.service';

@Component({
  selector: 'app-proposal-create',
  templateUrl: './proposal-create.component.html',
  styleUrls: ['./proposal-create.component.css']
})
export class ProposalCreateComponent  {

  proposal =  new Proposal();
  submitted = false;

  constructor(private http: HttpClient,
    private proposalService: ProposalService
  ) { }

  proposalForm = new FormGroup({
    customer: new FormControl('', Validators.required),
    portfolio_url: new FormControl('', Validators.required),
    tools: new FormControl('', Validators.required),
    estimated_hours: new FormControl('', Validators.required),
    hourly_rate: new FormControl('', Validators.required),
    weeks_to_complete: new FormControl('', Validators.required),
    client_email: new FormControl(''),
  })

  generateProposal(){
    console.log('hi')
    // this.submitted=true;
    this.proposalService.createProposal(this.proposalForm.value).subscribe((res) => {
      console.log('res in generate proposal = ', res) 
    })
  }
}
