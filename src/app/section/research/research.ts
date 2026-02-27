import {Component, Input} from '@angular/core';
import {ResearchDTO} from '../../dto/research.dto';

@Component({
  selector: 'app-research',
  imports: [],
  templateUrl: './research.html',
  styleUrl: './research.css',
})
export class Research {

  @Input({ required: true })
  researches!: ResearchDTO[];
}
