import Testimonial from "../home/testimonial";
import Clients from "../portfolio/components/clients";
import AbtCta from "./components/abtcta";
import Awards from "./components/awards";
import Banner from "./components/banner";
import KeyPoints from "./components/keypoints";
import Story from "./components/story";
// import Team from "./components/team";

import {
    TestimonialContent, TestimonialSLIDES
} from "@/src/app/home/data/data";


export default function Page() {

    return (
        <>
            <Banner />
            <KeyPoints />
            <Awards />
            <Story />
            <AbtCta />
            {/* <Team /> */}
            <Clients />
            <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
        </>
    );
}

