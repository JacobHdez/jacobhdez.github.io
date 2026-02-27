interface Skill {
  name: string;
  datetime: string;
  level: string;
}

export interface SkillsData {
  description?: string;
  skills: Skill[];
}
