import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Note } from '../../common/consts/note.interface';

@Component({
  selector: 'noteTile',
  templateUrl: './noteTile.component.html',
  styleUrls: ['./noteTile.component.scss'],
})
export class NoteTileComponent implements OnInit {
  @Input() public note: Note;
  @Output() public selectionChange: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    console.log('note', this.note);
  }

  public onClick(event: string): void {
    this.selectionChange.emit(event);
  }
}
