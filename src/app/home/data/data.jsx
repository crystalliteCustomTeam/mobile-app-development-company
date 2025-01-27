

// Extended Services Images
import { ArtificialIntelligence, BigData, Blockchain, FinTech, InternetOfThings, Logistics, MixedReality } from "@/src/app/app-constants"

//========= Process Images
import { Process01, Process02, Process03, Process04, Process05, Process06, Process07, Process08 } from "@/src/app/app-constants"

//========= Testimonial Images
import { ClutchLogo, GoogleLogo, TrustpilotLogo } from "@/src/app/app-constants"

//========= Engagement Images
import { DedicatedTeamModel, FixedPriceModel, HourlyPriceModel, OnsiteTeamModel } from "@/src/app/app-constants"

//========= Engagement Images
import { Automotive, ECommerce, Education, Food, Healthcare, Insurance, Music, RealEstate, SocialMedia } from "@/src/app/app-constants"
import Link from "next/link"




export const BannerData = {
    title: "Transforming Ambitious Ideas Into Powerful Digital Products ",
    content: `We combine technical expertise with visionary thinking to create apps that drive real-world impact and elevate your business`,
}

export const CompanyInfoContent = {
    subtitle: "What Drives Us?",
    title: "A Relentless Obsession With Getting It Right.",
    content: "At BitsWits, perfection is our baseline. We only partner with visionary clients — from startups developing MVPs to enterprises scaling complex solutions — to create apps that not only work but thrive in real-world scenarios. From brainstorming to deployment, we are committed to delivering excellence at every step, ensuring your app succeeds where it matters most.",
}

export const HomeServicesContent = {
    subtitle: "Our Services",
    title: "We Transform Innovative Concepts Into Powerful Digital Solutions.",
    content: "With a decade of expertise, we give entrepreneurs and SMBs the unfair advantage they need to outsmart the competition. Our timely delivery and faster time to market drive growth and expansion, providing the essential tools to stay competitive and succeed.",
}

export const HomeServicesList = [
    {
        title: "Mobile App Development",
        txt: (<>We provide end-to-end <Link href='/mobile-application-development-services'>mobile app development services</Link>, from ideation to deployment. Our team ensures optimal UI/UX design, robust backend architecture, and post-launch support, delivering secure and high-performing apps for various business needs.</>),
        url: "/mobile-application-development-services"
    },
    {
        title: "Android App Development",
        txt: (<>We specialize in <Link href='/android-app-development-company'>Android app development</Link> using Java and Kotlin, building high-performance apps optimized for the Google Play Store. Our custom solutions support diverse industries and deliver smooth user experiences across all Android devices.</>),
        url: "/android-app-development-company"
    },
    {
        title: "iOS App Development",
        txt: (<>Our <Link href='/ios-app-development-company'>iOS app development</Link> expertise includes Swift and Xcode, creating secure apps for the App Store. We build custom iOS apps that enhance user engagement and performance, providing exceptional UX across iPhones, iPads, and other Apple devices.</>),
        url: "/ios-app-development-company"
    },
    {
        title: "Cross Platform App Development",
        txt: (<>We deliver cross-platform apps using <Link href='/flutter-app-development'>Flutter</Link> and <Link href='/react-native-app-development'>React Native</Link>, providing businesses with scalable solutions. Our apps work seamlessly across iOS, Android, and other platforms, reducing development time and costs without compromising quality, positioning us as a leading <Link href='/cross-platform-app-development-services'>cross-platform app development company</Link>.</>),
        url: "/cross-platform-app-development-services"
    },
    {
        title: "Mobile Game Development",
        txt: "Our game app development services span 15+ genres, offering immersive 2D and 3D gameplay. Using advanced technologies like Unity, Unreal, and Godot, we create optimized, smooth-running games tailored for all screen sizes and devices.",
        url: "/mobile-game-development-company"
    },
    {
        title: "Blockchain App Development",
        txt: "We develop blockchain apps with secure, decentralized technologies, supporting industries like finance, healthcare, and supply chain. Using Ethereum, Hyperledger, and smart contracts, we bring transparency and automation to your blockchain app.",
        url: "/blockchain-game-development-company"
    }
]

