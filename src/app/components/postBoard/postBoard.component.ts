import {Component, OnDestroy, OnInit} from '@angular/core';
import { NEW_DIALOG_SIZE, NOTES } from '../../common/consts/note.const';
import { Note, PartialNote } from '../../common/consts/note.interface';
import { MatDialog } from '@angular/material';
import { NoteDialogComponent } from '../noteDialog/noteDialog.component';
import { NoteHandlerService } from '../../common/noteHandler/noteHandler.service';
import { Subscription } from 'rxjs';
import { find } from 'lodash';

@Component({
  selector: 'postBoard',
  providers: [
  ],
  styleUrls: ['./postBoard.component.scss'],
  templateUrl: './postBoard.component.html',
})

export class PostBoardComponent implements OnInit, OnDestroy {

  public noteList: Set<Note> = new Set<Note>();
  public noteHandlerSubscription$: Subscription;

  constructor(public dialog: MatDialog,
              private noteHandlerService: NoteHandlerService) {}

  public ngOnInit(): void {
    this.noteList = NOTES;
    this.noteHandlerSubscription();
  }

  public onCreateNote(): void {
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      width: NEW_DIALOG_SIZE,
      data: {authorName: null, content: null, date: null}
    });

    dialogRef.afterClosed().subscribe((newNote: Note) => {
      if (newNote) {
        this.noteList.add(newNote);
      }
    });
  }

  public ngOnDestroy(): void {
    this.noteHandlerSubscription$.unsubscribe();
  }

  private noteHandlerSubscription(): void {
    this.noteHandlerSubscription$ = this.noteHandlerService.getNoteSubscription()
      .pipe()
      .subscribe((partialNote: PartialNote) => {
        const noteToRemove = find(Array.from(this.noteList), note => note.id === partialNote.id);
        this.noteList.delete(noteToRemove);
      });
  }
}
