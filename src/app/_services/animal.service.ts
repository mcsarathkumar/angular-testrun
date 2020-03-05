import { Injectable } from '@angular/core';
import { AnimalStructure } from '../_models/animal.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import {API_ENDPOINT } from '../_constants/animal.enum';

@Injectable()
export class AnimalService {

animals: AnimalStructure[] = [];
  constructor(private http: HttpClient) { }

  getAnimals() {
    if (this.animals.length > 0) {
      return of(this.animals);
    } else {
      return this.fetchAnimals().pipe(map(response => {
        this.animals = response;
        return this.animals;
      }));
    }
  }

  fetchAnimals(): Observable<AnimalStructure[]> {
    return this.http.get(API_ENDPOINT + 'assets/animals.json') as Observable<AnimalStructure[]>;
  }


}