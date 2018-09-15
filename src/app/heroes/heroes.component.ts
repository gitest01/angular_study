import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Winstorm'
  };

  isSpecial = true;

  heroes = HEROES;
  selectedHero: Hero;

  constructor() {}

  ngOnInit() {
  }

  onSave(event: any) {
    console.log(event);
    // this.isSpecial = !this.isSpecial; // toggle
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
}

