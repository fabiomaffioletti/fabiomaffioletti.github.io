import Header from "./Header.jsx"
import Summary from "./Summary.jsx"
import Companies from "./Companies.jsx"
import Education from "./Education.jsx"
import Skills from "./Skills.jsx"
import Links from "./Links.jsx"
import AdditionalInfo from "./AdditionalInfo.jsx"
import Footer from "./Footer.jsx"

function App() {

  const curriculum = {
    experience: {
      companies: [
        {
          name: "Tidio",
          roles: [
            {
              name: "Senior Engineering Manager",
              description: [
                "Led the Customer Service product area (Helpdesk and AI), managed and mentored managers and 4 cross-functional teams",
                "Collaborated with multiple PMs, designers and UX researchers to over deliver quarterly OKRs",
                "Reduced cycle time by ~60% fostering XP and Lean best practices and streamlining teams’ processes",
                "Reduced by 70% the bugs backlog by promoting QA shift-left, dogfooding and ensuring time for quality work",
                "Empowered engineers and fostered a culture of full self-organization and autonomy"
              ],
              from: "October 2023",
              to: "Present"
            }
          ]
        },
        {
          name: "Casavo Management Spa",
          roles: [
            {
              name: "Engineering Manager / Head of Engineering",
              description: [
                  "Managed 4 built-from-scratch high-performing cross-functional agile development teams in a hyper-growth remote-first scale-up context, co-designed and scaled by 4x the whole tech organization",
                  "Established technical strategy, OKRs, KPIs and processes that empowered teams to decrease cycle time by ~30%, optimize external services costs by ~40%, reduce tech debt by ~35%, increase conversion rate by ~20%",
                  "Coordinated with 5 cross-functional business partners (product, design, strategy, operations, marketing) toward a successful accomplishment of the company strategy",
                  "Led 2 managers and up to 25 software & data engineers through regular 1:1s, coaching and goal setting",
                  "Reorganized hiring, performance review and compensation processes using a meritocratic dual-track career ladder, which resulted in the retention of 100% of top talents",
                  "Realized the most diverse and inclusive team of the organization, protecting psychological safety, promoting collaboration, continuous feedback and continuous improvement"
              ],
              from: "March 2021",
              to: "September 2023"
            }
          ]
        },
        {
          name: "eBay Inc",
          roles: [
            {
              name: "Head of Engineering / CTO",
              description: [
                "Managed local and remote development teams with 15 direct and indirect reports working on the two Italian classifieds platforms automobile.it and kijiji.it",
                "Fostered agile adoption and established a culture of collaboration between tech and business which resulted in 0% employees churn rate, increase website speed by ~70%, reduce technical debt by 25%, evolve technologies/architecture, streamline processes",
                "Participated at the monthly international eBay Classifieds Group CTOs & Architects round tables"
              ],
              from: "February 2020",
              to: "March 2021"
            },
            {
              name: "Software Engineering Manager",
              description: [
                "Guided the technical discussion during the management team’s weekly meeting",
                "Defined short & long term technical strategy for the evolution of product and infrastructure, analyzed feasibility and provided estimations based on team’s capacity, ensuring 100% delivery on time and budget",
                "Recruited, formed and led a new technical team of 10 senior professionals, strengthened team culture and motivated engineers according to company's goals & values",
                "Promoted and achieved cross-functional collaboration with product, data, marketing, business stakeholders",
                "Continued with development and software/cloud architecture activities for 20% of the time"
              ],
              from: "February 2018",
              to: "February 2020"
            }
            ,
            {
              name: "Senior Software Engineer",
              description: [
                "Designed and developed vertical classifieds automobile.it (~7M MAU), based on newest technologies and a microservices architecture in the cloud, as a member of an agile team made of 10 people",
                "Migrated the old website (mobile.de) with no downtime, seamlessly onboarded 2500+ existing car dealers and their ads, revamped SEO, setup CI pipelines, created REST API for partners integration as tech reference",
                "Awarded in 2017 for implementing a project that boosted leads to car dealers by 20%",
                "Advocated company’s culture and values, facilitated communication between product and tech"
              ],
              from: "June 2014",
              to: "February 2018"
            }
          ]
        },
        {
          name: "Skebby Mobile Solutions srl",
          roles: [
            {
              name: "Senior Software Engineer",
              description: [
                  "Developed a SMS platform handling millions of messages/day using Spring Boot, MySQL, ActiveMQ, Jenkins"
              ],
              from: "December 2013",
              to: "June 2014"
            }
          ]
        },
        {
          name: "Lumata / Buongiorno Spa",
          roles: [
            {
              name: "Senior Software Engineer",
              description: [
                "Contributed, as main engineer and international technical reference, to the development of the core API and web apps for mission critical, multitenant and large scale telecom services (~20 millions users)",
                "Created a back-office tool that gave 100% autonomy to business stakeholders removing tech team dependency"
              ],
              from: "May 2010",
              to: "November 2013"
            }
          ]
        },
        {
          name: "Vidiemme Consulting srl",
          roles: [
            {
              name: "Software Engineer",
              description: [
                "Implemented a wide variety of small to medium projects using Spring. Guided a team of three engineers"
              ],
              from: "May 2008",
              to: "April 2010"
            }
          ]
        }        
      ]
    },
    education: [
      {
        name: "Politecnico di Milano",
        description: "M.Sc. in Computer Science",
        date: "July 2007"
      },
      {
        name: "Remote-how",
        description: "Academy for Managers",
        date: "March 2022"
      },
      {
        name: "Certified Secure",
        description: "Certified Secure yearly training",
        date: "2014 – 2020"
      },
      {
        name: "eBay",
        description: "Leader as Coach",
        date: "April 2018"
      }
    ],
    skills: [
      "People management, Engineering management, Agile methodologies, Hiring, Coaching, Technical strategy, Conflict resolution, Organizational design, Remote management, Nonviolent communication",
      "System design, Java, Spring, Python, Redis, MySQL, Elasticsearch, RabbitMQ, Docker, TDD, DDD, CI/CD"
    ],
    links: [
      {
        title: "Wineries on the Road",
        description: "Android application to explore and visit Italian wineries",
        href: "https://play.google.com/store/apps/details?id=com.cantineontheroad"
      },
      {
        title: "JSONDoc",
        description: "Java and Spring library to document API endpoints",
        href: "http://jsondoc.org/"
      },
      {
        title: "MissPlitty",
        description: "Android application to manage group expenses",
        href: "https://play.google.com/store/apps/details?id=com.fubbyo"
      },
      {
        title: "Github",
        description: "Personal Github page",
        href: "https://github.com/fabiomaffioletti"
      },
      {
        title: "Resources for EMs",
        description: "Collection of learning resources for Engineering Managers and technical leaders",
        href: "https://whimsical.com/resources-for-engineering-management-2Jut7BVjoSyBXgB8fBVeHd"
      }
    ],
    additional_info: [
        "Languages: Italian (native), English (fluent)",
        "Avid reader. Amateur photographer and cook. Sommelier. Guitar player."
    ]
  }

  return(
    <>
      <Header />
      <Summary />
      <Companies companies={curriculum.experience.companies} />
      <Education education={curriculum.education} />
      <Skills skills={curriculum.skills} />
      <Links links={curriculum.links} />
      <AdditionalInfo additional_info={curriculum.additional_info} />
      <Footer />
    </>
  )
}

export default App
