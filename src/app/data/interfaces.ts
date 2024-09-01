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

export interface TalkInformation {
  enabled: boolean;
  title: string;
  description: string;
  video?: string;
}
