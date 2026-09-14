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

/** Something built outside the day job — personal sites, tools, games. */
export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  stack: string[];
  /** Live site. */
  link?: string;
  /** Public source. */
  repo?: string;
};

/** A photograph of a person or a place, rather than a product screenshot. */
export type Photo = {
  src: string;
  /** Described for screen readers; the caption is not a substitute. */
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Metric = {
  label: string;
  from: string;
  to: string;
  context: string;
};
