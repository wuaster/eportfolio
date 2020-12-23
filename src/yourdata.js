// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import image1URL from "./images/image.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Aster Wu",
  headerTagline: [
    //Line 1 For Header
    "Creating innovating",
    //Line 2 For Header
    "experiences and",
    //Line 3 For Header
    "digital solutions.",
  ],
  //   Header Paragraph
  headerParagraph:
    "Welcome to my portfolio.",

  //Contact Email
  contactEmail: "wuaster2@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Blog", //Project Title - Add Your Project Title Here
      para:
        "A blog where I document my thoughts on different aspects of my job. While technical aspects are a major part of my job, I prefer to focus on the human side of things especially this early on in my career. Created using Gatsby.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: image1URL,
      //Project URL - Add Your Project Url Here
      url: "http://asterwu.me/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Skills Network Pontoon", //Project Title - Add Your Project Title Here
      para:
        "I successfully deployed a translation service, Mozilla Pontoon, onto Kubernetes by creating a Helm Chart. This was done to enable the translation of our products and services. There are plans to open source the helm chart for the larger community so it can be easily deployed to IBM Cloud Kubernetes with a click of a single button. Tools used include Kubernetes, Helm, RabbitMQ, PostgreSQL. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://raw.githubusercontent.com/mozilla/pontoon/master/docs/img/screenshots/teams-dashboard.png",
      //Project URL - Add Your Project Url Here
      url: "https://translate.skills.network",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Carbon Cash", //Project Title - Add Your Project Title Here
      para:
        "As part of an internal hackathon at IBM. We created an app to address a pressing global issue. CarbonCash is an app that aims to encourage people to choose more eco-friendly transportation methods by calculating the money they could save by not driving. In addition, CarbonCash is also capable of determining your ecological footprint in the form of CO2 emissions produced while driving. Created using Flutter.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ytimg.com/vi/sxkWHySIJyw/maxresdefault.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/wuaster/atlas",
    }

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Get in touch with me through email",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/wuaster" },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
