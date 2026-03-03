export interface AboutData {
  name: string;
  portrait: string;
  hero: string;
  mainRoleKey: string;
  roleKey: string[];

  shortDescriptionKey?: string;
  descriptionKey: string;
  about: {
    city: string;
    phone?: string;
    email?: string;
    birthday: string;
    degree: string;
  };
  available: {
    status: boolean;
    yesKey: string;
    noKey: string;
  };
}
