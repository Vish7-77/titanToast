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
    link: "https://ak-edu.vercel.app",
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
  reserveButton.textContent = "Live visit";
  reserveButton.target = "_blank";
  buttonContainer.appendChild(reserveButton);

  card.appendChild(imageContainer);
  card.appendChild(contentContainer);
  card.appendChild(buttonContainer);

  appContainer.appendChild(card);
});

const techdata = [
  {
    description: "Html Css JS",
    name: "WebSites build",
    image: "https://blog.knoldus.com/wp-content/uploads/2020/05/Logo.png",
  },
  {
    description: "React",
    name: "WebApplications",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    description: "Next-Js",
    name: "fledge Framework",
    image:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
  },
  {
    description: "NodeJs",
    name: "Server Runtime",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
  },
  {
    description: "Mongo",
    name: "Database",
    image:
      "https://media.licdn.com/dms/image/C5112AQFQqaMd1JebMg/article-cover_image-shrink_600_2000/0/1582347809028?e=2147483647&v=beta&t=XPKc9BU0gjYR08TMHidLkpHyV5ZMO2fD244-FZz97Rs",
  },
  {
    description: "Docker",
    name: "Containerization",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YMYzI15AWBTmGnAKuiQikYypM8f4n10vh3_mphh4RQ&s",
  },
  {
    description: "Native",
    name: "Mobile Application",
    image:
      "https://miro.medium.com/v2/resize:fit:1000/1*GkR93AAlILkmE_3QQf88Ug.png",
  },
  {
    description: "AWS",
    name: "Webservice ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    description: "Linux",
    name: "Command line interface ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
  },

  {
    description: "Firebase",
    name: "Store or authentication",
    image:
      "https://firebase.google.com/static/images/homepage/cloud-plus-firebase_1x.png",
  },
  {
    description: "Supabase",
    name: "Store & auth",
    image:
      "https://getlogo.net/wp-content/uploads/2020/11/supabase-logo-vector.png",
  },

  {
    description: "VCS",
    name: "Github/Bitbucket/labs",
    image:
      "https://images.ctfassets.net/fczckc3dt6mv/6GGy2NukOJAWsB8xn8uCwY/3de873eb8ed2c12d44bdcedd5d1e4681/cat-07-30-18.jpg",
  },
  {
    description: "Cloudflare",
    name: "Dns And CDN ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/1200px-Cloudflare_Logo.svg.png",
  },
  {
    description: "RazorPay / Stripe",
    name: "Payment GatesWays ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorhm2nLg05SPnNRybg7UotZtRBf8OWgFwsQ&usqp=CAU",
  },
];

const container = document.getElementById("tech-container");

techdata.forEach((item) => {
  const techCard = document.createElement("div");
  techCard.className =
    "flex-shrink-0 m-6 h-[14rem] relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg";

  techCard.innerHTML = `
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
          style="transform: scale(1.5); opacity: 0.1;">
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
          <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
          </div>
          <img class="relative w-40 aspect-video object-contain" src=${item?.image} alt="">
      </div>
      <div class="relative t px-6 pb-6 mt-6 ">
          <span class="block opacity-50 text-[0.7rem] -mb-1">${item.name}</span>
          <div class="flex justify-between">
              <span class="block font-semibold text-xl">${item.description}</span>
          </div>
      </div>
    `;

  container.appendChild(techCard);
});
