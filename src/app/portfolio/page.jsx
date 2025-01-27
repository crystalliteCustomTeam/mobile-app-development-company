import {
  BannerData,
  CompanyInfoContent,
  HomeServicesContent,
  HomeServicesList,
  CaseStudyContent,
  ExtendedServicesContent,
  ExtendedServicesList,
  ProcessContent,
  ProcessList,
  TestimonialContent,
  TestimonialSLIDES,
  SolutionsContent,
  SolutionsList,
  EngagementContent,
  EngagementDetailList,
  EngagementList,
  IndustriesContent,
  IndustriesSLIDES,
  FaqsContent,
  FaqsList,
  IdeaCtaContent,
  DigitalCtaContent,
} from "@/src/app/home/data/data"
import dynamic from "next/dynamic"

const Process = dynamic(() => import("@/src/app/home/process"))
const Banner = dynamic(() => import("@/src/app/home/banner"))
const CaseStudy = dynamic(() => import("@/src/app/home/casestudy"))
const CompanyInfo = dynamic(() => import("@/src/app/home/companyinfo"))
const DigitalCta = dynamic(() => import("@/src/app/home/digitalcta"))
const ExtendedServices = dynamic(() =>
  import("@/src/app/home/extendedservices")
)
const HomeServices = dynamic(() => import("@/src/app/home/homeservices"))
const Testimonial = dynamic(() => import("@/src/app/home/testimonial"))
const Solutions = dynamic(() => import("@/src/app/home/solutions"))
const Engagement = dynamic(() => import("@/src/app/home/engagement"))
const Faqs = dynamic(() => import("@/src/app/home/faqs"))
const IdeaCta = dynamic(() => import("@/src/app/services/ideacta"))
const Industries = dynamic(() => import("@/src/app/home/industries"))

const OPTIONS = { loop: true, align: "center" }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <CompanyInfo data={CompanyInfoContent} />
      <HomeServices data={HomeServicesContent} list={HomeServicesList} />
      <CaseStudy data={CaseStudyContent} />
      <ExtendedServices
        data={ExtendedServicesContent}
        list={ExtendedServicesList}
      />
      <DigitalCta data={DigitalCtaContent} />
      <Process data={ProcessContent} list={ProcessList} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Solutions data={SolutionsContent} list={SolutionsList} />
      <Engagement
        data={EngagementContent}
        listDetail={EngagementDetailList}
        list={EngagementList}
      />
      <Industries
        data={IndustriesContent}
        slides={IndustriesSLIDES}
        options={OPTIONS}
      />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.bitswits.co/",
              },
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Expert Mobile App Development Company | BitsWits",
            url: "https://www.bitswits.co/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.bitswits.co/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Expert Mobile App Development Company | BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/",
            logo: "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 833 500-6007",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits",
            ],
          }),
        }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Expert Mobile App Development Company | BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            url: "https://www.bitswits.co/",
            description:
              "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
            brand: {
              "@type": "Brand",
              name: "BitsWits",
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
              },
              author: {
                "@type": "Organization",
                name: "Clutch",
                url: "https://clutch.co/profile/bitswits",
              },
            },
          }),
        }}
      />
    </>
  )
}
