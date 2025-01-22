import { Injectable } from "@angular/core";
import { environment } from "../../environments/env.production";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductDetailsRequestService {
  http: any;

  constructor() {}

  getOneProduct(id: number): Observable<any> {
    return this.http.get(`${environment.api_base_url}/products/${id}`);
  }
}
