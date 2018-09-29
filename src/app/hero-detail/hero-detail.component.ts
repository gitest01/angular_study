import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // 자식이 부모로 부터 데이터를 받는 방법
  @Input()
  selectedHero: Hero;

  constructor(private route: ActivatedRoute) {
    console.log('hero detail Created')
    // /heroes/:hero_id 의 hero_id가 바뀔때 생성자는 한번만 호출
    // subscibe 콜백은 데이터가 들어올때마다 호출
    this.route.params
      .subscribe(params => {
        console.log(params);
        // hero_id를 획득 후 서비스를 통해서 데이터를 얻어서
        // selectedHero에 대입
      });
  }

  ngOnInit() {
  }

}
