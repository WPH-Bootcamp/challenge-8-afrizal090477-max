
export interface ProcessStep {
  id: string;
  title: string;
  desc: string;
}

export interface ProcessData {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export const processData: ProcessData = {
  title: "Our Process",
  subtitle: "Clear steps. Smart execution. Results you can count on.",
  steps: [
    { id: "1", title: "Discovery & Consultation", desc: "Understand Your Needs & Goals" },
    { id: "2", title: "Planning & Strategy", desc: "Build a Clear, Scalable Roadmap" },
    { id: "3", title: "Design & Prototyping", desc: "Craft UX That Converts" },
    { id: "4", title: "Development & Implementation", desc: "Deliver With Speed & Precision" },
    { id: "5", title: "Testing & Optimization", desc: "Ensure Quality at Every Step" },
    { id: "6", title: "Launch & Growth", desc: "Scale, Measure & Improve Continuously" },
  ]
};