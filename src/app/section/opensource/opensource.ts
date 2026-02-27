import {Component, Input} from '@angular/core';
import {OpensourceDTO} from '../../dto/opensource.dto';

@Component({
  selector: 'app-opensource',
  imports: [],
  templateUrl: './opensource.html',
  styleUrl: './opensource.css',
})
export class Opensource {

  @Input({ required: true })
  opensources!: OpensourceDTO[];
}
