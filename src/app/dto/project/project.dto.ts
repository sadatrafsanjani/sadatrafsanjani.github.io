import {ImpactDTO} from './impact.dto';

export interface ProjectDTO {
  name: string;
  subtitle: string;
  problem: string;
  role: string;
  technology: string[];
  keyEngineeringWork: string[];
  impact: ImpactDTO[];
}
