export interface MenuConfig {
  title: string;
  icon: JSX.Element;
  path: string;
}

export interface SocialLink {
  title: string;
  icon: JSX.Element;
  url: string;
}

export interface ISkill {
  title: string;
  key: string;
  children?: any[]
  color?: string;
}

export interface IAppLink {
  url: string;
  title: string;
}

export interface IProject {
  title: string;
  features: string[];
  appLinks: IAppLink[];
  todos?: string[];
}

export interface IProfileData {
  name: string;
  description: string;
  skills: ISkill[];
  projects: IProject[];
}