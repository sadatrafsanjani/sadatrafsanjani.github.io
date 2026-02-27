import {Component, Input} from '@angular/core';
import {EducationDTO} from '../../dto/education.dto';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {

  @Input({ required: true })
  educations!: EducationDTO[];
}
