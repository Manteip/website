import Image from "next/image";

interface IPartnerLogo {
  name: string;
  link: string;
  image: StaticImageData;
}

import nvidiaLogo from "../public/partners/nvidia.png";
import googleLogo from "../public/partners/google.png";
import esaLogo from "../public/partners/esa.png";
import turingLogo from "../public/partners/turing.png";
import odiLogo from "../public/partners/odi.png";
import icebreakerLogo from "../public/partners/icebreaker.png";
import innovateukLogo from "../public/partners/innovateuk.png";
import raaisLogo from "../public/partners/raais_foundation.png";
import uclLogo from "../public/partners/ucl.jpg";
import shuttleworthLogo from "../public/partners/shuttleworth.svg";
import ngesoLogo from "../public/partners/ng_eso.png";

export const PARTNER_LOGOS: {
  [name: string]: IPartnerLogo;
} = {
  nvidia: {
    name: "NVIDIA Foundation",
    link: "https://www.nvidia.com/en-us/foundation/",
    image: nvidiaLogo,
  },
  google: {
    name: "Google.org",
    link: "https://www.google.org/",
    image: googleLogo,
  },
  esa: {
    name: "ESA Business Applications",
    link: "https://business.esa.int/",
    image: esaLogo,
  },
  turing: {
    name: "The Alan Turing Institute",
    image: turingLogo,
    link: "https://www.turing.ac.uk/",
  },
  odi: {
    name: "Open Data Institute",
    image: odiLogo,
    link: "https://theodi.org/",
  },
  icebreaker: {
    name: "Icebreaker One",
    image: icebreakerLogo,
    link: "https://icebreakerone.org/",
  },
  innovateuk: {
    name: "Innovate UK",
    image: innovateukLogo,
    link: "https://www.gov.uk/government/organisations/innovate-uk",
  },
  raais: {
    name: "RAAIS Foundation",
    image: raaisLogo,
    link: "https://www.raais.org/",
  },
  ucl: {
    name: "UCL",
    image: uclLogo,
    link: "https://www.ucl.ac.uk/",
  },
  shuttleworth: {
    name: "Shuttleworth Foundation",
    image: shuttleworthLogo,
    link: "https://shuttleworthfoundation.org/",
  },
  ngeso: {
    name: "National Grid ESO",
    image: ngesoLogo,
    link: "https://www.nationalgrideso.com/",
  },
};

const LogoCloud = ({ logos }: { logos: IPartnerLogo[] }) => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
      {logos.map(({ name, image, link }: IPartnerLogo) => {
        return (
          <a
            className="relative flex justify-center col-span-1 h-14"
            key={`logo-${name}`}
            href={link}
            type="button"
          >
            <Image
              className="grayscale"
              layout="fill"
              objectFit="contain"
              src={image}
              title={name}
              alt={`Logo for ${name}`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default LogoCloud;

// const LOGOS = [
// {
//   name: "UCL",
//   image: "UCL.jpg",
//   link: "https://www.ucl.ac.uk/",
// },
// {
//   name: "Innovate UK",
//   image: "innovateuk.png",
//   link: "https://www.gov.uk/government/organisations/innovate-uk",
// },
// {
//   name: "The Climate Subak",
//   image: "subak.png",
//   link: "https://www.subak.org/",
// },
// {
//   name: "HAO",
//   image: "hao_black.png",
//   link: "https://haocreative.ca/",
// },
// {
//   name: "RAAIS Foundation",
//   image: "raais_foundation.png",
//   link: "https://www.raais.org/",
// },
// ];
