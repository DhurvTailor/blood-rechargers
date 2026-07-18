import { BloodBank, BloodCamp, BloodComponent, BlogPost, NewsItem } from "./types";

export const states = [
  "Rajasthan", "Delhi", "Punjab", "Gujarat", "Maharashtra", "Karnataka",
  "Madhya Pradesh", "Tamil Nadu", "Andhra Pradesh", "Uttar Pradesh",
  "Haryana", "Bihar", "West Bengal", "Kerala", "Telangana",
];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodComponents: BloodComponent[] = [
  { id: 1, slug: "whole-blood", name: "Whole Blood", unitsInStock: 172, icon: "droplet" },
  { id: 2, slug: "single-donor-platelet", name: "Single Donor Platelet", unitsInStock: 60, icon: "activity" },
  { id: 3, slug: "single-donor-plasma", name: "Single Donor Plasma", unitsInStock: 0, icon: "flask-conical" },
  { id: 5, slug: "platelet-rich-plasma", name: "Platelet Rich Plasma", unitsInStock: 0, icon: "test-tube" },
  { id: 6, slug: "platelet-poor-plasma", name: "Platelet Poor Plasma", unitsInStock: 0, icon: "test-tube-2" },
  { id: 7, slug: "platelet-concentrate", name: "Platelet Concentrate", unitsInStock: 0, icon: "flask-round" },
  { id: 8, slug: "plasma", name: "Plasma", unitsInStock: 70, icon: "droplets" },
  { id: 9, slug: "packed-red-blood-cells", name: "Packed Red Blood Cells", unitsInStock: 0, icon: "circle-dot" },
  { id: 12, slug: "fresh-frozen-plasma", name: "Fresh Frozen Plasma", unitsInStock: 0, icon: "snowflake" },
  { id: 13, slug: "cryoprecipitate", name: "Cryoprecipitate", unitsInStock: 50, icon: "beaker" },
];

export const bloodBanks: BloodBank[] = [
  {
    id: 1, slug: "ak-hospital-blood-bank", name: "A.K. Hospital Blood Bank",
    category: "Government Blood Bank",
    address: "Rajasthan State Highway 59, Champa Nagar, Beawar, Ajmer, Rajasthan, 305901",
    city: "Ajmer", state: "Rajasthan", phone: "01462257222", whatsapp: "01462257222",
    lat: 26.1084, lng: 74.3172, verified: true, rating: 4.4,
    stock: { "O+": 24, "A+": 12, "B+": 30, "AB+": 6 },
  },
  {
    id: 2, slug: "jan-kalyan-blood-centre", name: "Jan Kalyan Blood Centre",
    category: "Private Blood Bank",
    address: "323 Dhruv Marg, Gurunanakpura, Tilak Nagar, Jaipur, Rajasthan 302004",
    city: "Jaipur", state: "Rajasthan", phone: "08306764100", whatsapp: "08306764100",
    lat: 26.8958, lng: 75.8205, verified: true, rating: 4.7,
    stock: { "O+": 40, "O-": 8, "A+": 18, "B-": 4 },
  },
  {
    id: 3, slug: "apex-kalyan-blood-bank", name: "Apex Kalyan Blood Bank",
    category: "NGO run Blood Bank",
    address: "Apex Hospital Pvt Ltd, SP-4 & 6, Malviya Nagar Industrial Area, Jaipur, Rajasthan 302017",
    city: "Jaipur", state: "Rajasthan", phone: "01414101111", whatsapp: "01414101111",
    lat: 26.854, lng: 75.826, verified: true, rating: 4.2,
    stock: { "A+": 22, "B+": 15, "AB-": 2 },
  },
  {
    id: 4, slug: "bd-memorial-blood-centre", name: "B.D. Memorial Blood Centre",
    category: "NGO run Blood Bank",
    address: "4/98 Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur, Rajasthan 302021",
    city: "Jaipur", state: "Rajasthan", phone: "01416780022", whatsapp: "01416780022",
    lat: 26.8984, lng: 75.7556, verified: false, rating: 4.0,
    stock: { "O+": 10, "B+": 6 },
  },
  {
    id: 5, slug: "red-drop-blood-centre", name: "Red Drop Blood Centre",
    category: "Private Blood Bank",
    address: "A-5 Hanuman Nagar A, Khatipura Rd, Vaishali Nagar, Jaipur, Rajasthan 302012",
    city: "Jaipur", state: "Rajasthan", phone: "09610134111", whatsapp: "09610134111",
    lat: 26.9225, lng: 75.7478, verified: true, rating: 4.6,
    stock: { "O-": 3, "A-": 5, "AB+": 9 },
  },
  {
    id: 6, slug: "agrasen-blood-bank", name: "Agrasen Blood Bank",
    category: "Private Blood Bank",
    address: "Maharaja Agrasen Hospital, Sector 7, Vidyadhar Nagar, Jaipur, Rajasthan 302023",
    city: "Jaipur", state: "Rajasthan", phone: "01412335569", whatsapp: "01412335569",
    lat: 26.9665, lng: 75.7843, verified: true, rating: 4.5,
    stock: { "O+": 33, "A+": 14, "B+": 20, "O-": 6 },
  },
];

