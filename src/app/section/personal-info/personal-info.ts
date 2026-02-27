import {Component, Input} from '@angular/core';
import {PersonalinfoDTO} from '../../dto/personalinfo.dto';

@Component({
  selector: 'app-personal-info',
  imports: [],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css',
})
export class PersonalInfo {

  @Input({ required: true })
  personalInfo!: PersonalinfoDTO;
}
