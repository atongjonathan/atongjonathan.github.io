/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jonathan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable web solutions that make an impact.",
  og: {
    title: "Jonathan's Portfolio",
    type: "website",
    url: "https://atongjonathan.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Atong Jonathan",
  logo_name: "JonathanAtong",
  nickname: "SG✨",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable web solutions that make an impact.",
  resumeLink:
    "https://drive.google.com/file/d/1LZr2qjFNq9g2QYHtltC6ySSrPKRgSTb7/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/atongjonathan",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/atongjonathan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jonathan-atong/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://atongjonathan.github.io/website/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:atongjonathan@hmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/AtongJona",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/wanglee.atong",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jona_atong/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website using HTML, CSS and Javascript",
        "⚡ Developing web applications front end using the React",
        "⚡ Creating application backend in Django, Node & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://www.leetcode.com/atongjona",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/atongjonathan2",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codepen.io/jonathan-atong",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/atongjona64",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Maasai Mara University",
      subtitle: "Bachelor’s Degree in Computer Science",
      logo_path: "mmarau.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have gained deep understanding of concepts including algorithms, data structures, and software development methodologies.",
        "⚡ I have acquired expertise in specialized areas such as Artificial Intelligence, Machine Learning, and Computer Networks.",
        "⚡ I have hands on experience in research projects and collaborative coding skills thus contributing effectively to the ever-evolving field of Computer Science.",
      ],
      website_link: "https://www.mmarau.ac.ke/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Development Certification",
      subtitle: "- MTF School",
      logo_path: "MTF.png",
      certificate_link:
        "https://drive.google.com/file/d/15fEtX-PJZDytGC-FSkl8NqBfQs5lRFnG/view",
      alt_name: "mtf",
      color_code: "#022a51",
    },
    {
      title: "Python",
      subtitle: "- Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/atongjona64/python",
      alt_name: "Kaggle",
      color_code: "#a6ddf5",
    },
    {
      title: "Computer Packages",
      subtitle: "- Redeemed Center",
      logo_path: "redeemed.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1FXljXHNlDwxAF9sFq7IDbLj4r3lBvOQZ/view?usp=sharing",
      alt_name: "ComputerPackages",
      color_code: "#1f3a67",
    },
    {
      title: "GoatMentor",
      subtitle: "- GoatMentor Training",
      logo_path: "goatmentor.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1jewXdoqTtscL48j6LkEyKe1SaKc61tXX/view?usp=sharing",
      alt_name: "GoatMentor",
      color_code: "#191717",
    },
    {
      title: "Complete Responsive Web Development",
      subtitle: "- Creative Online School",
      logo_path: "creative.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7f89ce7f-792e-43f3-9369-289f05b496b6/",
      alt_name: "Creative Online School",
      color_code: "#191717",
    },
    // {
    //   title: "Complete Responsive Web Development",
    //   subtitle: "- Creative Online School",
    //   logo_path: "creative.jpg",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-7f89ce7f-792e-43f3-9369-289f05b496b6/",
    //   alt_name: "Creative Online School",
    //   color_code: "#191717",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have showcased my functional skills during internships as a Junior Software Developer as I actively contributed to the development of software solutions, collaborated with cross-functional teams, and engaged in the complete softwarre development lifecycle.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Information Technology Point of Sale (P.O.S.)",
          company: "Tile & Carpet Centre Ltd",
          company_url: "https://tileandcarpet.co.ke/",
          logo_path: "tandc.jpeg",
          duration: "June 2023 - Aug 2023",
          location: "Parkside Towers, Mombasa Road",
          description:
            "Employed Microsoft Dynamics AX expertise to streamline inventory management, sales operations, and record-keeping for enhanced efficiency. Proactively addressed technical concerns, delivering comprehensive solutions at the Point of Sale, resulting in improved customer experiences and heightened satisfaction.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "SparePap Ltd.",
          company_url: "https://sparepap.com/",
          logo_path: "sparepap.png",
          duration: "Sept 2023 - Nov 2023",
          location: "Parklands, Nairobi",
          description:
            "Developing and maintaining the platform's software, contributing to the implementation of new features, bug fixes, and overall system enhancements. Ccollaborating with the development team to implement new features, troubleshoot issues, and enhance the overall functionality of the company website.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I present a collection of impactful web development ventures, showcasing proficiency in HTML, CSS and JavaScript for creating dynamic and visually engaging interfaces. Leveraging the Django framework, I have engaged in robust and scalable web applications that reflect both technical prowess and a key eye for design.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Bots",
  description:
    "I have worked on and deployed a few bots of my own to solve some basic automation tasks.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "RSS Poster",
      createdAt: "2023-03-06T16:26:54Z",
      description: "Automatically post articles to a channel from RSS feeds",
      url: "https://t.me/sg_gpt_bot",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jona.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Hobby",
    subtitle:
      "For individual fundamental empowerment, I like to post news articles that create awareness on reader on what is going on in the world.",
    link: "https://t.me/citizentvdigital",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Komarock, Spine Road Nairobi, Kenya",
    locality: "Kanodar",
    country: "KE",
    region: "Nairobi",
    postalCode: "00100",
    streetAddress: "Spine Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/8uFpZ2QGh15yu8eb8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
