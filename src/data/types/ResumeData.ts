type SectionKey = 'education' | 'experience' | 'extracurricular';
type EndStatus = 'date' | 'present';

export interface Entry {
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
  titleKey: SectionKey;
  entries: Entry[];
}

export interface ResumeData {
  descriptionKey?: string;
  sections: Section[];
}
