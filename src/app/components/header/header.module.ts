import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SIDEBAR_TOGGLE_DIRECTIVES} from "../../shared/sidebar.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