export const CaseStudyContent = {
    subtitle: "Success In Action",
    title: "Beyond the Code: Real Stories, Real Results",
    content: "Every project is a journey, and we measure success by the results our clients achieve. From MVPs that disrupt industries to enterprise solutions that scale globally, these stories show how we transform ideas into market-leading solutions.",
}

export const ExtendedServicesContent = {
    subtitle: "Advanced Solutions",
    title: "Take Control of Your Future — Unlock the Power of Next-Gen Tech.",
    content: "Empower your business with forward-thinking solutions that sharpen decision-making, streamline complex operations, and unlock new opportunities for growth. Future-proof your business with BitsWits.",
}

export const ExtendedServicesList = [
    {
        title: "Artificial Intelligence",
        content: {
            icon: <ArtificialIntelligence />,
            heading: "Artificial Intelligence",
            description: "We develop intelligent AI-driven apps that streamline operations and enhance decision-making processes, helping businesses improve efficiency and drive growth. Our AI technologies empower businesses to make smarter, faster decisions for lasting success.",
            listItems: [
                "AI Consulting & Development",
                "Machine Learning Model Training",
                "Business System Integration",
                "AI Maintenance & Optimization",
            ],
        },
    },
    {
        title: "Generative AI",
        content: {
            icon: <BigData />,
            // icon: <BigData />,
            heading: "Generative AI",
            description: "We integrate Generative AI to produce new content and automate processes, enhancing user experiences (UX) across platforms. This technology allows businesses to streamline operations while delivering personalized, dynamic content at scale.",
            listItems: [
                "AI-Powered Content Creation",
                "Automation of Business Processes",
                "Personalized AI Interactions",
                "Platform Integration for Efficiency"
            ],
        },
    },
    {
        title: "IoT",
        content: {
            icon: <InternetOfThings />,
            heading: "IoT",
            description: "We integrate IoT technology to connect devices, enabling real-time monitoring and automation for improved efficiency. This opens up new possibilities for businesses to optimize operations and make data-driven decisions.",
            listItems: [
                "Connected Devices Monitoring",
                "Automated Operational Processes",
                "System Integration for Smart Workflows",
                "Scalable IoT Business Solutions"
            ],
        },
    },
    {
        title: "Blockchain",
        content: {
            icon: <Blockchain />,
            heading: "Blockchain",
            description: (<>We integrate blockchain technology to deliver transparent and secure business solutions across finance, <Link href='/healthcare-app-development-services'>healthcare</Link>, supply chain, and real estate sectors. This ensures enhanced security, trust, and efficiency in critical business operations.</>),
            listItems: [
                "Secure Financial Transactions",
                "Transparent Supply Chain Records",
                "Blockchain Healthcare Data Security",
                "Smart Contracts for Real Estate"
            ],
        },
    },
    {
        title: "AR/VR",
        content: {
            icon: <MixedReality />,
            heading: "AR/VR",
            description: "We integrate AR/VR technologies to create interactive, engaging user experiences that transform how businesses operate in sectors like retail, education, and real estate, enhancing customer interaction and business workflows.",
            listItems: [
                "Immersive Retail Experiences",
                "AR/VR Training & Education",
                "Virtual Real Estate Tours",
                "Interactive Product Visualization "
            ],
        },
    },
];

export const DigitalCtaContent = {
    content: (<><span>Go Beyond </span>Digital</>),
}

export const ProcessContent = {
    subtitle: "P.R.O.C.E.S.S.",
    title: "Planning. Research. Outline. Creation. Evaluation. Scalability. Support.",
    content: "Our P.R.O.C.E.S.S. framework guarantees that every stage of development is handled with precision and purpose. We build apps that deliver immediate results and adapt effortlessly as your business scales. ",
}

