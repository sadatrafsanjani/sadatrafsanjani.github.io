import {PersonalinfoDTO} from './personalinfo.dto';
import {OpensourceDTO} from './opensource.dto';
import {EducationDTO} from './education.dto';
import {ResearchDTO} from './research.dto';
import { SkillsDTO} from './skills.dto';
import {ExperienceDTO} from './experience.dto';

export interface ProfileDTO {
  personal_info: PersonalinfoDTO;
  skills: SkillsDTO;
  experience: ExperienceDTO[];
  opensource: OpensourceDTO[];
  education: EducationDTO[];
  research: ResearchDTO[];
}
