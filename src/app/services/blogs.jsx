import styles from "@/styles/services/blogs.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowIcon } from '@/src/app/app-constants'
import Image from "next/image"
import Link from "next/link"





const Blogs = ({data, list}) => {
    return (
        <section className={`${styles.blogsSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={8} md={12} className='m-auto'>
                        <h2 className='text-center'>{data?.title}</h2>
                    </Col>
                </Row>
                <Row>
                    {list.map((item, index) => (
                        <Col lg={4} md={6} className='m-auto' key={index}>
                            <div className={styles.blogBox}>
                                <div className={styles.imgBox}>
                                    <Image src={item.img} alt="Blogs Image" fill />
                                </div>
                                <div className={styles.contentBox}>
                                    <div className={styles.category}>{item.cat}</div>
                                    <h6><Link href={item.links} target="_blank">{item.title}</Link></h6>
                                    <p>{item.txt}</p>
                                    <div className={styles.btnBox}>
                                        <div className={styles.data}>{item.date}</div>
                                        <div className={styles.links}>
                                            <Link href={item.links} target="_blank">Read More <ArrowIcon /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section >
    )
}

export default Blogs