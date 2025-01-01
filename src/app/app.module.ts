import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsService } from './documents.service';
import { ProposalListComponent } from './proposals/proposal-list/proposal-list.component';
import { ProposalShowComponent } from './proposals/proposal-show/proposal-show.component';
import { ProposalCreateComponent } from './proposals/proposal-create/proposal-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalShowComponent,
    ProposalCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [DocumentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
