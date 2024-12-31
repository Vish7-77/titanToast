const data = [
  {
    title: "Staples E-Commerce",
    description:
      "Developed as part of the Staples E-Commerce project, leveraging the NERN stack (Node.js, Express, React, Next.js) to build robust features for enhanced user experience.",
    link: "https://www.staples.com/",
    pic: "https://i.ytimg.com/vi/DJfxsw49HuI/maxresdefault.jpg", 
  },
  {
    title: "SuccessWare-21",
    description:
    "A powerful platform designed to streamline business processes and improve operational efficiency for service-based industries.",
  link: "https://www.successware.com/",
    pic: "https://media.licdn.com/dms/image/v2/C4D1BAQEddy__Qrlrng/company-background_10000/company-background_10000/0/1592317232304/successware_21_a_division_of_clockwork_home_services_cover?e=2147483647&v=beta&t=95Kggq_dKyJC0px4BYfP0C68G47Jm-I0q6U_losd790", 
  },
  {
    title: "Eservice-Pro",
    description:
      "Looking for a field service management software? Look no further! Our pricing list is sure to have the right software for you.",
    link: "https://qa.eservicepro.com/",
    pic: "./assets/eservice.png",
  },
  {
    title: "Qurex",
    description:
      "Start your treatment journey, Let’s address the core concerns in a confidential and private space",
    link: "https://qurex.in/",
    pic: "./assets/qurex.png",
  },
  {
    title: "S9 trucks",
    description:
      "Fast & Secure booking Hire a truck instantly. Book online or just call us. Truck will be at your pickup point",
    link: "https://s9trucks.com/",
    pic: "./assets/s9.png",
  },

  {
    title: "Synerge",
    description:
      "curious, hardworking, sociable entrepreneurs. People who want to focus on creating great, innovative products",
    link: "https://www.synergeworkspace.com/",
    pic: "./assets/synergewebsite.png",
  },
  {
    title: " AspironKhuze",
    description:
      "  Aspiron Khuze Technologies Pvt Ltd: Pioneering Innovation in Tech Solutions.",
    link: "https://aspironkhuze.com/",
    pic: "./assets/aspironkhuze.png",
  },
  {
    title: "    Workspace",
    description:
      "Admin dashboard to maintain all the bookings for synerge  worskpace.login to varifiaction of new user.",
    link: "https://community.synergeworkspace.com/",
    pic: "./assets/workspace.png",
  },
  {
    title: "Aspirings",
    description:
      "  An Ak product for educational ERP. to maintain all the academic records and maintain them digitally.",
    link: "https://ak-edu.vercel.app",
    pic: "./assets/aspirings.png",
  },
  {
    title: "En-decor",
    description:
      "our eye for meticulous details helps us to understand client needs, formulate seamless design strategies and fashion flawless",
    link: "https://en-decor.com/",
    pic: "./assets/endecor.png",
  },
  {
    title: "AlfaAviation",
    description:
      "A premier institution at the forefront of aviation education in India. Rooted in a rich tradition of excellence and innovation, ",
    link: "https://alfaaviationacademy.in/",
    pic: "./assets/alfa.png",
  },
 
  {
    title: "HomeVestas",
    description:
      "at HOMEVESTA, understand the special needs of NRIs for property management. Therefore, we have designed our services according to the distinct requirements of NRIs.",
    link: "https://homevestas.com/",
    pic: "./assets/homevestas.png",
  },
  {
    title: "Ranker guide Web",
    description:
      "Study for Exams with selective courses and mentors and get Assured Job Placements",
    link: "https://rankerguide.com/",
    pic: "./assets/rabkerweb.png",
  },
  {
    title: "Ranker Admin",
    description:
      "at HOMEVESTA, understand the special needs of NRIs for property management. Therefore, we have designed our services according to the distinct requirements of NRIs.",
    link: "https://dev.rankerguide.in/",
    pic: "./assets/rabkeradmin.png",
  },
  {
    title: "Ak-Ems",
    description:
      "An Ems system for internal use of Aspironkhuze organization, to maintain all employee records",
    link: "https://ak-ems-hybm.onrender.com/",
    pic: "./assets/akems.png",
  },
  
  {
    title: "Zir",
    description:
      "An Ticket management system made to maintain alll my work and catch my progress on each project",
    link: "https://zir-gui.vercel.app",
    pic: "./assets/zir.png",
  },
  
  {
    title: "Ak-Elearning",
    description: "An Ak Product for students, as E-learning platform",
    link: "https://ak-edu-e-learning.onrender.com/",
    pic: "./assets/ak-elearn.png",
  },
];

const appContainer = document.getElementById("app-container");

data.forEach((item) => {
  const card = document.createElement("div");
  card.className =
    "relative flex  min-h-[23rem]   max-w-[24rem] m-5 flex-col justify-between overflow-hidden  bg-white bg-clip-border text-gray-700 shadow-md";

  const imageContainer = document.createElement("div");
  imageContainer.className =
    "relative m-0 overflow-hidden text-gray-700 border-b-2 border-black h-[14rem]  bg-transparent  rounded-none shadow-none bg-clip-border";

  const image = document.createElement("img");
  image.src = item.pic;
  image.alt = "Dev";
  image.loading = "lazy";
  image.style.height="100%"
  image.style.objectFit="cover"
  imageContainer.appendChild(image);

  const contentContainer = document.createElement("div");
  contentContainer.className = "p-6";

  const title = document.createElement("h4");
  title.className =
    "block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900";
  title.textContent = item.title;

  const description = document.createElement("p");
  description.className =
    "block mt-3 font-sans sm:flex hidden text-sm antialiased font-normal leading-relaxed text-gray-700";
  description.textContent = item.description;

  contentContainer.appendChild(title);
  contentContainer.appendChild(description);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "pl-6 pb-6";

  const reserveButton = document.createElement("a");
  reserveButton.className =
    " border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] text-sm hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none";
  reserveButton.href = item?.link;
  reserveButton.target = "_blank";
  reserveButton.style.fontSize ='11px'
  reserveButton.textContent = "Live visit";

  buttonContainer.appendChild(reserveButton);

  card.appendChild(imageContainer);
  card.appendChild(contentContainer);
  card.appendChild(buttonContainer);

  appContainer.appendChild(card);
});


