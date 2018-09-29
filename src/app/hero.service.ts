import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

// 1. (root 컴포넌트가 만들어 질때) 해당 서비스를 컨테이너에 등록
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // 네트워크를 통해서 모델 정보 획득
    return of(HEROES).pipe(delay(3000));
  }
}
