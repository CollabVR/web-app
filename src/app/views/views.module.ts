import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundView } from './page-not-found/page-not-found.view';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [PageNotFoundView, UnauthorizedComponent],
  imports: [CommonModule],
})
export class ViewsModule {}
