import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { invoke } from 'lodash';
import { Note } from '../consts/note.interface';

@Injectable()
export class NoteHandlerService implements OnDestroy {

  public noteHandler$: ReplaySubject<Note> = new ReplaySubject();

  public getNoteSubscription(): ReplaySubject<Note> {
    if (!this.noteHandler$) {
      this.initNoteHandlerSubscription();
    }
    return this.noteHandler$;
  }

  public ngOnDestroy(): void {
    invoke(this.noteHandler$, 'unsubscribe');
  }

  public onRemovedNote(note) {
    this.noteHandler$.next(note);
  }

  public generateDateString(): string {
    return new Date().toLocaleDateString('en-US');
  }

  private initNoteHandlerSubscription() {
    this.noteHandler$ = new ReplaySubject<Note>(1);
  }

}
