import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/BlogContent.module.css"
//
import { getPostList } from "@/lib/articalsPosts";
import FeaturedImage from "@/src/components/FeaturedImage";
// Images
import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/newblogs/blog-verify.png"
import profile from "media/newblogs/blog-client.png"


const BlogArticle = async () => {

    const posts = await getPostList();

    return (
        <>
            <section className={styles.blogcontent}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className={styles.heading}>Read Next</h2>
                        </Col>
                        <Col lg={12}>
                            <div className='mt-md-4'>
                                <Row className='gy-3'>
                                    {
                                        posts.nodes.map((post) => (
                                            <Col md={6} lg={4} className='p-2 order-3 order-lg-1'>
                                                <div className={styles.card}>
                                                    <FeaturedImage post={post} className="w-100" />
                                                    <div className={styles.cardContent}>
                                                        {
                                                            post.categories.nodes.map((category) => (
                                                                <p className={`fontsfregular ${styles.categoriesPara}`} key={category.slug}>
                                                                    {category.name}
                                                                </p>
                                                            ))
                                                        }
                                                        <Link href={`/blog/${post.slug}`}>
                                                            <h5 className='fontsfregular text-black'>{post.title}</h5>
                                                        </Link>
                                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                        </div>
                                                        <div className={styles.btn}>
                                                            <Link href={`/blog/${post.slug}`} className='text-black'>
                                                                Read More
                                                                <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cardBottom}>
                                                        <div className={styles.cardBottomImg}>
                                                            <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardbottomContent}>
                                                            <div className='d-flex align-items-center gap-2 pb-1'>
                                                                <h3 className='fontsfregular text-black'> {post.author.node.name}
                                                                </h3>
                                                                <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                            </div>
                                                            <p className='fontsfregular text-black'>{post.author.node.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogArticle
