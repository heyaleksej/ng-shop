import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root' //чтобы сервис был автоматически зарегистрирован в корневом модуле
})
export class ProductsService {
  constructor(private http: HttpClient,
              private errorService: ErrorService
  ) { //также нужно прописать в импорт в app.module

  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5)
    }).pipe(
      delay(2000),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

}