export const bloodCamps: BloodCamp[] = [
  { id: 1, slug: "world-blood-donor-day-camp-jaipur", title: "World Blood Donor Day Mega Camp", organizer: "Blood Rechargers Foundation", city: "Jaipur", date: "2026-08-14", address: "Central Park, Jaipur", expectedDonors: 250 },
  { id: 2, slug: "college-donor-drive-udaipur", title: "College Blood Donor Drive", organizer: "Udaipur Youth Federation", city: "Udaipur", date: "2026-08-02", address: "MLSU Campus, Udaipur", expectedDonors: 120 },
  { id: 3, slug: "corporate-donation-day-jodhpur", title: "Corporate Blood Donation Day", organizer: "Jodhpur IT Park Association", city: "Jodhpur", date: "2026-07-28", address: "IT Park Auditorium, Jodhpur", expectedDonors: 90 },
];

export const newsItems: NewsItem[] = [
  { id: 1, title: "Researchers discover new blood group system — MAL", excerpt: "NHS Blood and Transplant and the University of Bristol identified a newly recognised blood group system, resolving decades-old mystery cases.", date: "2026-06-10" },
  { id: 2, title: "New FDA Draft Guidance to Reduce Transfusion-Transmitted Malaria", excerpt: "Updated guidance calls for selective nucleic-acid testing of at-risk donors to further reduce transfusion risk.", date: "2026-05-28" },
  { id: 3, title: "Frequent Blood Donation Does Not Increase Clonal Hematopoiesis", excerpt: "A large cohort study found no meaningful link between donation frequency and clonal blood mutations.", date: "2026-05-14" },
  { id: 4, title: "Donor Age, Not Sex, Drives RBC Deformability", excerpt: "New research highlights donor age as the primary factor affecting red cell flexibility post-transfusion.", date: "2026-04-30" },
  { id: 5, title: "Machine Learning Models Predict Transfusion Likelihood", excerpt: "Platelet counts and haemoglobin levels were the strongest predictors in a new transfusion-risk model.", date: "2026-04-18" },
  { id: 6, title: "Blood Cell Salvage Cuts Transfusions After ECMO", excerpt: "Cell-salvage systems reduced the risk of packed RBC transfusion by 17% within two days of decannulation.", date: "2026-04-02" },
];

