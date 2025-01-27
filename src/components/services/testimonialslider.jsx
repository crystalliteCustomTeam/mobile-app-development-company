"use client"
import styles from "@/styles/components/services/testimonialslider.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { ArrowIcon, StarIcon, TestQuateIcon } from "@/src/app/app-constants"
import Image from "next/image"
import Autoplay from 'embla-carousel-autoplay'

const TestimonialSlider = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [Fade(), Autoplay()])

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            <div className={styles.TestimonialItem}>
                                <div className={styles.starClass}>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <div className={styles.testContent}>
                                    {item.txt}
                                </div>
                                <div className={styles.testProfile}>
                                    <div className={styles.ImgBox}>
                                        <Image src={item.img} alt="Bitswits Reviews" width={80} height={80} />
                                    </div>
                                    <div className={styles.ImgTitle}>
                                        {item.name}
                                        <span>{item.position}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* <div className={styles.svgIcon}>
                    <TestQuateIcon />
                </div> */}

            </div>
            <div className="embla_container">
                <div className="embla_prev" onClick={prevButtonHandler}>
                    <ArrowIcon direction="prev" />
                </div>
                <div className="embla_next" onClick={nextButtonHandler}>
                    <ArrowIcon direction="next" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider