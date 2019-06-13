import {Component, Input } from '@angular/core';
import { Note } from '../../common/consts/note.interface';
import { MatDialog } from '@angular/material';
import { NoteContentDialogComponent } from '../noteContentDialog/noteContentDialog.component';
import { CONTENT_DIALOG_SIZE } from '../../common/consts/note.const';

@Component({
  selector: 'noteTile',
  templateUrl: './noteTile.component.html',
  styleUrls: ['./noteTile.component.scss'],
})
export class NoteTileComponent {

  @Input() public note: Note;

  constructor(public dialog: MatDialog) {
  }

  public showNoteContent(noteContent: string) {
    this.dialog.open(NoteContentDialogComponent, {
      width: CONTENT_DIALOG_SIZE,
      data: {content: noteContent, id: this.note.id}
    });
  }
}