export const ProcessList = [
    {
        title: "Discovery and Analysis",
        txt: "The process starts with detailed requirement gathering using tools like Jira and Confluence to map user stories, functional specifications, and system requirements. This step aligns project goals with the development strategy.",
        icon: <Process01 />,

    },
    {
        title: "Feasibility and System Architecture",
        txt: "A thorough technical feasibility study is conducted using AWS or Azure, with system architecture crafted via Lucidchart and Enterprise Architect, focusing on scalability, security, and performance optimization.",
        icon: <Process02 />,

    },
    {
        title: "UI/UX Design",
        txt: "With Figma and Adobe XD, wireframes and interactive prototypes are created, ensuring a seamless user experience. Tools like Hotjar are utilized for heatmapping to fine-tune user flows for maximum engagement.",
        icon: <Process03 />,

    },
    {
        title: "Product Roadmap",
        txt: "Before development, we map out a detailed product roadmap, including prioritized feature lists and timelines. This step ensures that key functionalities are aligned with business goals, keeping the development process focused and efficient.",
        icon: <Process04 />,

    },
    {
        title: "Agile Development",
        txt: "Agile development follows with sprint planning using Jira, GitLab, and Docker. Continuous integration (CI) and deployment (CD) are integrated, and version control is handled through GitHub or Bitbucket to maintain seamless collaboration.",
        icon: <Process05 />,

    },
    {
        title: "Testing and Quality Assurance",
        txt: "Automated testing is implemented through tools like Selenium, Cypress, and JUnit, alongside manual testing. Continuous testing is integrated into the CI/CD pipeline using Jenkins, maintaining the highest quality standards throughout.",
        icon: <Process06 />,

    },
    {
        title: "Deployment and Cloud Infrastructure",
        txt: "Docker and Kubernetes are used for containerization and deployment, with cloud hosting managed through AWS, Google Cloud, or Azure. This ensures high availability, autoscaling, and optimized load balancing.",
        icon: <Process07 />,

    },
    {
        title: "Maintenance and Optimization",
        txt: "Post-deployment, monitoring is conducted using tools like New Relic, Datadog, and Grafana. Continuous maintenance and optimization are provided, keeping the application updated and performing efficiently.",
        icon: <Process08 />,

    },
];

export const TestimonialContent = {
    subtitle: "For Some, It’s Testimonials.",
    title: "For Us, It’s Client Love.",
    content: "Our clients don’t just speak about projects — they share their stories of growth, success, and partnership. We build solutions that leave a lasting impression, and the results speak for themselves. Here’s why our clients keep choosing us.",
}

export const TestimonialSLIDES = [
    {
        logo: <ClutchLogo />,
        text: "The team’s deep understanding of our business’s nature was truly impressive. Their technical knowledge was evident in ensuring the app functioned smoothly, and their attention to every detail exceeded our expectations. BitsWits delivered a seamless and reliable app experience.",
        name: "Joseph D’Amora",
    },
    {
        logo: <ClutchLogo />,
        text: "BitsWits transformed my vision into a stunning, user-friendly app with an intuitive design that perfectly meets our needs. Their professionalism, dedication, and ability to turn ideas into reality were outstanding. I couldn’t be happier with the results and their ongoing support.",
        name: "Ryan Jaden",
    },
    {
        logo: <TrustpilotLogo />,
        text: "A heartfelt thank you to BitsWits for their outstanding support and dedication. Their responsiveness was truly remarkable, and they delivered exactly what we had envisioned. Without a doubt, we will engage BitsWits again for our upcoming project. They exceeded all our expectations.",
        name: "Maya Powell",
    },
    {
        logo: <GoogleLogo />,
        text: "I approached BitsWits for a custom software solution for my business, and I couldn’t be happier with the result. Their team was professional, timely, and provided exceptional support throughout the entire process. The final product exceeded my expectations. Highly recommend BitsWits!",
        name: "Raoul Deslys",
    },
    {
        logo: <GoogleLogo />,
        text: "The mobile app has drastically increased my sales, and I feel directly connected to my clients through it. BitsWits and their team did an outstanding job. The app is user-friendly, offers brilliant performance, and has made a huge impact on my business. I highly recommend BitsWits!",
        name: "Abigail Smith",
    },
]

