export interface ProjectDTO {
  name: string;
  type: string;
  url?: string;
  technologies: string[];
  role: string;
  team_size: number;
  development_duration: number;
  status: string;
  highlights: string[];
}
