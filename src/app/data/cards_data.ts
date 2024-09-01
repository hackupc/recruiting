import {
  AboutJoiningInformation,
  VideoCardInformation,
} from "@data/interfaces";

export const about_joining_data_card: AboutJoiningInformation = {
  enabled: true,
  title: "Why should I join Hackers@UPC?",
  description:
    "Joining Hackers@UPC will bring you a lot of new challenges and experience. You'll be able to meet and work with an awesome team full of passionate people, learn a lot of new skills and help grow a community by organizing amazing events which bring people together! Being part of an association like Hackers@UPC can let experience college life in a different and fun way.",
  images: [
    {
      index: 1,
      url: "/photosCarousel/Photo1.jpg",
      alt: "Equip2019",
    },
    {
      index: 2,
      url: "/photosCarousel/Photo7.jpg",
      alt: "Retreat2019-2",
    },
    {
      index: 3,
      url: "/photosCarousel/Photo8.jpg",
      alt: "Retreat2019",
    },
    {
      index: 4,
      url: "/photosCarousel/Photo9.jpg",
      alt: "Opening2021",
    },
  ],
};

export const talk_data_card: VideoCardInformation = {
  enabled: true,
  title: "Applying as an organizer - Talk",
  description:
    "Find out what being at Hackers@UPC really is about in this talk given by the Directors of HackUPC 2023! You will find information on the departments, the HackUPC experience and the overall activities that we organize during the year.",
  video: "/videos/joinTeam.mp4",
};

export const trailer_data_card: VideoCardInformation = {
  enabled: true,
  title: "What does it mean to be part of Hackers@UPC?",
  description:
    "Being part of Hackers@UPC means to work and cooperate with other people, have meetings regularly, be constant, and perform well under pressure. Without passion and commitment from the organizers, HackUPC can't thrive! In the end, being able to see the hackers' happiness and experiencing a great weekend with everyone shows how hard work pays off!",
  video: "/videos/trailer.mp4",
};
