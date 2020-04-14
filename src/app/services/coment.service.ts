import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ComentModel} from "../models/ComentModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  constructor(private http: HttpClient) {
  }
  getComent(): Observable<ComentModel[]>{
    return this.http.get<ComentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
