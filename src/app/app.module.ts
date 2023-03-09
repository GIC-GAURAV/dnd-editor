import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InnerItemComponent } from './inner-item/inner-item.component';
import { ParentComponent } from './parent/parent.component';
import { ElementWrapperComponent } from './element-wrapper/element-wrapper.component';
import { LayoutModule, TabStripModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogsModule, WindowModule } from '@progress/kendo-angular-dialog';
@NgModule({
  declarations: [
    AppComponent,
    InnerItemComponent,
    ParentComponent,
    ElementWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    LabelModule,
    DropDownsModule,
    DialogsModule,
    WindowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
