export type Project = {
  title: string;
  projectUrl: string;
  stack?: string[];
  description: string;
  extraLinks?: {
    label: string; 
    url: string;
  }[];
};