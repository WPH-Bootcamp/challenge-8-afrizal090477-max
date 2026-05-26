
import webDevIcon from "../../assets/icons/web-development-icon.svg";
import mobileAppIcon from "../../assets/icons/mobile-app-icon.svg";
import uiUxIcon from "../../assets/icons/ui-ux-icon.svg";
import cloudIcon from "../../assets/icons/cloud-icon.svg";
import softwareIcon from "../../assets/icons/software-icon.svg";
import infraIcon from "../../assets/icons/infrastructur-icon.svg";
import securityIcon from "../../assets/icons/cyber-icon.svg";
import qaIcon from "../../assets/icons/qa-icon.svg";
import consultingIcon from "../../assets/icons/consult-icon.svg";

export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  desc: string; 
}


export const services: ServiceItem[] = [
  { id: 1, icon: webDevIcon, title: "Web Development", desc: "Build fast, scalable, and SEO-friendly websites." },
  { id: 2, icon: mobileAppIcon, title: "Mobile App Development", desc: "Native & cross-platform apps tailored to user needs." },
  { id: 3, icon: uiUxIcon, title: "UI/UX Design", desc: "Delight users with intuitive and beautiful interfaces." },
  { id: 4, icon: cloudIcon, title: "Cloud Solutions", desc: "Secure and flexible cloud infrastructure for your growth." },
  { id: 5, icon: softwareIcon, title: "Software Development", desc: "Custom solutions built around your business logic." },
  { id: 6, icon: infraIcon, title: "IT Infrastructure", desc: "Scale your backend with reliable tech foundations." },
  { id: 7, icon: securityIcon, title: "Cybersecurity Services", desc: "Stay protected with enterprise-grade security." },
  { id: 8, icon: qaIcon, title: "QA Solutions", desc: "Ensure performance with rigorous testing frameworks." },
  { id: 9, icon: consultingIcon, title: "IT Consulting & Support", desc: "Make smarter tech decisions with expert guidance." },
];