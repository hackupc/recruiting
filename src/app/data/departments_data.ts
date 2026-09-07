import { DepartmentInformation, Departments } from "@data/interfaces";
import {
  faBullhorn,
  faLaptopCode,
  faMoneyBill1Wave,
  faPenNib,
  faPeopleGroup,
  faPizzaSlice,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";

const departments_list_data: DepartmentInformation[] = [
  {
    name: "Design 🎨",
    question: "Dibuixes, dissenyes, o t’agradria aprendre dissenyar?",
    information: [
      "El disseny és molt important perquè és la manera que tenim de comunicar i mostrar la nostra feina. Fa possible la connexió dels nostres esdeveniments amb Hackers, Sponsors i Partners.",
      "Com a membre de l’equip de disseny t'encarregaràs de treballar amb tot el relacionat als diferents esdeveniments de l’associació, inclòs HackUPC. Dissenyaràs pàgines web, material per xarxes socials, stickers, samarretes, decoració per l’esdeveniment… i moltes coses més!",
      "Si ets creatiu i vols aprendre a dissenyar, vine a design!",
    ],
    boldInformationPhrases: [
      "dissenyar",
      "disseny",
      "HackUPC",
      "Pàgines web",
      "xarxes socials",
    ],
    icon: faPenNib,
  },
  {
    name: "Sponsorship 🤝",
    question: "Ets persuasiu? Pots comunicar-te bé en Català i en Anglès?",
    information: [
      "Com qualsevol esdeveniment, HackUPC necessita un suport econòmic que prové dels nostres increïbles sponsors. Normalment, venen a l'esdeveniment per presentar un repte als hackers i també hi porten marxandatge, menjar i altres sorpreses.",
      "Aconseguir els diners per cobrir totes les despeses de l’esdeveniment és la feina de l’equip de sponsorship.",
      "Per formar part d’aquest equip, has d’estar disposat a parlar en anglès amb regularitat i a reunir-te amb empreses per negociar amb elles.",
    ],
    boldInformationPhrases: [
      "HackUPC",
      "sponsorship",
      "suport econòmic",
      "sponsorship",
    ],
    icon: faMoneyBill1Wave,
  },
  {
    name: "HackerXperience 🎮",
    question:
      "Vols millorar els records que s’emporten els hackers de HackUPC?",
    information: [
      "A HackerXperience ens encarreguem que els participants gaudeixin de cada moment del cap de setmana.",
      "Planifiquem activitats perquè desconnectin, busquem mentors que els guiïn i ajudin, i ens assegurem que els projectes es valorin de manera justa amb un bon equip de jutges.",
      "Si ets creatiu, entusiasta i dinàmic, t'esperem a HackerXperience!",
    ],
    boldInformationPhrases: [
      "participants gaudeixin",
      "activitats",
      "mentors",
      "equip de jutges",
    ],
    icon: faVolleyball,
  },
  {
    name: "Logistics 🍕",
    question: "Treballes bé sota pressió? T'agrada que tot funcioni bé?",
    information: [
      "Durant HackUPC, l'equip de logística s'encarrega de tot el que fa que l'esdeveniment sigui possible: des dels àpats per a més de 900 persones fins al marxandatge personalitzat que els hackers s'emporten a casa.",
      "També transformem una aula en una cafeteria plena de snacks, cafès, begudes energètiques i alguna sorpresa extra. Fins i tot preparem espais per jugar a Jenga o als escacs!",
      "Tot això requereix una gran planificació i organització dels espais de la venue. Si ets una persona activa, t'agrada treballar en equip i vols viure aquesta bogeria amb nosaltres, uneix-te!",
    ],
    boldInformationPhrases: [
      "més de 900 persones",
      "snacks",
      "planificació i organització",
      "treballar en equip",
    ],
    icon: faPizzaSlice,
  },
  {
    name: "Marketing 📣",
    question: "T'agradaria crear contingut per a les Xarxes Socials?",
    information: [
      "HackUPC no seria possible sense els hackers. La nostra feina és promocionar tots els esdeveniments que fa l’associació perquè arribin a tothom.",
      "Ens encarreguem de mantenir actives les xarxes socials, crear contingut de forma regular i resoldre les preguntes i els dubtes que puguin sorgir.",
      "Necessitem ments creatives que estiguin al dia de les xarxes socials.",
    ],
    boldInformationPhrases: [
      "promocionar",
      "xarxes socials",
      "contingut",
      "ments creatives",
    ],
    icon: faBullhorn,
  },
  {
    name: "WebDev 💻",
    question: "T’agrada programar i aprendre noves habilitats?",
    information: [
      "HackUPC no seria possible sense les nostres pàgines web i sistemes informàtics. A WebDev, desenvolupem eines per millorar la feina dels organitzadors i dels hackers.",
      "Utilitzem tecnologies modernes, principalment Django (Python) i Next.js (Typescript).",
      "Busquem gent amb coneixements bàsics de programació i moltes ganes d’aprendre nous llenguatges i tecnologies.",
    ],
    boldInformationPhrases: [
      "sistemes informàtics",
      "Django (Python)",
      "Next.js (Typescript)",
      "ganes d’aprendre",
    ],
    icon: faLaptopCode,
  },
  {
    name: "Staff 🙌",
    question:
      "Ets capaç de liderar un equip i assegurar-te que les coses passen?",
    information: [
      "Durant HackUPC, necessitem mans extres per tenir-ho tot preparat per als hackers en tot moment.",
      "L'equip de staff recluta, coordina i organitza un grup de voluntaris increïble perquè treballin de forma eficient.",
      "Si ets una persona organitzada i pots ser un bon líder, aquest és el teu equip!",
    ],
    boldInformationPhrases: [
      "mans extres",
      "voluntaris",
      "treballar de forma eficient",
      "bon líder",
    ],
    icon: faPeopleGroup,
  },
];

export const departments_data: Departments = {
  title: "Els nostres departaments",
  description:
    "Treballem per departaments. Cada departament té unes responsabilitats concretes, però ens encanta donar-nos idees i col·laborar amb altres departaments. Tots sumem per fer que l’esdeveniment sigui un èxit.",
  departments: departments_list_data,
};
