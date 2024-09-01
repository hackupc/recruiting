import { DepartmentInformation, Departments } from "@data/interfaces";

const departments_list_data: DepartmentInformation[] = [
  {
    name: "Design",
    question:
      "Do you draw or design for fun? Do you like to design awesome user experiences and themes?",
    information:
      "For HackUPC, the design is really important because it is the way we have to communicate our work. It makes it possible to connect our events with our hackers, sponsors, and partners. Our job is to design everything related to the events of the association, including the most significant one, HackUPC. Websites, our social media image, stickers, t-shirts, event decoration, and much more is what we do at our team!",
  },
  {
    name: "Sponsorship",
    question:
      "Are you persuasive and can both write and speak well in English? Come raise lots of money!",
    information:
      "Like any event, HackUPC needs a financial support, which is provided by the amazing sponsors that attend our event and present challenges for the hackers. They also usually provide you with cool stuff during the event, such as food, swag, and much more. Getting that budget is where the Sponsorship team comes into play! To be part of this team, you need to be willing to practice your English and be ready to have meetings with sponsors and negotiate with them.",
  },
  {
    name: "HackerXperience",
    question:
      "Do you want to improve the hackers' memory from HackUPC? Help us to create the best hacker experience!",
    information:
      "We want the hackers to have the best time possible at HackUPC! From the beginning until the end of the event, we plan fun activities, ensure fair judging criteria for the projects, look for mentors to helps the hackers, and much more! If you are creative and want to enhance the hackers' experience, join our team!",
  },
  {
    name: "Logistics",
    question:
      "Do you work well under pressure? Help us keep everything running really smoothly during the event!",
    information:
      "During HackUPC, we deal with lots of logistic challenges: providing the hackers with food (a LOT) and swag, ensuring a place to work or to sleep in, setting up the cafeteria (so they can continue eating), looking for snack partners (to get more food), and much more. That's where our department comes in! We are in charge of managing all of those challenges and more. If you are active, comfortable with teamwork, and want to help us, the Logistics team is right for you!",
  },
  {
    name: "Marketing",
    question:
      "Are you a Social Network genius? Do you want to help us create the biggest hacker network?",
    information:
      "HackUPC wouldn't be possible without the hackers, so our job is to promote all of our association's events to everyone! We take charge of maintaining our social media active, creating content regularly, and answering all the questions or doubts that may arise. We need creative minds and people who are up-to-date with social media!",
  },
  {
    name: "WebDev",
    question:
      "Do you like to program and learn new skills? Come and help us to develop our apps!",
    information:
      "HackUPC wouldn't be possible without our web pages and services. At WebDev, we develop and implement these websites to simplify work for hackers and organizers, and make the hackathon smoother. We use modern technologies such as Django, HTML & JS, Vue.js, as well as others. We are looking for people with basic programming knowledge and, above all, a strong will to learn new languages and technology.",
  },
  {
    name: "Staff",
    question:
      "Can you boss around and make things happen? Be in charge of the volunteers team!",
    information:
      "During HackUPC, we need extra hands to set up the venue and leave everything ready for the hackers, so our team's task is to recruit an amazing team of volunteers who come and help us do so. We coordinate and organize the volunteers to work efficiently, so if you are an organized person who can truly be a leader, this is the place for you!",
  },
];

export const departments_data: Departments = {
  title: "Our Departments",
  description:
    "At HackUPC, we are structured by departments. Each department has a specific role in the development of the event, and being part of a department doesn't mean that you need to be involved only in that department.",
  departments: departments_list_data,
};
