import {
  BannerData, CompanyInfoContent, ExpertiseContent, ExpertiseList,
  TestimonialContent, TestimonialSLIDES,  FaqsContent,
  FaqsList, IdeaCtaContent, DigitalCtaContent
} from "@/src/app/website-development-services/data/data";
import dynamic from "next/dynamic";
import Advantage from "./advantage";
import Process from "./process";
import Cta from "./cta";

const Expertise = dynamic(() => import("@/src/app/website-development-services/expertise"));
const Banner = dynamic(() => import("@/src/app/website-development-services/banner"));
const CompanyInfo =   dynamic(() => import("@/src/app/website-development-services/companyinfo"));
const Portfolio =   dynamic(() => import("@/src/app/website-development-services/portfolio"));
const DigitalCta = dynamic(() => import("@/src/app/website-development-services/digitalcta"));
const Testimonial = dynamic(() => import("@/src/app/website-development-services/testimonial"));
const Faqs = dynamic(() => import("@/src/app/website-development-services/faqs"));
const IdeaCta = dynamic(() => import("@/src/app/website-development-services/ideacta"));


const OPTIONS = { loop: true, align: 'center' }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <CompanyInfo data={CompanyInfoContent} />
      <Expertise data={ExpertiseContent} list={ExpertiseList} />
      <Portfolio />
      <DigitalCta data={DigitalCtaContent} />
      <Advantage />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} /> 
       <Process />
      <Cta />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />

    </>
  );
}

