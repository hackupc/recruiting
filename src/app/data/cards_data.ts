import {
  AboutJoiningInformation,
  ImageInformation,
  VideoCardInformation,
} from "@data/interfaces";

const images_for_joining: ImageInformation[] = [
  {
    index: 1,
    url: "/photosCarousel/Photo1.webp",
    alt: "Photo1",
  },
  {
    index: 2,
    url: "/photosCarousel/Photo2.webp",
    alt: "Photo2",
  },
  {
    index: 3,
    url: "/photosCarousel/Photo3.webp",
    alt: "Photo3",
  },
  {
    index: 4,
    url: "/photosCarousel/Photo4.webp",
    alt: "Photo4",
  },
  {
    index: 5,
    url: "/photosCarousel/Photo5.webp",
    alt: "Photo5",
  },
  {
    index: 6,
    url: "/photosCarousel/Photo6.webp",
    alt: "Photo6",
  },
  {
    index: 7,
    url: "/photosCarousel/Photo7.webp",
    alt: "Photo7",
  },
  {
    index: 8,
    url: "/photosCarousel/Photo8.webp",
    alt: "Photo8",
  },
  {
    index: 9,
    url: "/photosCarousel/Photo9.webp",
    alt: "Photo9",
  },
  {
    index: 10,
    url: "/photosCarousel/Photo10.webp",
    alt: "Photo10",
  },
  {
    index: 11,
    url: "/photosCarousel/Photo11.webp",
    alt: "Photo11",
  },
  {
    index: 12,
    url: "/photosCarousel/Photo12.webp",
    alt: "Photo12",
  },
  {
    index: 13,
    url: "/photosCarousel/Photo13.webp",
    alt: "Photo13",
  },
  {
    index: 14,
    url: "/photosCarousel/Photo14.webp",
    alt: "Photo14",
  },
  {
    index: 15,
    url: "/photosCarousel/Photo15.webp",
    alt: "Photo15",
  },
  {
    index: 16,
    url: "/photosCarousel/Photo16.webp",
    alt: "Photo16",
  },
  {
    index: 17,
    url: "/photosCarousel/Photo17.webp",
    alt: "Photo17",
  },
  {
    index: 18,
    url: "/photosCarousel/Photo18.webp",
    alt: "Photo18",
  },
  {
    index: 19,
    url: "/photosCarousel/Photo19.webp",
    alt: "Photo19",
  },
  {
    index: 20,
    url: "/photosCarousel/Photo20.webp",
    alt: "Photo20",
  },
  {
    index: 21,
    url: "/photosCarousel/Photo21.webp",
    alt: "Photo21",
  },
  {
    index: 22,
    url: "/photosCarousel/Photo22.webp",
    alt: "Photo22",
  },
  {
    index: 23,
    url: "/photosCarousel/Photo23.webp",
    alt: "Photo23",
  },
];

export const about_joining_data_card: AboutJoiningInformation = {
  enabled: true,
  title: "Què busquem?",
  introduction:
    "Busquem persones que aportin passió i continuitat a HackUPC, un projecte que es va iniciar fa més d'una dècada. Si alguna d'aquestes preguntes et ressona, t'encantarà formar part de l'equip de HackUPC:",
  boldIntroductionPhrases: [
    "passió i continuitat a HackUPC",
    "més d'una dècada",
  ],
  questions: [
    "Ets treballador i t'agradaria entrar a un grup de persones motivades?",
    "Vols trobar un grup de persones amb qui compartir viatges, activitats, barbacoes, colònies i moltes altres experiències?",
    "Tens la creativitat per a resoldre problemes i aportar noves idees a l'equip?",
    "Vols aprendre coses que no t'ensenyaran a la universitat?",
    "Tens ganes de conèixer gent nova i fer amics per a tota la vida?",
  ],
  conclusion:
    "Si has respost afirmativament a alguna d'aquestes preguntes, no dubtis a unir-te a l'equip de HackUPC!",
  images: images_for_joining,
};

export const talk_data_card: VideoCardInformation = {
  enabled: true,
  title: "Xerrada sobre ser organitzador de HackUPC",
  description:
    "🎙️ Descobreix el que de veritat significa ser part de Hackers@UPC en aquesta xerrada dels directors de l’edició de 2023! Expliquen més en profunditat cada departament, l’experiència de HackUPC i les altres activitats que s’organitzen durant l’any.",
  video: "/videos/joinTeam.mp4",
};

export const trailer_data_card: VideoCardInformation = {
  enabled: true,
  title: "Què significa ser part de Hackers@UPC?",
  description:
    "🤩 Ser part de Hackers@UPC significa treballar i cooperar amb altra gent, tenir reunions de forma regular, ser constants i ser capaç de treballar sota pressió. Sense passió i dedicació per part dels organitzadors, HackUPC no podria tirar endavant! Al final del dia, veure als hackers contents i veient com tenen un cap de setmana increïble, alguns cops amb experiències que els canvien la vida, fa que tot valgui la pena! També fem moltes activitats com a grup, i aporta una bona xarxa de contactes.",
  video: "/videos/trailer.mp4",
};
