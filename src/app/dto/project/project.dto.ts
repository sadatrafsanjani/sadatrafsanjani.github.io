import {ImpactDTO} from './impact.dto';

export interface ProjectDTO {
  title: string;
  subtitle: string;
  problem: string;
  role: string;
  technologies: string[];
  url: string;
  teamSize: number;
  contributions: string[];
  impacts: ImpactDTO[];
}
