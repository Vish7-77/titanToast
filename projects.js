const data = [
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
    title: "Qurex",
    description:
      "Start your treatment journey, Let’s address the core concerns in a confidential and private space",
    link: "https://qurex.in/",
    pic: "./assets/qurex.png",
  },
  {
    title: "Eservice-Pro",
    description:
      "Looking for a field service management software? Look no further! Our pricing list is sure to have the right software for you.",
    link: "https://eservicepro.com/",
    pic: "./assets/eservice.png",
  },
  {
    title: "S9 trucks",
    description:
      "Fast & Secure booking Hire a truck instantly. Book online or just call us. Truck will be at your pickup point",
    link: "https://s9trucks.com/",
    pic: "./assets/s9.png",
  },
  {
    title: "HomeVestas",
    description:
      "at HOMEVESTA, understand the special needs of NRIs for property management. Therefore, we have designed our services according to the distinct requirements of NRIs.",
    link: "https://homevestas.com/",
    pic: "./assets/homevestas.png",
  },
  {
    title: "Kitelle",
    description:
      "at HOMEVESTA, understand the special needs of NRIs for property management. Therefore, we have designed our services according to the distinct requirements of NRIs.",
    link: "https://Kitelle.com/",
    pic: "./assets/kitelle.png",
  },
  {
    title: "KitelleJobs",
    description:
      "at HOMEVESTA, understand the special needs of NRIs for property management. Therefore, we have designed our services according to the distinct requirements of NRIs.",
    link: "https://Kitellejobs.com/",
    pic: "./assets/kitellejons.png",
  },
  {
    title: "Ranker guide Student",
    description:
      "Discover a revolutionary learning experience at Ranker Guide, where education meets innovation",
    link: "https://rankerguide.in/",
    pic: "./assets/rankerguide.png",
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
    title: "Smit Gala",
    description:
      "As a holistic marketer, my focus is on creating an integrated marketing strategy that considers the full range of tools and tactics available to reach and engage customers.",
    link: "https://smitgala.com/",
    pic: "./assets/smit.png",
  },
  {
    title: "Zir",
    description:
      "An Ticket management system made to maintain alll my work and catch my progress on each project",
    link: "https://zir-gui.vercel.app",
    pic: "./assets/zir.png",
  },
  {
    title: "Auris Labs",
    description:
      "We are on a mission to revolutionize the industry with innovation and cutting-edge technology solutions.",
    link: "https://auris-labs.com/",
    pic: "./assets/auris.png",
  },
  {
    title: "Ak-Elearning",
    description: "An Ak Product for students, as E-learning platform",
    link: "https://ak-edu-e-learning.onrender.com/",
    pic: "./assets/ak-elearn.png",
  },
  {
    title: "lil-Mail Service",
    description:
      "Email service for your website form, integrate in your HTML form and provide your mail, you will be notified if any one submit your website form",
    link: "https://emailservice.smitgala.com/",
    pic: "./assets/lilmail.png",
  },
  {
    title: "Veena cabs",
    description:
      "We’ve fine experience in providing intercity drop taxi services. We are expert in the field of tours & travels in Bangalore, and commited to provide you the best service.",
    link: "https://veenacabs.in/",
    pic: "./assets/veenacabs.png",
  },
];

const appContainer = document.getElementById("app-container");

data.forEach((item) => {
  const card = document.createElement("div");
  card.className =
    "relative flex  sm:h-[34rem] h-fit max-w-[24rem] m-5 flex-col justify-between overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md";

  const imageContainer = document.createElement("div");
  imageContainer.className =
    "relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border";

  const image = document.createElement("img");
  image.src = item.pic;
  image.alt = "Dev";
  image.loading = "lazy";
  imageContainer.appendChild(image);

  const contentContainer = document.createElement("div");
  contentContainer.className = "p-6";

  const title = document.createElement("h4");
  title.className =
    "block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900";
  title.textContent = item.title;

  const description = document.createElement("p");
  description.className =
    "block mt-3 font-sans sm:flex hidden text-xl antialiased font-normal leading-relaxed text-gray-700";
  description.textContent = item.description;

  contentContainer.appendChild(title);
  contentContainer.appendChild(description);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "p-6 pt-3";

  const reserveButton = document.createElement("a");
  reserveButton.className =
    "block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
  reserveButton.href = item?.link;
  reserveButton.target = "_blank";
  reserveButton.textContent = "Live visit";

  buttonContainer.appendChild(reserveButton);

  card.appendChild(imageContainer);
  card.appendChild(contentContainer);
  card.appendChild(buttonContainer);

  appContainer.appendChild(card);
});
