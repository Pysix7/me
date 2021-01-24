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
}
export interface IProfileData {
  name: string;
  description: string;
  skills: ISkill[]
}