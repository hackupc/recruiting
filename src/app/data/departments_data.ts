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
    name: "Design",
    question:
      "Dibuixes o t’agrada dissenyar? T’agradaria participar dissenyant la temàtica dels esdeveniments?",
    information:
      "A HackUPC, el disseny és molt important perquè és la manera que tenim de comunicar i mostrar la nostra feina. Fa possible la connexió dels nostres esdeveniments amb Hackers, Sponsors i Partners. Com a membre de l’equip de disseny t'encarregaràs de treballar amb  tot el relacionat als diferents de l’associació, però sobretot el més important HackUPC. Pàgines web, material per xarxes socials, stickers, samarretes, decoració per l’esdeveniment… això i molt més és del que s’encarrega el nostre equip!",
    icon: faPenNib,
  },
  {
    name: "Sponsorship",
    question:
      "Ets persuasiu? Pots comunicar-te còmodament en Català i en Anglès? Vine a aconseguir diners!",
    information:
      "Com qualsevol esdeveniment, HackUPC necessita un suport econòmic, aquest ve a través dels nostres increïbles sponsors que normalment venen a l'esdeveniment presentant un repte pels hackers. Normalment, aquests també porten coses increïbles durant l’esdeveniment, marxandatge, menjar i altres. Aconseguir els diners per poder cobrir totes les despeses que representa l’esdeveniment és la feina de l’equip de sponsorship. Per ser part d’aquest equip has d’estar disposat a parlar en anglès de forma regular i tenir reunions amb empreses on hauràs de negociar amb ells.",
    icon: faMoneyBill1Wave,
  },
  {
    name: "HackerXperience",
    question:
      "Vols millorar els records que s’emporten els hackers de HackUPC? Ajuda’ns a crear la millor experiència que puguin tenir!",
    information:
      "Volem que els hackers s’ho passin el millor possible a HackUPC! Des de l’inici al final de l’esdeveniment, planifiquem activitats, ens assegurem que hi ha un criteri just per avaluar tots els projectes, busquem mentors que ajudaran als hackers durant el cap de setmana, i molt més! Si ets creatiu i vols millorar l'experiència dels hackers, uneix-te a nosaltres!",
    icon: faVolleyball,
  },
  {
    name: "Logistics",
    question:
      "Treballes bé sota pressió? Ajuda’ns a fer que tot funcioni bé durant l’esdeveniment!",
    information:
      "Durant HackUPC, tenim molts reptes pel que fa a la logística: oferir menjar (MOLT) pels hackers i tots els assistents a l'esdeveniment, i no només menjar, també marxandatge, un lloc on treballar, on dormir… tota la venue! El repte més gran és la cafeteria (perquè puguin els hackers puguin menjar encara més), contactant amb partners i assegurant-nos de què tot està bé. Aquí és on entra l'equip de logistics, s’encarrega de resoldre i cobrir tots aquests reptes. Si ets una persona activa, estàs còmode treballant en equip i vols ser part d’aquesta bogeria, uneix-te a nosaltres!",
    icon: faPizzaSlice,
  },
  {
    name: "Marketing",
    question:
      "Tens facilitat per a les Xarxes Socials? Vols ajudar-nos a fer créixer la xarxa de hackers?",
    information:
      "HackUPC no seria possible sense els hackers, la nostra feina és promocionar tots els esdeveniments que fa l’associació perquè arribi a tothom! Ens encarreguem de mantenir actives les xarxes socials, creant de forma regular contingut i resolent preguntes i dubtes que poden sorgir. Necessitem ments creatives que estiguin al dia de les xarxes socials.",
    icon: faBullhorn,
  },
  {
    name: "WebDev",
    question:
      "T’agrada programar i aprendre noves habilitats? Vine i ajuda’ns a millorar els nostres sistemes!",
    information:
      "HackUPC no seria possible sense les nostres pàgines web i sistemes informàtics. A WebDev, ens encarreguem de desenvolupar aquests sistemes web per millorar la feina dels organitzadors i hackers, i fer que la hackathon vagi millor. Utilitzem tecnologies modernes: Django (Python) i Next.js (Typescript) majoritàriament. Busquem a gent que tingui coneixements bàsics de programació i moltes ganes d’aprendre nous llenguatges i tecnologies.",
    icon: faLaptopCode,
  },
  {
    name: "Staff",
    question:
      "Ets capaç de liderar i assegurar que les coses passen? Estigues al capdavant de l’equip de voluntaris!",
    information:
      "Durant HackUPC, necessitem mans extres per tenir tot preparat pels hackers en tot moment, el nostre equip s’encarrega de reclutar un equip de voluntaris increïble que ens ajudaran. Coordinem i organitzem els voluntaris per treballar de forma eficient, així que si ets una persona organitzada que pot ser un bon líder, aquest és el teu equip!",
    icon: faPeopleGroup,
  },
];

export const departments_data: Departments = {
  title: "Els nostres departaments",
  description:
    "A HackUPC, l'organització va per departaments. Cada departament té un objectiu específic al desenvolupament de l’esdeveniment, però ser part d’un departament no significa que només podràs fer feina d’aquell departament. Treballem també de forma molt horitzontal!",
  departments: departments_list_data,
};
