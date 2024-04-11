import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '@envs/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products = signal<any>([]);

  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;

  public getProducts(): void {
    this._http.get<any>(`${this._endPoint}`)
      .pipe(tap((data: any[]) => this.products.set(data)))
      .subscribe();
  }

  public getProductsById(id: number) {
    return this._http.get<any[]>(`${this._endPoint}/${id}`)
  }



}
