export interface HeroInformation {
  title: string;
  applicationsOpenTextButton: string;
  applicationsClosedTextButton: string;
  applicationsOpen: boolean;
}

export interface AboutJoiningInformation {
  enabled: boolean;
  title: string;
  description: string;
  images?: string[];
}

export interface TalkInformation {
  enabled: boolean;
  title: string;
  description: string;
  video?: string;
}
