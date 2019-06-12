import { Component, OnInit } from '@angular/core';
import { get } from 'lodash';
import { NOTES } from '../../common/consts/note.const';
import { Note } from '../../common/consts/note.interface';

@Component({
  selector: 'postBoard',
  providers: [
  ],
  styleUrls: ['./postBoard.component.scss'],
  templateUrl: './postBoard.component.html',
})
export class PostBoardComponent implements OnInit {

  public noteList: Note[];

  constructor() {}

  public ngOnInit(): void {
    this.noteList = NOTES;
    // this.stockService.getStockListObservable()
    //   .pipe()
    //   .subscribe(
    //     (stockData) => {
    //       const nameToAdd: string = get(stockData, 'symbol', stockData);
    //       this.stockList.add(nameToAdd);
    //     }, (errorMsg) => console.log('Error', errorMsg));
    // this.apiErrorHandlerSubscription();
    // this.workInProgressObservable();
  }
}
