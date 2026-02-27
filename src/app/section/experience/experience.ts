import {Component, Input} from '@angular/core';
import {ExperienceDTO} from '../../dto/experience.dto';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  @Input({ required: true })
  experiences!: ExperienceDTO[];
}
