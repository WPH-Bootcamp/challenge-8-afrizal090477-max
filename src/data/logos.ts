
import adobeLogo from "../../assets/logos/adobe.svg";
import upworkLogo from "../../assets/logos/upwork.svg";
import zoomLogo from "../../assets/logos/zoom.svg";
import postmanLogo from "../../assets/logos/postman.svg";
import databrickLogo from "../../assets/logos/databricks.svg";
import airbnbLogo from "../../assets/logos/airbnb.svg";
import dropboxLogo from "../../assets/logos/dropbox.svg";
import paypalLogo from "../../assets/logos/paypal.svg";
import netflixLogo from "../../assets/logos/netflix.svg";

export interface LogoItem {
  src: string;
}

export interface LogoCloudData {
  title: string;
  logos: LogoItem[];
}

export const logoCloudData: LogoCloudData = {
  title: "Trusted by Global Innovator & Leading Brands",
  logos: [
    { src: adobeLogo },
    { src: upworkLogo },
    { src: zoomLogo },
    { src: postmanLogo },
    { src: databrickLogo },
    { src: airbnbLogo },
    { src: dropboxLogo },
    { src: paypalLogo },
    { src: netflixLogo },
  ]
};