import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero  = {
    id: 1,
    name: 'Winstorm'
  };

  isSpecial = true;

  heroes: Hero[];
  selectedHero: Hero;

  // 2. 생성자로 이미 등록된 heroService 인스턴스를 주입 받는다.
  // => DI (dependancy Injection)
  constructor(private heroService: HeroService) {
    // 의존성 있게 코딩하는 경우
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();

    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  ngOnInit() {
  }

  onSave(e: any) {
    console.log(e);
    this.isSpecial = !this.isSpecial;
  }

  onSelected(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
