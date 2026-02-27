import {Component, Input} from '@angular/core';
import {SkillsDTO} from '../../dto/skills.dto';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {

  @Input({ required: true })
  skills!: SkillsDTO;
}
