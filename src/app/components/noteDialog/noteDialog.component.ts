import {Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from '../../common/consts/note.interface';
import { isEmpty } from 'lodash';
import { NoteHandlerService } from '../../common/noteHandler/noteHandler.service';

@Component({
  selector: 'noteDialog',
  providers: [
  ],
  styleUrls: ['./noteDialog.component.scss'],
  templateUrl: './noteDialog.component.html',
})

export class NoteDialogComponent {

  errorHandler: boolean;

  constructor(
    public dialogRef: MatDialogRef<NoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note,
    private noteHandlerService: NoteHandlerService) {}

  public onInputChange(changes): void {
    this.errorHandler = isEmpty(changes);
  }

  public onTextChange(changes): void {
    this.errorHandler = isEmpty(changes);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onValidateNote(note: Note): void {
    if (isEmpty(note.authorName)) {
      this.errorHandler = true;
    } else if (isEmpty(note.content)) {
      this.errorHandler = true;
    } else {
      this.errorHandler = false;
      this.enrichAndSaveNote(note);
    }
  }

  private enrichAndSaveNote(note): void {
    note.date = this.noteHandlerService.generateDateString();
    this.dialogRef.close(note);
  }
}
