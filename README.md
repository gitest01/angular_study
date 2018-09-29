# Toh

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

* 서비스
1. 등록
- @Injectable()로 등록
- 등록되는 시점이 필요할때 등록
예로 providedIn: 'root' 경우는 root컴포넌트가 생성
될때 등록
2. 주입 (DI)
생성자로 주입을 받는다.

* ReactiveX
Observable 정의: 시간에 따른 Stream Of Data
Observable 데이터 수신 방법
