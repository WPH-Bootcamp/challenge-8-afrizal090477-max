
export interface ContactData {
  title: string;
  subtitle: string;
  serviceOptions: string[];
}

export const contactData: ContactData = {
  title: "Ready to Start? Let’s Talk.",
  subtitle: "Tell us what you need, and we'll get back to you soon.",
  serviceOptions: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Software Development",
    "Other",
  ],
};