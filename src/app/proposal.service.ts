import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
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

  createProposal(proposal: Proposal) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    // let options = new HttpOptions({headers: headers});
    return this.http.post(this.proposalUrl, JSON.stringify(proposal), {headers: headers})
    .pipe(
      map((res: any) => {
        console.log('res in create proposal = ', res)
        return res
      })
    )
  }
}
