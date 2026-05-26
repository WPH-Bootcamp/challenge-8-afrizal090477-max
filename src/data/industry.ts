
import fintechImg from "../../assets/images/fintech.svg"; 
import ecommerceImg from "../../assets/images/e-commerce.svg";
import healthcareImg from "../../assets/images/healthcare.svg";

export interface IndustryItem {
  id: string;
  name: string;
  title: string;
  image: string;
}

export interface IndustryData {
  title: string;
  subtitle: string;
  industries: IndustryItem[];
}

export const industryData: IndustryData = {
  title: "Built for Your Industry",
  subtitle: "We've helped companies across industries launch smarter, faster, and more securely.",
  industries: [
    {
      id: "fintech",
      name: "Fintech",
      title: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
      image: fintechImg,
    },
    {
      id: "ecommerce",
      name: "E-Commerce",
      title: "We craft high-converting, lightning-fast e-commerce platforms with seamless user experiences designed to scale your retail business.",
      image: ecommerceImg,
    },
    {
      id: "healthcare",
      name: "Healthcare",
      title: "We develop reliable, secure, and fully compliant digital health infrastructure, from telemedicine apps to advanced clinical platforms.",
      image: healthcareImg,
    },
  ]
};