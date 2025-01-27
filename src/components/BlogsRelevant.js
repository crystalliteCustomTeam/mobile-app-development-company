import React from 'react';
import Link from 'next/link';
import styles from '@/styles/blogNew/Blognavigations.module.css';
//
import { getPostList } from "@/lib/posts";


const BlogsRelevant = async () => {

    const posts = await getPostList();

    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.articles}>
                    <h3 className='fontsfregular'>Relevant Articles</h3>
                    {
                        posts.nodes.map((post) => (
                            <ul className={`${styles.noList} mt-4`}>
                                <li>
                                    {
                                        post.categories.nodes.map((category) => (
                                            <p className='fontsfregular' key={category.slug}>
                                                {category.name}
                                            </p>
                                        ))
                                    }
                                    <Link href={`/blog/${post.slug}`}>
                                        <h6 className='fontsfregular'>{post.title}</h6>
                                    </Link>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BlogsRelevant