import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap'
// ===== CSS
import styles from "@/styles/blogNew/InnerBanner.module.css"
// ===== Components
import { getSinglePost } from "@/lib/posts";
import BlogShare from "@/src/components/BlogShare";
import BlogFaqs from "@/src/components/BlogFaqs";
import BlogNavigation from "@/src/components/BlogNavigation";
import BlogsRelevant from "@/src/components/BlogsRelevant";
import BlogArticle from '@/src/components/BlogArticle'
// ===== Images
import Client from "media/newblogs/innerclient.png"
import verified from "media/newblogs/blog-verify.png"
import experience from "media/newblogs/experience.png"


export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const postData = await getSinglePost(params.postslug);
    return {
        title: postData.seo.title,
        description: postData.seo.metaDesc,
        //===== OG Tags =====
        openGraph: {
            title: postData.seo.opengraphTitle,
            description: postData.seo.metaDesc,
            url: postData.seo.opengraphUrl,
            siteName: postData.seo.opengraphSiteName,
            locale: 'en_US',
            type: postData.seo.opengraphType,
            images: "/public/images/icons/footerlogo.png",
        },
        //===== Canonical =====
        alternates: { canonical: postData.seo.canonical },
    }
}

export default async function Post({ params, searchParams }) {
    // =============== Post Data ===============
    let featuredImageUrl = "https://inhouse.pulse-force.com/wordpress/bitswits/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";

    const postData = await getSinglePost(params.postslug);
    //=============== Render ===============
    return (
        <>
            {postData && (
                <>
                    <Head>
                        <title key="title">{postData.title}</title>
                        <meta name="description" content={postData.metaDesc} key="metadesc" />
                        <meta property="og:title" content={postData.opengraphTitle} />
                        <meta key="og-description" property="og:description" content={postData.metaDesc} />
                        <meta property="og:url" content={postData.opengraphUrl} />
                        <meta property="og:type" content={postData.opengraphType} />
                        <meta property="og:locale" content="en_IN" />
                        <meta property="og:site_name" content={postData.opengraphSiteName} />
                    </Head>
                    {postData.blogDescription.schema && (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: postData.blogDescription.schema }}></div>
                        </>
                    )}
                    <section className={styles.innerBannerSec}>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <div className={styles.blogTopDes}>
                                        <h4>{postData.categories.nodes[0].name}</h4>
                                        <h1 className='fontsfregular'>{postData.title}</h1>
                                        {postData.blogDescription.topDescription && (
                                            <>
                                                <div dangerouslySetInnerHTML={{ __html: postData.blogDescription.topDescription }}></div>
                                            </>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    {postData.featuredImage ?
                                        (
                                            <Image quality={75} src={`https://inhouse.pulse-force.com/wordpress/bitswits/wp-content/uploads/${postData.featuredImage.node.mediaDetails.file}`} alt="BitsWits" width={736} height={450} className="img-fluid" />
                                        )
                                        :
                                        (
                                            <Image quality={75} src={featuredImageUrl} alt="BitsWits" width={736} height={450} className="img-fluid" />
                                        )
                                    }
                                </Col>
                                <Col lg={12}>
                                    <Row className={styles.blogdesc}>
                                        <Col lg={2} className={styles.clientImage}>
                                            <Image src={Client} alt='Bitswits' className='img-fluid' />
                                        </Col>
                                        <Col lg={10} className={styles.content}>
                                            <ul className='p-0'>
                                                <li className={styles.name}>
                                                    <p className='fontsfregular mb-0'>By <span>{postData.author.node.name}</span></p>
                                                </li>
                                                <li className={`${styles.verified} d-flex align-items-center`}>
                                                    <p className='fontsfregular mb-0'> Verified Expert In Development
                                                        <Image src={verified} alt='Bitswits' width={16} height={16} className='ms-3' />
                                                    </p>
                                                </li>
                                                <li className={`${styles.experience} d-flex align-items-center`}>
                                                    <Image src={experience} alt='Bitswits' width={16} height={16} className='me-3' />
                                                    <p className='fontsfregular mb-0'> 3 Years Of Experience</p>
                                                </li>
                                            </ul>

                                            <div className={styles.desc}>
                                                <p className='fontsfregular'>{postData.author.node.description}</p>
                                            </div>

                                            <div className={styles.expertise}>
                                                <span className={`${styles.expertisePara} fontsfregular`}>EXPERTISE</span>
                                                {postData.author.node.userexperties.experties.map((experties, index) => (
                                                    <span key={index} className={`fontsfregular text-black ${styles.btn}`}>
                                                        {experties}
                                                    </span>
                                                ))}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className={styles.articleSec} id="leftcontent">
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <BlogShare />
                                    <div dangerouslySetInnerHTML={{ __html: postData.content }} className={styles.innerHtml}></div>
                                    <BlogFaqs faqData={postData.blogDescription.faq} />
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.sidebar}>
                                        <BlogNavigation postData={postData} />
                                        <BlogsRelevant postData={postData} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <BlogArticle />
                </>
            )}
        </>
    );
}