export const blogPosts: BlogPost[] = [
  { id: 1, slug: "10-common-myths-about-blood-donation-debunked", title: "10 Common Myths About Blood Donation Debunked", excerpt: "Blood donation is one of the most selfless acts a human can perform — here's what science actually says about the most common myths.", content: "Blood donation is one of the most selfless acts a human being can perform. A single unit of blood can save multiple lives — newborns, accident victims, surgery patients, and those undergoing cancer treatment. Yet myths around pain, weight gain, weakness, and eligibility keep many willing donors away. This guide walks through the ten most common misconceptions and what the medical evidence actually shows, so more people feel confident stepping forward to donate.", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop", date: "2026-06-02", readTime: "6 min read", category: "Awareness" },
  { id: 2, slug: "how-much-time-does-the-body-take-to-replace-donated-blood", title: "How Much Time Does the Body Take to Replace Donated Blood?", excerpt: "A complete, medically grounded recovery timeline — from plasma volume to red cell regeneration.", content: "Blood donation is one of the most powerful and life-saving acts of generosity, but many donors wonder how long it takes their body to fully recover. Plasma volume is typically restored within 24–48 hours, while red blood cell levels can take four to six weeks to fully replenish, depending on age, diet, and overall health. This article breaks down each stage of recovery and offers practical tips — iron-rich foods, hydration, and rest — to speed up the process safely.", image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1200&auto=format&fit=crop", date: "2026-05-26", readTime: "5 min read", category: "Health" },
  { id: 3, slug: "blood-bank-in-jaipur-blood-donation-camp-in-jaipur", title: "Blood Bank in Jaipur — Blood Donation Camp in Jaipur", excerpt: "How the Pink City's growing donor community is closing the gap between blood supply and emergency demand.", content: "Jaipur, the Pink City of India, is known for its rich heritage, vibrant culture, and warm hospitality. Alongside its growing development in tourism and infrastructure, the city has also built one of Rajasthan's most active blood donation networks, with regular camps organised by hospitals, NGOs, and corporate groups throughout the year.", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=1200&auto=format&fit=crop", date: "2026-05-18", readTime: "4 min read", category: "Community" },
  { id: 4, slug: "how-to-check-blood-availability-online-in-india", title: "How to Check Blood Availability Online in India", excerpt: "A practical walkthrough of digital blood-stock lookup tools and how they're changing emergency response.", content: "In India, the demand for blood is increasing every year due to medical emergencies, surgeries, accidents, childbirth complications, and chronic illnesses. Real-time online blood availability portals now let families check stock levels at nearby blood banks before making the trip, saving critical time during emergencies.", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop", date: "2026-05-09", readTime: "5 min read", category: "Guides" },
  { id: 5, slug: "emergency-blood-donor-app-in-india-how-it-works", title: "Emergency Blood Donor App in India — How It Works", excerpt: "Inside the technology connecting verified donors to urgent requests in minutes, not hours.", content: "In a country as populous and diverse as India, timely access to safe blood can mean the difference between life and death. Traditional channels — phone trees, hospital notice boards, word of mouth — are slow. Emergency donor apps now match urgent requests to nearby, eligible, verified donors using real-time location and blood-type filters.", image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1200&auto=format&fit=crop", date: "2026-04-27", readTime: "7 min read", category: "Technology" },
  { id: 6, slug: "how-to-find-blood-donors-near-me-in-india", title: "How to Find Blood Donors Near Me in India", excerpt: "Every option available today, from hospital registries to verified donor networks.", content: "Blood is one of the few medical needs that can't be manufactured in a lab on demand. When someone requires blood urgently — after an accident, during childbirth, or mid-surgery — knowing where to look matters. This guide covers hospital blood banks, NGO registries, and app-based donor networks, and how to evaluate which is fastest for your situation.", image: "https://images.unsplash.com/photo-1615461066418-8ac9f5f37d7a?q=80&w=1200&auto=format&fit=crop", date: "2026-04-15", readTime: "6 min read", category: "Guides" },
];

export function findBloodBankBySlug(slug: string): BloodBank | undefined {
  return bloodBanks.find((b) => b.slug === slug);
}

export function findBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}

export const compatibility: Record<string, { canDonateTo: string[]; canReceiveFrom: string[] }> = {
  "O-": { canDonateTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"], canReceiveFrom: ["O-"] },
  "O+": { canDonateTo: ["O+", "A+", "B+", "AB+"], canReceiveFrom: ["O-", "O+"] },
  "A-": { canDonateTo: ["A-", "A+", "AB-", "AB+"], canReceiveFrom: ["O-", "A-"] },
  "A+": { canDonateTo: ["A+", "AB+"], canReceiveFrom: ["O-", "O+", "A-", "A+"] },
  "B-": { canDonateTo: ["B-", "B+", "AB-", "AB+"], canReceiveFrom: ["O-", "B-"] },
  "B+": { canDonateTo: ["B+", "AB+"], canReceiveFrom: ["O-", "O+", "B-", "B+"] },
  "AB-": { canDonateTo: ["AB-", "AB+"], canReceiveFrom: ["O-", "A-", "B-", "AB-"] },
  "AB+": { canDonateTo: ["AB+"], canReceiveFrom: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"] },
};
