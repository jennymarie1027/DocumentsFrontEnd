import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Document } from './documents/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService implements ErrorHandler{
  private docUrl = 'http://localhost:3001/freelance_documents.json';
  
  constructor(private http: HttpClient) { }

  handleError(error){
    console.log(error);
  }

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.docUrl)
    .pipe(
      map((res: any) =><Document[]> res),
    );
  }
}
