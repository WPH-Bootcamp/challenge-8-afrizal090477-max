
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  questions: FAQItem[];
}

export const faqData: FAQData = {
  title: "Need Help? Start Here.",
  subtitle: "Everything you need to know — all in one place.",
  ctaTitle: "Let's talk it through",
  ctaSubtitle: "Book a free consultation with our team. Everything you need to know — all in one place.",
  questions: [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We provide custom web/app development, cloud solutions, UX/UI design, and more tailored to your business needs.",
    },
    {
      id: 2,
      question: "How do I know if this is right for my business?",
      answer: "Our team will conduct a thorough discovery session to understand your goals and ensure our technical solutions align perfectly with your business growth.",
    },
    {
      id: 3,
      question: "How much does a project cost?",
      answer: "Project pricing varies based on scope, complexity, and timeline. Contact us for a free consultation and a detailed, transparent quote.",
    },
    {
      id: 4,
      question: "How long does it take?",
      answer: "A standard project can take anywhere from 4 to 12 weeks depending on the requirements. We follow agile practices to deliver fast and iteratively.",
    },
    {
      id: 5,
      question: "Can I start with a small project first?",
      answer: "Absolutely! We highly recommend starting with an MVP (Minimum Viable Product) to validate your ideas quickly before scaling up infrastructure.",
    },
  ]
};