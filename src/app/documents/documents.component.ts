import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents: Document[] = [
    {title: 'doc 1', description: 'desc 1', file_url: 'http://google.com', updated_at: 123456, image_url: 'http://google.com'},
    {title: 'doc 2', description: 'desc 2', file_url: 'http://google.com', updated_at: 7890, image_url: 'http://yahoo.com'},
    {title: 'doc 3', description: 'desc 3', file_url: 'http://google.com', updated_at: 123456, image_url: 'http://google.com'},
    {title: 'doc 4', description: 'desc 4', file_url: 'http://google.com', updated_at: 7890, image_url: 'http://yahoo.com'},
    {title: 'doc 5', description: 'desc 5', file_url: 'http://google.com', updated_at: 123456, image_url: 'http://google.com'},
    {title: 'doc 6', description: 'desc 6', file_url: 'http://google.com', updated_at: 7890, image_url: 'http://yahoo.com'},
  ]



}
