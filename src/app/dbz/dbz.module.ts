import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PageComponent } from './pages/page/page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharcacterComponent } from './components/add-charcacter/add-charcacter.component';




@NgModule({
  declarations: [
    PageComponent,
    ListComponent,
    AddCharcacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageComponent
  ]
})
export class DbzModule { }
