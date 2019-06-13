import { Note } from './note.interface';

export const NOTES: Set<Note> = new Set <Note> ([
  {
    authorName: 'WILLIAM',
    content: 'Lorem ipsum dolor sit amet',
    date: new Date(2019, 5, 1).toLocaleDateString('en-US'),
    id: 1,
  },
  {
    authorName: 'JAMES',
    content: 'Lorem ipsum dolor sit amet',
    date: new Date(2019, 5, 2).toLocaleDateString('en-US'),
    id: 2,
  },
  {
    authorName: 'DANIEL',
    content: 'Lorem ipsum dolor sit amet',
    date: new Date(2019, 5, 3).toLocaleDateString('en-US'),
    id: 3,
  },
  {
    authorName: 'a',
    content: 'Lorem ipsum dolor sit amet',
    date: new Date(2019, 5, 4).toLocaleDateString('en-US'),
    id: 4,
  },
  {
    authorName: 'a',
    content: 'Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna ' +
      'aliqua. Ut enim ad minim veniam, quis ' +
      'nostrud exercitation ullamco laboris ' +
      'nisi ut aliquip',
    date: new Date(2019, 5, 5).toLocaleDateString('en-US'),
    id: 5,
  },
  {
    authorName: 'SAMUEL',
    content: 'Lorem ipsum dolor sit amet',
    date: new Date(2019, 5, 6).toLocaleDateString('en-US'),
    id: 6,
  },
  {
    authorName: 'YOSSI',
    content: 'Lorem ipsum dolor sit amet',
    date: new Date(2019, 5, 7).toLocaleDateString('en-US'),
    id: 7,
  },
  {
    authorName: 'DON',
    content: 'Lorem ipsum dolor sit amet',
    date: new Date(2019, 5, 8).toLocaleDateString('en-US'),
    id: 8,
  }
]);

export const NEW_DIALOG_SIZE = '450px';
export const CONTENT_DIALOG_SIZE = '350px';
