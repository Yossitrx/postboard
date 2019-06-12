import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostBoardComponent } from './components/postBoard/postBoard.component';

const routes: Routes = [
  { path: '**', redirectTo: 'postBoard' },
  { path: 'postBoard', component: PostBoardComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
