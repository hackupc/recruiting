import { Socials, SocialsItem } from "@data/interfaces";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTiktok,
  faTwitch,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const listSocialsHackUPC: SocialsItem[] = [
  {
    icon: faEnvelope,
    link: "mailto:contact@hackupc.com",
    label: "Email",
  },
  {
    icon: faXTwitter,
    link: "https://x.com/hackupc",
    label: "Twitter",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/hackupc/",
    label: "Instagram",
  },
  {
    icon: faFacebook,
    link: "https://www.facebook.com/hackupc",
    label: "Facebook",
  },
  {
    icon: faLinkedin,
    link: "https://linkedin.com/company/hack-upc",
    label: "LinkedIn",
  },
  {
    icon: faMedium,
    link: "https://medium.com/@hackupc",
    label: "Medium",
  },
  {
    icon: faGithub,
    link: "https://github.com/hackupc",
    label: "GitHub",
  },
];

const listSocialsHackersUPC: SocialsItem[] = [
  {
    icon: faEnvelope,
    link: "mailto:support@hackersatupc.org",
    label: "Email",
  },
  {
    icon: faXTwitter,
    link: "https://twitter.com/hackersupc",
    label: "Twitter",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/hackersupc/",
    label: "Instagram",
  },
  {
    icon: faTiktok,
    link: "https://www.tiktok.com/@hackersatupc",
    label: "TikTok",
  },
  {
    icon: faYoutube,
    link: "https://www.youtube.com/c/HackersUPC",
    label: "YouTube",
  },
  {
    icon: faTwitch,
    link: "https://www.twitch.tv/hackersupc",
    label: "Twitch",
  },
];

export const socials_data: Socials = {
  title: "Estigues atent i no et perdis res!",
  description:
    "Si tens qualsevol dubte o pregunta, contacta amb nosaltres a través de qualsevol xarxa social!",
  socialsHackUPC: listSocialsHackUPC,
  socialsHackersUPC: listSocialsHackersUPC,
};
