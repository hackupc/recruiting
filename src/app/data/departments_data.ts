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
    name: "🎨 Design",
    question:
      "Dissenyes, o t’agradria aprendre dissenyar?",
    information:
      "🖌️ A HackUPC, el disseny és molt important perquè és la manera que tenim de comunicar i mostrar la nostra feina. Fa possible la connexió dels nostres esdeveniments amb Hackers, Sponsors i Partners. Com a membre de l’equip de disseny t'encarregaràs de treballar amb  tot el relacionat als diferents de l’associació, però sobretot el més important HackUPC. Pàgines web, material per xarxes socials, stickers, samarretes, decoració per l’esdeveniment… això i molt més és del que s’encarrega el nostre equip!",
    icon: faPenNib,
  },
  {
    name: "🤝 Sponsorship",
    question:
      "Ets persuasiu? Pots comunicar-te bé en Català i en Anglès?",
    information:
      "💸 Com qualsevol esdeveniment, HackUPC necessita un suport econòmic, aquest ve a través dels nostres increïbles sponsors que normalment venen a l'esdeveniment presentant un repte pels hackers. Normalment, aquests també porten coses increïbles durant l’esdeveniment, marxandatge, menjar i altres. Aconseguir els diners per poder cobrir totes les despeses que representa l’esdeveniment és la feina de l’equip de sponsorship. Per ser part d’aquest equip has d’estar disposat a parlar en anglès de forma regular i tenir reunions amb empreses on hauràs de negociar amb ells.",
    icon: faMoneyBill1Wave,
  },
  {
    name: "🎮 HackerXperience",
    question:
      "Vols millorar els records que s’emporten els hackers de HackUPC?",
    information:
      "✨ A HackerXperience ens encarreguem que els participants gaudeixin de cada moment del cap de setmana. Planifiquem activitats perquè desconnectin, busquem mentors que els guiïn i ajudin, ens assegurem que els projectes es valorin de manera justa amb un bon equip de jutges, i molt més! Si ets creatiu, entusiasta i dinàmic, t'esperem a HackerXperience!",
    icon: faVolleyball,
  },
  {
    name: "🍕 Logistics",
    question:
      "Treballes bé sota pressió? T'agrada que tot funcioni bé?",
    information:
      "🍕 Durant HackUPC, l'equip de logística s'encarrega de tot el que fa que l'esdeveniment sigui possible: des dels àpats per a més de 900 persones fins al marxandatge personalitzat que els hackers s'emporten a casa amb molt de carinyo. També transformem una aula en una cafeteria plena de snacks, cafès, begudes energètiques i alguna sorpresa extra, fins i tot espais per jugar a Jenga o als escacs! Tot això requereix una gran planificació i organització dels espais de la venue, i aquí és on entra l'equip de logística. Si ets una persona activa, t'agrada treballar en equip i vols viure aquesta bogeria amb nosaltres, uneix-te!",
    icon: faPizzaSlice,
  },
  {
    name: "📣 Marketing",
    question:
      "T'agradaria crear contingut per a les Xarxes Socials?",
    information:
      "📱 HackUPC no seria possible sense els hackers, la nostra feina és promocionar tots els esdeveniments que fa l’associació perquè arribi a tothom! Ens encarreguem de mantenir actives les xarxes socials, creant de forma regular contingut i resolent preguntes i dubtes que poden sorgir. Necessitem ments creatives que estiguin al dia de les xarxes socials.",
    icon: faBullhorn,
  },
  {
    name: "💻 WebDev",
    question:
      "T’agrada programar i aprendre noves habilitats?",
    information:
      "⚙️ HackUPC no seria possible sense les nostres pàgines web i sistemes informàtics. A WebDev, ens encarreguem de desenvolupar aquests sistemes web per millorar la feina dels organitzadors i hackers, i fer que la hackathon vagi millor. Utilitzem tecnologies modernes: Django (Python) i Next.js (Typescript) majoritàriament. Busquem a gent que tingui coneixements bàsics de programació i moltes ganes d’aprendre nous llenguatges i tecnologies.",
    icon: faLaptopCode,
  },
  {
    name: "🙌 Staff",
    question:
      "Ets capaç de liderar un equip i assegurar-te que les coses passen?",
    information:
      "🌟 Durant HackUPC, necessitem mans extres per tenir tot preparat pels hackers en tot moment, el nostre equip s’encarrega de reclutar un equip de voluntaris increïble que ens ajudarà. Coordinem i organitzem els voluntaris per treballar de forma eficient, així que si ets una persona organitzada que pot ser un bon líder, aquest és el teu equip!",
    icon: faPeopleGroup,
  },
];

export const departments_data: Departments = {
  title: "🧩 Els nostres departaments",
  description:
    "🧭 A HackUPC, l'organització va per departaments. Cada departament té un objectiu específic al desenvolupament de l’esdeveniment, però ser part d’un departament no significa que només podràs fer feina d’aquell departament. Treballem també de forma molt horitzontal!",
  departments: departments_list_data,
};
