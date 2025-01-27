import {
    BannerData, 
    OverviewData, 
    FeaturesData,
    FeaturesBullets,
    ProblemData, 
    ProblemBullets,
    CaseStudyctaData,
    SolutionData,
    SolutionBullets,
    ScrollingSectionData,
    TechStackData,
    TechStackList,
    ResultData,
    ResultBullets,
    CatLastData
  } from "@/src/app/case-studies/singles-up/data/data";
  
import Banner from "@/src/app/case-studies/components/banner"
import Problem from "@/src/app/case-studies/components/problem"
import Overview from "@/src/app/case-studies/components/overview"
import Features from "@/src/app/case-studies/components/features"
import Solution from "@/src/app/case-studies/components/solution"
import CaseStudycta from "@/src/app/case-studies/components/casestudycta"
import ScrollingSection from "@/src/app/case-studies/components/scrollingsection"
import TechStack from "@/src/app/case-studies/components/techstack"
import Results from "@/src/app/case-studies/components/results"
import CatLast from "@/src/app/case-studies/components/catlast"



const Page = () => { 
    return (
        <>
            <Banner data={BannerData} />
            <Overview data={OverviewData} />
            <Features data={FeaturesData} list={FeaturesBullets} />
            <Problem data={ProblemData} list={ProblemBullets} />
            <CaseStudycta data={CaseStudyctaData} />
            <Solution data={SolutionData} list={SolutionBullets} />
            <ScrollingSection data={ScrollingSectionData}/>
            <TechStack data={TechStackData} list={TechStackList} />
            <Results data={ResultData} list={ResultBullets} />
            <CatLast data={CatLastData} />
        </>
    )
}

export default Page