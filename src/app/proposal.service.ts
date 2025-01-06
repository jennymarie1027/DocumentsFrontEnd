import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proposal } from './proposals/proposal';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  proposalUrl = 'http://localhost:3002/proposal_dbs';

  constructor(private http: HttpClient) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalUrl)
    .pipe(
      map((res: any) => <Proposal[]> res),
    );
  }

  getProposal(id: number) {
    return this.http.get(`${this.proposalUrl}/${id}`)
    .pipe(
      map((res: any) => res)
    )
  }
}
