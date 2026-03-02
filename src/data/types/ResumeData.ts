export type SectionType = 'education' | 'experience' | 'extracurricular';
type EndStatus = 'date' | 'present';

export interface Entry {
  i18n_route: string;
  titleKey: string;
  organization: string;
  location: string;
  dates: {
    start: string;
    end?: string;
    endStatus?: EndStatus;
  };
  descriptionKeys?: string[];
}

export interface Section {
  titleKey: SectionType;
  entries: Entry[];
}

export interface ResumeData {
  descriptionKey?: string;
  sections: Section[];
}
