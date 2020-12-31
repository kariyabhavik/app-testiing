import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FlautaService {
  url="http://localhost:3000/flauta-products"
  constructor(private http:HttpClient) {}
  getList(){
  return this.http.get(this.url);
  }
}
