import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/env.production";

@Injectable({
  providedIn: "root",
})
export class ProductsRequestService {
  constructor(private http: HttpClient) {}

  getProductsList(): Observable<any> {
    return this.http.get(`${environment.api_base_url}/products`, {
      // params: {
      //   sortBy: "name",
      //   order: 'asc',
      // },
      // headers: {
      //   "Accept-Language": "ar",
      //   Autherization: "ACCESS_TOKEN",
      // },
    });
  }
  getOneProduct(idParam: number): Observable<any>{
    return this.http.get(`${environment.api_base_url}/products/${idParam}`)
  }
}
