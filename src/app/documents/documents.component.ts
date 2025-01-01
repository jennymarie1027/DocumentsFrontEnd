import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents: Document[] = [];
  errorMessage = 'No Documents Found'

  constructor(private docService: DocumentsService){}

  ngOnInit(): void {
    this.getDocs();
  }

  getDocs(): void {
    this.docService.getDocuments().subscribe((documents) => {
      this.documents = documents;
      error => this.errorMessage = <any>error
    });
  }

}
