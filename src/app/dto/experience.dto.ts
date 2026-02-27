import {ProjectDTO} from './project.dto';

export interface ExperienceDTO {
  title: string;
  company: string;
  website: string;
  employment_type: string;
  tenure: string;
  projects: ProjectDTO[];
}
