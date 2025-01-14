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
    description: "Python",
    name: "Scripting",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },  
  {
    description: "Next-Js",
    name: "Fledge Framework",
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
    description: "MongoDB",
    name: "Database",
    image:
      "https://media.licdn.com/dms/image/C5112AQFQqaMd1JebMg/article-cover_image-shrink_600_2000/0/1582347809028?e=2147483647&v=beta&t=XPKc9BU0gjYR08TMHidLkpHyV5ZMO2fD244-FZz97Rs",
  },
  {
    description: "Cassandra",
    name: "NoSQL Database",
    image:
    "https://cassandra.apache.org/assets/img/logo-white-r.png",
  },
  {
    description: "Docker",
    name: "Containerization",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YMYzI15AWBTmGnAKuiQikYypM8f4n10vh3_mphh4RQ&s",
  },
  {
    description: "Kubernetes",
    name: "ContainerOrchestration",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  },  
  {
    description: "React Native",
    name: "Mobile Application",
    image:
      "https://miro.medium.com/v2/resize:fit:1000/1*GkR93AAlILkmE_3QQf88Ug.png",
  },
  {
    description: "AWS",
    name: "Webservice",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    description: "Linux",
    name: "Command line interface",
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
    name: "DNS And CDN",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/1200px-Cloudflare_Logo.svg.png",
  },
  {
    description: "RazorPay / Stripe",
    name: "Payment Gateways",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorhm2nLg05SPnNRybg7UotZtRBf8OWgFwsQ&usqp=CAU",
  },
  {
    description: "Kafka",
    name: "Distributed Event Streaming",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*5V1PnKn68SvmEpXYI-3CPw.png",
  },
  
  {
    description: "RabbitMQ",
    name: "Message Queue",
    image:
      "https://download.logo.wine/logo/RabbitMQ/RabbitMQ-Logo.wine.png", 
  },
  {
    description: "Zookeeper",
    name: "Distributed Coordination",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Apache_ZooKeeper_logo.svg", 
  },
  {
    description: "Jest",
    name: "JavaScript Testing",
    image:
      "https://jestjs.io/img/opengraph.png", 
  },
  {
    description: "SonarQube",
    name: "Code Quality and Security",
    image:
      "https://www.svgrepo.com/show/354365/sonarqube.svg", 
  },
  {
    description: "Elasticsearch",
    name: "Search Engine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YIOrNQNat2aRtdT_8jWQWpVH5BM7kLcc4A&s", 
  },
  
  {
    description: "Redis",
    name: "In-memory Data Store",
    image:
      "https://cdn.worldvectorlogo.com/logos/redis.svg",
  },
  {
    description: "Nginx",
    name: "Web Server/Reverse Proxy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
  },
  {
    description: "Splunk",
    name: "Log Management & Analytics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSrZ3hhDnaFrTOYxczCCIKBH1Ud5AP_V-Bg&s",
  },
  {
    description: "Kibana",
    name: "Data Visualization for Elasticsearch",
    image:
      "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
  },
  {
    description: "Prometheus",
    name: "Monitoring System",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
  },
  {
    description: "Grafana",
    name: "Analytics & Monitoring",
    image:
      "https://cdn.worldvectorlogo.com/logos/grafana.svg",
  },
];





const container = document.getElementById("tech-container");

techdata.forEach((item) => {
  const techCard = document.createElement("div");
  techCard.className =
    "flex-shrink-0 m-6 h-[14rem] relative overflow-hidden bg-white  max-w-xs shadow-lg";

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
