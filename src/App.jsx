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
              name: "Head of Engineering",
              description: [
                "Led the engineering organization, managed a multicultural team of 4 Senior EMs, 1 Agile Coach, 32 ICs",
                "Designed and executed technical strategy and engineering roadmap aligned with business in terms of product quality and performances, security and reliability",
                "Accomplished a ~70% reduction of global defects and reduced response time to critical support requests by ~95%",
                "Reduced security issues by ~60% by creating and implementing a structured vulnerabilities management process",
                "Ensured 100% of users issues were addressed by structuring software ownership according to DDD principles",
                "Collaborated successfully with multiple departments like Product, Support and HR",
                "Reached all-time-high in engineering eNPS (8.40 out of 10); retained 100% of talents"
              ],
              from: "August 2024",
              to: "Present"
            },
            {
              name: "Senior Engineering Manager",
              description: [
                "Spearheaded 2 strategic product areas, coached and mentored managers and 4 cross-functional teams",
                "Collaborated cross-functionally with multiple PMs, designers and UX researchers",
                "Empowered engineers through self-organization and introduction of XP and Lean best practices, boosting flow efficiency and cycle time by ~60%",
                "Reduced bugs by 70% by promoting a customer centric mindset, QA shift-left, dogfooding/shadowing",
                "Achieved the highest eNPS (8.84 out of 10) of the org, leading to 100% talent retention"
              ],
              from: "October 2023",
              to: "August 2024"
            }
          ]
        },
        {
          name: "Casavo Management Spa",
          roles: [
            {
              name: "Engineering Manager / Head of Engineering",
              description: [
                  "Managed 4 built-from-scratch high-performing cross-functional agile development teams (~25 engineers) in a hyper-growth remote-first scale-up context; scaled the whole tech organization by 4x",
                  "Established technical strategy, OKRs, KPIs and processes that empowered teams to decrease cycle time by ~30%, optimize external services costs by ~40%, reduce tech debt by ~35%, increase conversion rate by ~20%",
                  "Coordinated with 5 cross-functional business partners (product, design, strategy, operations, marketing)",
                  "Reorganized hiring, performance review and compensation using a meritocratic dual-track career ladder",
                  "Realized the most diverse and inclusive team of the organization; maintained 100% retention of top performers"
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
                "Managed local and remote development teams of 15 engineers across two Italian classifieds platforms",
                "Drove agile adoption and established a culture of collaboration between tech and business which resulted in 0% employees churn rate, increase website speed by ~70%, reduce technical debt by 25%, evolve technologies/architecture, streamline processes",
                "Contributed to global strategy through monthly eBay Classifieds Group CTO and Architects roundtables"
              ],
              from: "February 2020",
              to: "March 2021"
            },
            {
              name: "Software Engineering Manager",
              description: [
                "Guided the technical discussion during the management team’s weekly meeting,",
                "Defined short & long term technical strategy for the evolution of product and infrastructure, analyzed feasibility and provided estimations based on team’s capacity, ensuring 100% delivery on time and budget",
                "Recruited, formed and led a new technical team of 10 senior professionals, strengthened team culture and motivated engineers according to company's goals & values; 20% hands-on software & architecture",
                "Promoted and achieved cross-functional collaboration with product, data, marketing, business stakeholders"
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
        name: "Escuela Europea de Coaching",
        description: "Executive Coaching",
        date: "2024 - 2025"
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
      "People management, Engineering management, Agile methodologies, Hiring, Coaching, Technical strategy, Conflict resolution, Organizational design, Remote management, Nonviolent communication, OKR, Stakeholder management, Scaling engineering teams",
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
