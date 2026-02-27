interface Skill {
  name: string;
  datetime: string;
  level: string;
}

export interface SkillsData {
  descriptionKey?: string;
  skills: Skill[];
}
