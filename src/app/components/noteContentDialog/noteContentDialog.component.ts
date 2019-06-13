import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PartialNote } from '../../common/consts/note.interface';
import { NoteHandlerService } from '../../common/noteHandler/noteHandler.service';


@Component({
  selector: 'noteContentDialog',
  providers: [
  ],
  styleUrls: ['./noteContentDialog.component.scss'],
  templateUrl: './noteContentDialog.component.html',
})
export class NoteContentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NoteContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public note: PartialNote,
    private noteHandlerService: NoteHandlerService) {
  }

  public onDoneClick(): void {
    this.dialogRef.close();
  }

  public onDeleteClick(note): void {
    this.noteHandlerService.onRemovedNote(note);
    this.dialogRef.close(note);
  }
}