export const SolutionsContent = {
    subtitle: "Solutions For Success",
    title: "Empowering Businesses With Smart Solutions for Lasting Success.",
    content: "Our custom-made and ready-to-deploy solutions help businesses overcome challenges, streamline operations, and drive sustained growth. From ERP to mobile apps, we’ve built solutions that deliver results — fast.",
}

export const SolutionsList = [
    {
        title: (<>Enterprise<br />Applications</>)
    },
    {
        title: (<>Enterprise<br />Resource Planning</>)
    },
    {
        title: (<>Financial<br />Management</>)
    },
    {
        title: (<>Supply Chain<br />Management</>)
    },
    {
        title: (<>Asset<br />Management</>)
    },
    {
        title: (<>Fleet<br />Management</>)
    },
    {
        title: (<>HR<br />Software</>)
    },
    {
        title: (<>eLearning<br />Software</>)
    },
    {
        title: (<>eCommerce<br />Management</>)
    },
    {
        title: (<>Mobile<br />Apps</>)
    },
    {
        title: (<>Content <br />Management</>)
    },
    {
        title: (<>Web<br />Portals</>)
    },
]

export const EngagementContent = {
    subtitle: "Engagement Models",
    title: "Choose the Perfect Fit for Your Business.",
    content: "Select from our range of engagement models to find the perfect fit for your app development needs, facilitating a partnership that meets your objectives.",
}

export const EngagementDetailList = [
    "Flexibility",
    "Control Over Team",
    "Team Availability",
    "Client Involvement",
    "Best for",
]

export const EngagementList = [
    {
        logo: < DedicatedTeamModel />,
        title: "Dedicated Team",
        detail: [
            "High",
            "Full control",
            "Full-time",
            "High",
            "Long-term Projects",
        ]
    },
    {
        logo: <FixedPriceModel />,
        title: "Fixed Price",
        detail: [
            "Low",
            "Limited control",
            "As Needed",
            "Low",
            "Defined Projects",
        ]
    },
    {
        logo: < HourlyPriceModel />,
        title: "Hourly Price",
        detail: [
            "Medium",
            "Moderate control",
            "On-demand",
            "Medium",
            "Small Tasks",
        ]
    },
    {
        logo: < OnsiteTeamModel />,
        title: "Onsite Team",
        detail: [
            "High",
            "Full control",
            "Full-time Onsite",
            "High",
            "Close Collaboration",
        ]
    }
]

export const IndustriesContent = {
    subtitle: "Industries",
    title: "Setting the Benchmark Across Industries",
    content: "Our solutions drive innovation, optimize performance, and scale effortlessly, setting the benchmark for success in every industry we touch.",
}

