export interface HeroInformation {
  title: string;
  applicationsOpenTextButton: string;
  applicationsClosedTextButton: string;
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
  question: string;
  information: string;
}

export interface Departments {
  title: string;
  description: string;
  departments: DepartmentInformation[];
}
