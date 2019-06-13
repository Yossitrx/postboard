import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostBoardComponent } from './components/postBoard/postBoard.component';
import { NoteTileComponent } from './components/noteTile/noteTile.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteDialogComponent } from './components/noteDialog/noteDialog.component';
import { NoteHandlerService } from './common/noteHandler/noteHandler.service';
import { NoteContentDialogComponent } from './components/noteContentDialog/noteContentDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostBoardComponent,
    NoteTileComponent,
    NoteDialogComponent,
    NoteContentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    NoteHandlerService
  ],
  entryComponents: [NoteDialogComponent, NoteContentDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
