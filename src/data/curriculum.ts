export interface Role {
  id: string;
  name: string;
  description: string[];
  from: string;
  to: string;
}

export interface Company {
  id: string;
  name: string;
  roles: Role[];
}

export interface EducationItem {
  id: string;
  name: string;
  description: string;
  date: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface InfoItem {
  id: string;
  label: string;
  value: string;
}

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface Curriculum {
  /** Paragraphs of the CV summary; {years} is replaced by the live years of experience. */
  summary: string[];
  experience: {
    companies: Company[];
  };
  education: EducationItem[];
  skills: SkillGroup[];
  links: LinkItem[];
  additionalInfo: InfoItem[];
}

export const curriculum: Curriculum = {
  summary: [
    "With over {years} years of experience in the technology industry, I have grown from hands-on software engineering and architecture roles to leading engineering organizations and driving technology strategy. Throughout my career, I have helped startups and established companies build and scale high-performing teams, modernize engineering practices, and deliver technology solutions that create measurable business impact.",
    "Today, I focus on the intersection of technology leadership, AI strategy, and organizational transformation. I believe AI is not just a technological shift, but an opportunity to rethink how organizations operate, collaborate and create value.",
    "I have led initiatives to accelerate engineering productivity through AI adoption, establish AI governance frameworks, mitigate Shadow AI risks, and optimize AI operational costs. My approach combines strategic vision with hands-on execution, empowering teams across functions to adopt AI responsibly and effectively while maintaining quality, security and business alignment.",
    "As an Executive Coach and people-centric leader, I am passionate about building environments where people and teams can thrive. I believe sustainable performance comes from trust, psychological safety, open communication, continuous learning, and shared ownership. I strive to develop leaders, empower individuals and evolve organizational structures to meet the challenges of an increasingly AI-driven world.",
  ],
  experience: {
    companies: [
      {
        id: "tidio",
        name: "Tidio",
        roles: [
          {
            id: "tidio-head-of-engineering",
            name: "Head of Engineering",
            description: [
              "Led a multicultural and distributed org of up to 5 Senior EMs, 1 Agile Coach, and 42 ICs. Reached company's record eNPS (9.29/10)",
              "Designed and executed technical strategy and engineering roadmap aligned with business which enabled acquisition of premium customers and SOC 2 Type 2 certification",
              "Boosted engineering throughput by +125% by modernizing the SDLC through targeted AI adoption and workflow optimisations while keeping strict quality standards",
              "Mitigated enterprise risk and drastically reduced Shadow AI by architecting an AI Tech Radar and compliance framework, incorporating automated vulnerability scans via the Anthropic Cyber Verification Program",
              "Reduced AI operational expenditure and prevented cost scaling, capturing a conservative $500K+ in annualized cost avoidance by restructuring licensing models, championing AI literacy and cost-effective adoption across multiple departments, backed by a self-conceived and self-implemented AI spending analytics platform",
              "Evolved EM and IC roles for the AI era while fostering cross-functional value streams based on DDD principles",
              "Aligned with Product and Support to prioritize quality initiatives, accomplishing a ~70% reduction of global defects and reducing response time to critical requests by ~95%, cutting support costs, improving NPS and ensuring SLA compliance for enterprise/premium customers",
              "Reduced security issues by ~60% by creating and implementing a structured vulnerabilities management process",
            ],
            from: "August 2024",
            to: "Present",
          },
          {
            id: "tidio-senior-engineering-manager",
            name: "Senior Engineering Manager",
            description: [
              "Spearheaded 2 strategic product areas, coached and mentored managers and 4 cross-functional teams",
              "Collaborated cross-functionally with multiple PMs, designers and UX researchers",
              "Empowered engineers through self-organization and introduction of XP and Lean best practices, boosting flow efficiency and cycle time by ~60%",
              "Reduced bugs by 70% by promoting a customer centric mindset, QA shift-left, dogfooding/shadowing",
              "Achieved the highest eNPS (8.84 out of 10) of the org, leading to 100% talent retention",
            ],
            from: "October 2023",
            to: "August 2024",
          },
        ],
      },
      {
        id: "casavo",
        name: "Casavo Management Spa",
        roles: [
          {
            id: "casavo-engineering-manager",
            name: "Engineering Manager / Head of Engineering",
            description: [
              "Managed 4 built-from-scratch high-performing cross-functional agile development teams (~25 engineers) in a hyper-growth remote-first scale-up context; scaled the whole tech organization by 4x",
              "Established technical strategy, OKRs, KPIs and processes that empowered teams to decrease cycle time by ~30%, optimize external services costs by ~40%, reduce tech debt by ~35%, increase conversion rate by ~20%",
              "Coordinated with 5 cross-functional business partners (product, design, strategy, operations, marketing)",
              "Reorganized hiring, performance review and compensation using a meritocratic dual-track career ladder",
              "Realized the most diverse and inclusive team of the organization; maintained 100% retention of top performers",
            ],
            from: "March 2021",
            to: "September 2023",
          },
        ],
      },
      {
        id: "ebay",
        name: "eBay Inc",
        roles: [
          {
            id: "ebay-head-of-engineering",
            name: "Head of Engineering / CTO",
            description: [
              "Managed local and remote development teams of 15 engineers across two Italian classifieds platforms",
              "Drove agile adoption and established a culture of collaboration between tech and business which resulted in 0% employees churn rate, increase website speed by ~70%, reduce technical debt by 25%, evolve technologies/architecture, streamline processes",
              "Contributed to global strategy through monthly eBay Classifieds Group CTO and Architects roundtables",
            ],
            from: "February 2020",
            to: "March 2021",
          },
          {
            id: "ebay-software-engineering-manager",
            name: "Software Engineering Manager",
            description: [
              "Guided the technical discussion during the management team’s weekly meeting",
              "Defined short & long term technical strategy for the evolution of product and infrastructure, analyzed feasibility and provided estimations based on team’s capacity, ensuring 100% delivery on time and budget",
              "Recruited, formed and led a new technical team of 10 senior professionals, strengthened team culture and motivated engineers according to company's goals & values; 20% hands-on software & architecture",
              "Promoted and achieved cross-functional collaboration with product, data, marketing, business stakeholders",
            ],
            from: "February 2018",
            to: "February 2020",
          },
          {
            id: "ebay-senior-software-engineer",
            name: "Senior Software Engineer",
            description: [
              "Designed and developed vertical classifieds automobile.it (~7M MAU), based on newest technologies and a microservices architecture in the cloud, as a member of an agile team made of 10 people",
              "Migrated the old website (mobile.de) with no downtime, seamlessly onboarded 2500+ existing car dealers and their ads, revamped SEO, setup CI pipelines, created REST API for partners integration as tech reference",
              "Awarded in 2017 for implementing a project that boosted leads to car dealers by 20%",
              "Advocated company’s culture and values, facilitated communication between product and tech",
            ],
            from: "June 2014",
            to: "February 2018",
          },
        ],
      },
      {
        id: "skebby",
        name: "Skebby Mobile Solutions srl",
        roles: [
          {
            id: "skebby-senior-software-engineer",
            name: "Senior Software Engineer",
            description: [
              "Developed a SMS platform handling millions of messages/day using Spring Boot, MySQL, ActiveMQ, Jenkins",
            ],
            from: "December 2013",
            to: "June 2014",
          },
        ],
      },
      {
        id: "lumata",
        name: "Lumata / Buongiorno Spa",
        roles: [
          {
            id: "lumata-senior-software-engineer",
            name: "Senior Software Engineer",
            description: [
              "Contributed, as main engineer and international technical reference, to the development of the core API and web apps for mission critical, multitenant and large scale telecom services (~20 millions users)",
              "Created a back-office tool that gave 100% autonomy to business stakeholders removing tech team dependency",
            ],
            from: "May 2010",
            to: "November 2013",
          },
        ],
      },
      {
        id: "vidiemme",
        name: "Vidiemme Consulting srl",
        roles: [
          {
            id: "vidiemme-software-engineer",
            name: "Software Engineer",
            description: [
              "Implemented a wide variety of small to medium projects using Spring. Guided a team of three engineers",
            ],
            from: "May 2008",
            to: "April 2010",
          },
        ],
      },
    ],
  },
  education: [
    {
      id: "polimi-msc",
      name: "Politecnico di Milano",
      description: "M.Sc. in Computer Science",
      date: "July 2007",
    },
    {
      id: "eec-executive-coaching",
      name: "Escuela Europea de Coaching",
      description: "Executive Coaching",
      date: "2024 – 2025",
    },
    {
      id: "remote-how-academy-for-managers",
      name: "Remote-how",
      description: "Academy for Managers",
      date: "March 2022",
    },
    {
      id: "certified-secure",
      name: "Certified Secure",
      description: "Certified Secure yearly training",
      date: "2014 – 2020",
    },
    {
      id: "ebay-leader-as-coach",
      name: "eBay",
      description: "Leader as Coach",
      date: "April 2018",
    },
  ],
  skills: [
    {
      id: "leadership",
      label: "Leadership",
      items: [
        "People management",
        "Engineering management",
        "Agile methodologies",
        "Hiring",
        "Coaching",
        "Technical strategy",
        "Conflict resolution",
        "Organizational design",
        "Remote management",
        "Nonviolent communication",
        "OKR",
        "Stakeholder management",
        "Scaling engineering teams",
      ],
    },
    {
      id: "technical",
      label: "Technical",
      items: [
        "System design",
        "Java",
        "Spring",
        "Python",
        "Redis",
        "MySQL",
        "Elasticsearch",
        "RabbitMQ",
        "Docker",
        "TDD",
        "DDD",
        "CI/CD",
      ],
    },
  ],
  links: [
    {
      id: "jsondoc",
      title: "JSONDoc",
      description: "Java and Spring library to document API endpoints",
      href: "http://jsondoc.org/",
    },
    {
      id: "missplitty",
      title: "MissPlitty",
      description: "Android application to manage group expenses",
      href: "https://play.google.com/store/apps/details?id=com.fubbyo",
    },
    {
      id: "github",
      title: "GitHub",
      description: "Personal GitHub page",
      href: "https://github.com/fabiomaffioletti",
    },
    {
      id: "em-resources",
      title: "Resources for EMs",
      description: "Collection of learning resources for Engineering Managers and technical leaders",
      href: "https://whimsical.com/resources-for-engineering-management-2Jut7BVjoSyBXgB8fBVeHd",
    },
  ],
  additionalInfo: [
    { id: "based-in", label: "Based in", value: "Milan, Italy" },
    {
      id: "languages",
      label: "Languages",
      value: "Italian (native), English (fluent)",
    },
    {
      id: "outside-work",
      label: "Outside work",
      value:
        "Avid reader. Amateur photographer and cook. Sommelier. Guitar player.",
    },
  ],
};
