import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface HeroInformation {
  title: string;
  applicationsOpenTextButton: string;
  applicationsClosedTextButton: string;
  applicationsLink: string;
  applicationsOpen: boolean;
}

export type ImageInformation = {
  index: number;
  url: string;
  alt: string;
};

export interface AboutJoiningInformation {
  enabled: boolean;
  title: string;
  description: string;
  images: ImageInformation[];
}

export interface VideoCardInformation {
  enabled: boolean;
  title: string;
  description: string;
  video: string;
}

export interface DepartmentInformation {
  name: string;
  icon: IconDefinition;
  question: string;
  information: string;
}

export interface Departments {
  title: string;
  description: string;
  departments: DepartmentInformation[];
}

export interface Hackers {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export interface SocialsItem {
  icon: IconDefinition;
  link: string;
  label: string;
}

export interface Socials {
  title: string;
  description: string;
  socialsHackUPC: SocialsItem[];
  socialsHackersUPC: SocialsItem[];
}
