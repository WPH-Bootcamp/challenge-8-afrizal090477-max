
export interface CompanySocials {
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
}

export interface CompanyInfo {
  name: string;
  footerLogoText: string;
  copyright: string;
  social: CompanySocials;
}

export const companyInfo: CompanyInfo = {
  name: "Tech Logo",
  footerLogoText: "Your Logo",
  copyright: "© 2026 Tech Logo Corp. All rights reserved.",
  social: {
    facebook: "#", 
    instagram: "https://www.instagram.com/afrizal_5758?igsh=MmplazlqeWFncXg4",
    linkedin: "https://www.linkedin.com/in/afrizal-900410408/",
    tiktok: "https://www.tiktok.com/@afrizal_5758?_r=1&_t=ZS-96ergxThKNE"
  }
};