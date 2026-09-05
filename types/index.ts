export type WorkImage = {
  src: string;
  caption: string;
  width: number;
  height: number;
};

export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  link?: string;
  images?: WorkImage[];
};

export type WorkGroup = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  link?: string;
  summary: string;
  /** Featured groups render expanded, with summaries always visible. */
  featured?: boolean;
  items: WorkItem[];
};

export type Metric = {
  label: string;
  from: string;
  to: string;
  context: string;
};
