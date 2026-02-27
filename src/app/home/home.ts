import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {Navbar} from '../template/navbar/navbar';
import {Footer} from '../template/footer/footer';
import {Sidebar} from '../template/sidebar/sidebar';
import {DataService} from '../service/data-service';
import {PersonalInfo} from '../section/personal-info/personal-info';
import {Skill} from '../section/skill/skill';
import {Opensource} from '../section/opensource/opensource';
import {Experience} from '../section/experience/experience';
import {Education} from '../section/education/education';
import {Research} from '../section/research/research';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Footer,
    Sidebar,
    PersonalInfo,
    Skill,
    Opensource,
    Experience,
    Education,
    Research
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private dataService = inject(DataService);

  data = toSignal(this.dataService.getData());
}
