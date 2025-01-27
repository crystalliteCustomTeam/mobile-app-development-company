import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/ServicesBanner.module.css";


const ServiceBanner = (props) => {
  return (
    <>
      <section className={`${styles.newHomeBg} ${styles[props.assignClass]} pt-140`}>
        <Container>
          <Row>
            <Col xl={12}>
              <h3
                className={`${styles.just} font28 font-medium text-center mb-0 line35`}
              >
                {props.subtitle}
              </h3>
              <h1
                className={`${styles.develop} text-center font55home font-bold mb-2`}
              >
                {props.title}
              </h1>
              <p className={`font16 white center mb-3 ${styles.bannerText}`}>
                {props.text}
              </p>
              <div className={styles.pont}>
                <a className={styles.book} href="tel:3022173745">
                  BOOK A CALL
                </a>

                <a className={styles.about} href='javascript:window.replaceChat();'>
                  LET'S CONNECT
                </a>
              </div>
              <div className={`${styles.banImg}`}>
                {props.BannerImage ? (
                  <Image
                    quality={75}
                    alt="BitsWits"
                    src={props.BannerImage}
                    className={`img-fluid`}
                  />
                ) : null}

                {props.video ? props.video : null}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceBanner;
