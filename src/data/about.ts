
export interface StatItem {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  description: string;
  stats: StatItem[];
}

export const aboutData: AboutData = {
  title: "End-to-End IT Solutions That Drive Results",
  description: "From strategy to execution, we deliver solutions that grow your business.",
  stats: [
    { value: "50+", label: "Expert Gathered" },
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Ready Brand Partner" },
    { value: "100%", label: "Satisfaction Rate" },
  ]
};