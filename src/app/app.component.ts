import { Component } from '@angular/core';

// 创建一个类
export class Hero {
    id: number;
    name: String;
}

const HEROES: Hero[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ hero.name }}</h2>
    <div><label>id: </label>{{ hero.id }}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]='hero.name' placeholder='name' />
    </div>
    <ul class='heros'>
      <li *ngFor='let hero of heros' (click)='onClick(hero)'>
        <span>{{ hero.id }}: {{ hero.name }}</span>
      </li>
    </ul>
  `
})

export class AppComponent {
  title = 'Heros of MARVEL';
  heros = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Stark'
  };
  // styles: [`
  //   .selected {
  //     background-color: #CFD8DC !important;
  //     color: white;
  //   }
  //   .heroes {
  //     margin: 0 0 2em 0;
  //     list-style-type: none;
  //     padding: 0;
  //     width: 15em;
  //   }
  //   .heroes li {
  //     cursor: pointer;
  //     position: relative;
  //     left: 0;
  //     background-color: #EEE;
  //     margin: .5em;
  //     padding: .3em 0;
  //     height: 1.6em;
  //     border-radius: 4px;
  //   }
  //   .heroes li.selected:hover {
  //     background-color: #BBD8DC !important;
  //     color: white;
  //   }
  //   .heroes li:hover {
  //     color: #607D8B;
  //     background-color: #DDD;
  //     left: .1em;
  //   }
  //   .heroes .text {
  //     position: relative;
  //     top: -3px;
  //   }
  //   .heroes .badge {
  //     display: inline-block;
  //     font-size: small;
  //     color: white;
  //     padding: 0.8em 0.7em 0 0.7em;
  //     background-color: #607D8B;
  //     line-height: 1em;
  //     position: relative;
  //     left: -1px;
  //     top: -4px;
  //     height: 1.8em;
  //     margin-right: .8em;
  //     border-radius: 4px 0 0 4px;
  //   }
  // `]
}
