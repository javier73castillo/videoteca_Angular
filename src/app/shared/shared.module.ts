import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections/collections.component';



@NgModule({
  declarations: [
    CollectionsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ], exports: [CollectionsComponent, SearchComponent]
})
export class SharedModule { }
