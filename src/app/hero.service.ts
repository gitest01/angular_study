import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

// 1. (root 컴포넌트가 만들어 질때) 해당 서비스를 컨테이너에 등록
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    // 네트워크를 통해서 모델 정보 획득
    return HEROES;
  }
}
