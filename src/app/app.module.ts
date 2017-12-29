import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AsideToggleDirective} from "./shared/aside.directive";
import {NAV_DROPDOWN_DIRECTIVES} from "./shared/nav-dropdown.directive";
import {SideBarModule} from "./components/side-bar/side-bar.module";
import {HeaderModule} from "./components/header/header.module";
import {UsersModule} from "./components/users/users.module";
import {APP_ROUTES} from "./app.routing";
import {HeaderComponent} from "./components/header/header.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {UsersComponent} from "./components/users/users.component";
import {LayoutsModule} from "../layouts/layouts.module";
import {FullLayoutComponent} from "../layouts/full-layout/full-layout.component";
import {RouterModule} from "@angular/router";
import {Module1Module} from "./components/module1/module1.module";
import {Module1Component} from "./components/module1/module1.component";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UsersService} from "./services/users.service";
import {MediaService} from "./services/media.service";

@NgModule({
  declarations: [
    AppComponent,
    NAV_DROPDOWN_DIRECTIVES,
    AsideToggleDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    LayoutsModule,
    SideBarModule,
    HeaderModule,
    UsersModule,
    Module1Module,
    HttpModule
  ],
  providers: [
    UsersService,
    MediaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FullLayoutComponent,
    HeaderComponent,
    SideBarComponent,
    UsersComponent,
    Module1Component
  ]
})
export class AppModule {
}
