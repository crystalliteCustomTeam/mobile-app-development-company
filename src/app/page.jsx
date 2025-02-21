import {
  BannerData,
  CuttingedgeContent,
  CuttingedgeList,
  AppIdeaContent,
  caseStudiesList,
  caseStudiesContent,
  ProcessContent,
  WhyChooseContent,
  WhyChooseList1,
  WhyChooseList2,
  ProcessTabs,
  TechnologiesContent,
  TechnologiesIcons,
  TestimonialContent,
  TestimonialSLIDES,
  RisksContent,
  OffersContent,
  OffersTabs,
  FuelingContent,
  FuelingList,
  CtaEstimatedContent,
  TechStackTabs,
  TechStackContent,
  IndustriesContent,
  IndustriesList,
  IdeaCtaContent,
  FaqsContent,
  FaqsList,
} from "@/src/app/mobile-application-development-services/data/data"

import Achieved from "@/src/app/services/achieved"
import Banner from "@/src/app/services/banner"
import Cuttingedge from "@/src/app/services/cuttingedge"
import CaseStudySection from "@/src/app/services/casestudy"
import AppIdea from "@/src/app/services/appidea"
import Process from "@/src/app/services/process"
import Technologies from "@/src/app/services/technologies"
import Testimonial from "@/src/app/services/testimonial"
import WhyChoose from "@/src/app/services/whychoose"
import Risks from "@/src/app/services/risks"
import Offers from "@/src/app/services/offers"
import Fueling from "@/src/app/services/fueling"
import CtaEstimated from "@/src/app/services/cat"
import TechStack from "@/src/app/services/techstack"
import Industries from "@/src/app/services/industries"
import IdeaCta from "@/src/app/services/ideacta"
import Faqs from "@/src/app/services/faqs"
export default function Home() {
  return (
    <>
      <Banner data={BannerData} />
      <Achieved />
      <Cuttingedge data={CuttingedgeContent} list={CuttingedgeList} />
      <CaseStudySection
        data={caseStudiesContent}
        caseStudies={caseStudiesList}
      />
      <AppIdea data={AppIdeaContent} />
      <WhyChoose
        data={WhyChooseContent}
        list1={WhyChooseList1}
        list2={WhyChooseList2}
      />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Risks data={RisksContent} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Fueling data={FuelingContent} list={FuelingList} />
      <CtaEstimated data={CtaEstimatedContent} />
      <TechStack data={TechStackContent} tabs={TechStackTabs} />
      <Industries data={IndustriesContent} list={IndustriesList} />
      <IdeaCta data={IdeaCtaContent} />
      <Faqs data={FaqsContent} list={FaqsList} />
      {/* <Blogs data={BlogsContent} list={BlogsList} /> */}

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
                item: "https://mobileappdevelopmentcompany.us/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: "https://mobileappdevelopmentcompany.us/portfolio",
              },
            ],
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
            name: "Mobile App Development Company",
            alternateName: "Mobile App Development Company US",
            url: "https://mobileappdevelopmentcompany.us/",
            logo: "https://mobileappdevelopmentcompany.us/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_blue.8a4af0f6.png&w=640&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 302 217-3745",
              contactType: "customer service",
              contactOption: "TollFree",
              areaServed: "US",
              availableLanguage: "en",
            },
          }),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mobile App Development Company",
            image:
              "https://mobileappdevelopmentcompany.us/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_blue.8a4af0f6.png&w=640&q=75",
            "@id": "https://mobileappdevelopmentcompany.us",
            url: "https://mobileappdevelopmentcompany.us",
            telephone: "+1 302 217-3745",
            priceRange: "12000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4201 Main St Suite # 200-122",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77002",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 29.7343033,
              longitude: -95.38223939999999,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Mobile App Development Company",
            image:
              "https://mobileappdevelopmentcompany.us/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_blue.8a4af0f6.png&w=640&q=75",
            description:
              "We empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 12+ industries to drive business success and growth.",
            brand: {
              "@type": "Brand",
              name: "Mobile App Development",
            },
            offers: {
              "@type": "Offer",
              url: "",
              priceCurrency: "USD",
              price: "12000",
              priceValidUntil: "2025-02-21",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "5",
            },
          }),
        }}
      />
    </>
  )
}
