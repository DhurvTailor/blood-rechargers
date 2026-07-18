export type BloodComponent = {
  id: number;
  slug: string;
  name: string;
  unitsInStock: number;
  icon: string;
};

export type BloodBank = {
  id: number;
  slug: string;
  name: string;
  category: "Government Blood Bank" | "Private Blood Bank" | "NGO run Blood Bank";
  address: string;
  city: string;
  state: string;
  phone: string;
  whatsapp: string;
  lat: number;
  lng: number;
  verified: boolean;
  rating: number;
  stock: Partial<Record<string, number>>;
};

export type BloodCamp = {
  id: number;
  slug: string;
  title: string;
  organizer: string;
  city: string;
  date: string;
  address: string;
  expectedDonors: number;
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
};

export type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
};
