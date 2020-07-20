export interface PostEntity {
  detectedLanguage: string;
  time: string;
  title: string;
  url: string;
  key: string;
  body?: string;
  spoiler?: string;
  tags?: string[];
}
