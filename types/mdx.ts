export type Metadata = {
  title: string;
  publishedAt: string;
  status?: string;
  excerpt?: string;
  topic: string;
  updatedAt?: string;
  image?: string;
  logo?: string;
  summary?: string;
  author?: string;
  tags?: string;
  authorImg?: string;
  mainUrl?: string;
  page?: string;
  sort?: string;
  // for experience
  employmentType?: string;
  companyName?: string;
  location?: string;
  locationType?: string;
  startDate?: string;
  endDate?: string;
  // for education
  schoolName?: string;
  degree?: string;
  fieldOfStudy?: string;
  grade?: string;
  activities?: string;
};

// for posts & pages
export type Content = {
    metadata: Metadata;
    slug: string;
    content: string;
}
