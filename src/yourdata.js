// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
//import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import databaseIcon from "./images/database.png"
import pythonIcon from "./images/python.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

//work Pictures
import orspImg from "./images/healthatTxState.jpg"
import freeman from "./images/freeman-center.png"
import tranHealthImg from "./images/2018-hss-2.jpg"
import oldMain from "./images/oldmain_2560.jpg"
import rcCar from "./images/rcCar.jpg"
import budgety from "./images/Budgety.png"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Chris",
  headerTagline: [
    //Line 1 For Header
    "Builder of programs",
    //Line 2 For Header
    "websites, robots",
    //Line 3 For Header
    "and experiences",
  ],
  //   Header Paragraph
  headerParagraph:
    "Avid problem-solver with a knack for communicating with other humans in such a way that they don't suspect that I have no idea what im doing",

  //Contact Email
  contactEmail: "chjlarson@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Texas State University - Office of Research and Sponsored Programs (TXST ORSP)",
      para:
        "Create and manage content, webpages, and databases accross all of the TXST ORSP website and subdepartments utilizing HTML, CSS, JavaScript, JQuery, MySQL, and a CMS to manage over 1000 subpages", // Add Your Service Type Here
      //Project Image
      imageSrc:
        orspImg,
      //Project URL
      url: "https://www.txstate.edu/research/",
    },
    {
      title: "Texas State University - Freeman Center", 
      para:
        "An extension of creating and managing content, webpages, and databases for the TXST ORSP, I also created and manage the content, webpages, and databases for multiple centers throughout the university including the Freeman Center", // Add Your Service Type Here
      //Project Image
      imageSrc:
        freeman,
      //Project URL
      url: "https://www.txstate.edu/freemanranch/",
    },
    {
      title: "Texas State University - Translational Health Research Center", 
      para:
      "An extension of creating and managing content, webpages, and databases for the TXST ORSP, I also created and manage the content, webpages, and databases for multiple centers throughout the university including the Translational Health Research Center",
      //Project Image
      imageSrc:
        tranHealthImg,
      //Project URL
      url: "https://healthresearch.txstate.edu/",
    },
    {
      title: "Texas State University - University Research Foundation", 
      para:
      "An extension of creating and managing content, webpages, and databases for the TXST ORSP, I also created and manage the content, webpages, and databases for the University Research Foundation website",
      //Project Image
      imageSrc:
        oldMain,
      //Project URL
      url: "https://rf.research.txstate.edu/",
    },
    {
      title: "Collision Avoiding RC Car", 
      para:
        "This was my senior capstone I did while I was getting my BSCS. It's a very modular system that I continue to picked pieces out of to make multiple different version of this project over the years, including scaling this up to work with my daughters power wheel car! These are the original project files that I use and expand on when I start working on a new project that fits this scope.", // Add Your Service Type Here
      //Project Image
      imageSrc:
        rcCar,
      //Project URL
      url: "https://github.com/chjlarson/Collision_Avoiding_RC_Car",
    },
    {
      title: "Budgety", 
      para:
        "Budgety is a simple budget calculator I made while practicing JavaScript. With more of my time spent with my daughter as she grows older, I found myself with less and less time to focus on more indepth freelance projects. So projects like Budgety allows me the flexibility to learn new thing and explore new technologies when they come out! Included you will see projects writting with JavaScript, C# .Net, Python, Java, etc so feel free to peruse! ",
      //Project Image
      imageSrc:
        budgety,
      //Project URL
      url: "https://github.com/chjlarson/Budgety",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Investor. Philanthropist. Concert Lover. Art Collector. Avid animal lover/owner of small Zoo that includes a cat, dog, toddler, turtle, tortoises, and various plants",
  aboutParaTwo:
    "I am an empathetic leader and a strong communicator personable enough to work along side my colleagues to work out plans to reach our desired outcomes. ",
  aboutParaThree:
    "Being a good parent is always going to be #1 on my priority list, without a doubt! I am a strong believer in conintuous learning and giving without getting anything in return. I go out of my way to improve myself mentally and physically, but also make sure to support those I surround myself with and give back to the communities that helped support me. When I'm not spending time with my daughter or working on improving myself and my development skills, I'm absored into fun projects! I rehab rental properties, build robots, tinker with my car, convert a sprinter van into an RV, create and print 3D models, among a number of other things. ",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML5: Advanced, 2014 - Present",
    },
    {
      img: cssIcon,
      para:
        "CSS: Advanced, 2014 - Present",
    },
    {
      img: jsIcon,
      para:
        "JavaScript: Intermediate, 2014 - Present",
    },
    {
      img: databaseIcon,
      para:
        "SQL: Advanced, 2015 - Present",
    },
    {
      img: pythonIcon,
      para:
        "Python: Advanced, 2013 - Present",
    },
    {
      img: designIcon,
      para:
        "UI/UX Design: Intermediate, 2017 * Present",
    },
    {
      img:"",
      para:"",
    },
    {
      img: codeIcon,
      para:
        "Front-end Development: Intermediate, 2017 - Present",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's work together!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/chjlarson" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/chjlarson/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/clarsseesstars/",
    },
  ],

  // End Contact Section ---------------
}
