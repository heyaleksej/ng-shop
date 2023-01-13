import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
// import {products as data} from "./data/products"
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'minin Ng';
  // products: IProduct[] = []
  products$: Observable<IProduct[]>
  loading = false

  term = ''

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.productsService.getAll().subscribe((product) => {
    // this.products = product
    // this.loading = false
    // })
    this.products$ = this.productsService.getAll().pipe(
      tap(()=>{this.loading = false})
    )
  }
}
