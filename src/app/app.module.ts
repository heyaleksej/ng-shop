import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from './components/error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorComponent,
    FilterProductPipe,
    ModalComponent,
    CreateProductComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
