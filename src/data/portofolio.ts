
import portfolio1Img from "../../assets/images/portofolio1.svg";
import portfolio2Img from "../../assets/images/portofolio2.svg";
import portfolio3Img from "../../assets/images/portofolio3.svg";

export interface ProjectItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  title: "From Vision to Launch! Projects We’re Proud Of",
  subtitle: "Take a closer look at our recent work powering startups, enterprises, and everything in between.",
  projects: [
    {
      id: 1,
      category: "Landing Page",
      title: "Portofolio 1",
      image: portfolio1Img,
    },
    {
      id: 2,
      category: "Landing Page",
      title: "Portofolio 2",
      image: portfolio2Img,
    },
    {
      id: 3,
      category: "Landing Page",
      title: "Portofolio 3",
      image: portfolio3Img,
    },
  ]
};