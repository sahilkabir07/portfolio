import project1 from "../assets/projects/puma-collage.jpg";
import project2 from "../assets/projects/etm-collage (1).jpg";
import project3 from "../assets/projects/js-collage.jpg";

export const HERO_CONTENT = `A full-stack web developer who loves building things that look good and work even better.
I work with technologies like React, Next.js, Node.js, MongoDB, and MySQL to create seamless web experiences.
After completing a full-stack dev course at PW Skills, I’ve been busy working on real-world projects and sharpening my skills every day.
I care about writing clean code, solving real problems, and delivering user-friendly solutions.
If you're into simple, functional, and well-built web apps — we’re already on the same page.`;

export const ABOUT_TEXT = `I’m a self-taught full-stack web developer who’s always been curious about how things work behind the screen. What started as a basic interest soon turned into a full-on passion, leading me to complete a full-stack web development course at PW Skills. Since then, I’ve built multiple real-world projects using React, Node.js, Express, and MongoDB — always learning something new along the way.

I enjoy the challenge of solving problems through code and turning ideas into user-friendly digital experiences. Whether it's frontend design or backend logic, I like keeping things clean, efficient, and purposeful. Outside of coding, I’m usually exploring new tools, improving my skills, or just geeking out over tech.`;

export const PROJECTS = [
  {
    title: "PUMA CLONE",
    image: project1,
    description:
      "A fully responsive Puma website clone built using React, Tailwind CSS, and JWT-based authentication. It features dynamic product listings, a functional cart system with backend integration using Node.js and MongoDB, and smooth user login/signup. Designed to deliver a seamless shopping experience from start to finish.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    github: "https://github.com/sahilkabir07/pumaClone",
  },
  {
    title: "Employee Task Management App",
    image: project2,
    description:
      "A role-based Employee Task Manager app built with React and Context API. Admins can assign and track tasks, while employees can update task statuses in real time. All data is managed locally using localStorage, ensuring a smooth and interactive experience without a backend. Perfect for managing small teams efficiently.",
    technologies: ["HTML", "CSS", "React", "localStorage", "Context API"],
    github: "https://github.com/sahilkabir07/employee-task-manager",
  },
  {
    title: "Qr code generator , Weather App , News App , Pixel App",
    image: project3,
    description:
      " QR Code Generator – Instantly creates downloadable QR codes from any text or URL input Weather App – Fetches real-time weather data using an API and displays it with a clean UI.  News App – Shows top headlines across various categories using the NewsAPI.  Pixel App – A fun grid-based pixel drawing board with color selection and reset options.Each project focuses on DOM manipulation, API integration, and interactive UI design — all without any libraries or frameworks.",
    technologies: ["HTML", "CSS", "JS", "API", "DOM"],
    github: "https://github.com/sahilkabir07/qrCodeGenerator",
  },
];

export const CONTACT = {
  address: "Patna-800006 , Bihar , INDIA",
  PhoneNo: "9117215352",
  email: "sahilakthar8986@gmail.com",
};