export const IndustriesSLIDES = [
    {
        title: "Healthcare",
        icon: <Healthcare />,
        txt: "We specialize in EHR integration, telemedicine platforms, and HIPAA-compliant solutions, enhancing patient care, optimizing workflows, and improving data management for healthcare providers across the sector.",
        url: "/healthcare-app-development-services",
    },
    {
        title: "FinTech",
        icon: <FinTech />,
        txt: "We develop secure, scalable FinTech platforms for financial institutions, covering payment processing, digital wallets and regulatory compliance. Our solutions streamline transactions, enhance services, and ensure robust data security.",
        url: "/fintech-app-development",
    },
    {
        title: "Education",
        icon: <Education />,
        txt: "Our expertise lies in building scalable e-learning platforms with LMS integration, adaptive learning tools, and real-time analytics, designed to boost student engagement and improve learning outcomes across institutions.",
        url: "/education-app-development",
    },
    {
        title: "Real Estate",
        icon: <RealEstate />,
        txt: "Delivering powerful tools like CRM integration, property management systems, and IDX-powered solutions, we streamline real estate transactions, elevate client interactions, and increase property visibility.",
        url: "/real-estate-app-development-company",
    },
    {
        title: "Automotive",
        icon: <Automotive />,
        txt: "With in-depth knowledge of telematics, vehicle connectivity, and fleet management systems, we provide solutions that enhance automotive performance, streamline logistics, and accelerate advancements in the mobility sector.",
        url: "/automotive-software-development",
    },
    {
        title: "Music",
        icon: <Music />,
        txt: "We build robust music platforms featuring advanced streaming capabilities, copyright management, and real-time analytics, empowering artists and businesses to engage listeners and drive revenue effectively.",
        url: "/music-app-development-company",
    },
    {
        title: "Social Media",
        icon: <SocialMedia />,
        txt: "Developing scalable social media platforms with strong user engagement features, real-time content moderation, and interactive tools, we enhance community growth and optimize user retention for our clients.",
        url: "/social-media-app-development-company",
    },
    {
        title: "Logistics",
        icon: <Logistics />,
        txt: "We specialize in logistics solutions, optimizing supply chain, fleet tracking, warehouse automation, and real-time data integration. Our platforms streamline operations, reduce costs, and enhance efficiency across logistics networks for businesses.",
        url: "/logistics-software-development",
    },
    {
        title: "eCommerce",
        icon: <ECommerce />,
        txt: "With a focus on scalability, omnichannel integration, and personalized shopping experiences, we deliver e-commerce platforms that enhance customer journeys, boost conversions, and streamline backend operations for online retailers.",
        url: "/ecommerce-app-development",
    }
]

export const FaqsContent = {
    subtitle: "Got Inquiries?",
    title: "Read Our Frequently Asked Questions",
    content: "Our FAQ section offers clear answers to common concerns, helping you navigate our services with ease.",
}

export const FaqsList = [
    {
        title: "What is the typical app development timeline?",
        txt: (<p>Our app development timelines vary depending on complexity. Small apps typically take 4-6 weeks, while larger, more complex apps can take 3 to 6 months. We provide detailed timelines during the initial consultation based on your unique app requirements.</p>)
    },
    {
        title: "How do you handle confidentiality and NDAs?",
        txt: (<p>We take confidentiality seriously and offer NDAs to protect your sensitive information. All our team members are required to sign NDAs, ensuring that your project details remain secure throughout the development process.</p>)
    },
    {
        title: "What is the cost of your app development services?",
        txt: (<p>The cost depends on the scope and complexity of your app. We offer various engagement models, including fixed-price, hourly, and dedicated team options. Detailed cost estimates are provided after we assess your app requirements during the consultation phase.</p>)
    },
    {
        title: "Why work with BitsWits?",
        txt: (<p>Our company stands out due to our decade-long expertise, commitment to quality, and personalized approach. We deliver innovative solutions tailored to your business needs and ensure timely project delivery with a focus on achieving your goals.</p>)
    },
    {
        title: "Do you offer post-launch support?",
        txt: (<p>Yes, we provide comprehensive post-launch support to address any issues or updates needed after your project goes live. Our support services include bug fixes, performance monitoring, and ongoing maintenance to ensure smooth operation.</p>)
    },
    {
        title: "Can I customize my project requirements?",
        txt: (<p>Absolutely. We offer flexible solutions and work closely with you to tailor the project according to your specific requirements. Our goal is to create a product that meets your exact needs and aligns with your business objectives.</p>)
    },
    {
        title: "How do you manage project changes?",
        txt: (<p>We handle project changes through a structured change management process. Any requested modifications are assessed for impact on the project scope, timeline, and cost. We then provide updated estimates and timelines before implementing the changes.</p>)
    },
]

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br /> Mobile App Together!</>)
}







