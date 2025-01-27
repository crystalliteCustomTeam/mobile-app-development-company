"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/blogNew/BlogContent.module.css"
//===== Components
// import { getPostList } from "@/lib/posts"
// import FeaturedImage from "@/src/components/FeaturedImage"
//===== Images
// import Arrow from "media/newblogs/blogArrow.png"
// import verifies from "media/newblogs/blog-verify.png"
// import profile from "media/newblogs/blog-client.png"

const BlogList = () => {
  const [posts, setPosts] = useState({ nodes: [], pageInfo: {} })
  const [buttonText, setButtonText] = useState("Load More")
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const predefinedCategories = [
    "Mobile App Development",
    "Flutter App Development",
    "React Native App Development",
    "Cost",
    "iOS App Development",
    "Android App Development",
    "Blockchain Development",
  ]

  const categoryKeywords = {
    "Mobile App Development": ["mobile app", "mobile"],
    "Flutter App Development": ["flutter app", "flutter"],
    "React Native App Development": ["react native", "react", "native"],
    Cost: ["cost", "pricing", "price"],
    "iOS App Development": ["ios app", "ios"],
    "Android App Development": ["android app", "android"],
    "Blockchain Development": ["blockchain app", "blockchain"],
  }

  const fetchPosts = async (endCursor = null) => {
    try {
      setLoading(true)
      const newPosts = await getPostList(endCursor)
      return newPosts
    } catch (error) {
      console.error("Error fetching posts:", error)
      return { nodes: [], pageInfo: {} }
    } finally {
      setLoading(false)
    }
  }

  // useEffect(() => {
  //   ;(async () => {
  //     const initialPosts = await fetchPosts()
  //     setPosts(initialPosts)
  //   })()
  // }, [])

  const handleLoadMore = async () => {
    setButtonText("Loading...")
    setButtonDisabled(true)

    const morePosts = await fetchPosts(posts.pageInfo?.endCursor)

    setPosts((prevPosts) => ({
      pageInfo: morePosts.pageInfo,
      nodes: [...prevPosts.nodes, ...morePosts.nodes],
    }))

    if (morePosts.pageInfo?.hasNextPage) {
      setButtonText("Load More")
      setButtonDisabled(false)
    } else {
      setButtonText("No more posts to load")
      setButtonDisabled(true)
    }
  }

  const filterPosts = (category) => {
    if (category === "All") return posts.nodes

    const normalizedCategory = category.toLowerCase()

    return posts.nodes.filter((post) =>
      post.categories.nodes.some((cat) => {
        const normalizedCategoryName = cat.name.toLowerCase()
        return categoryKeywords[category].some((keyword) =>
          normalizedCategoryName.includes(keyword)
        )
      })
    )
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <section className={styles.blogcontent}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.form}>
              <form>
                <select
                  className={styles.search}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="All">All</option>
                  {predefinedCategories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="fontsfregular"
                    >
                      {category}
                    </option>
                  ))}
                </select>
                <input type="text" />
                <button type="button" className="fontsfregular">
                  Search
                </button>
              </form>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className={styles.tabs}>
              <ul className="pt-5">
                <li
                  className={`${
                    selectedCategory === "All"
                      ? styles.active
                      : styles.nonActive
                  } fontsfregular`}
                  onClick={() => setSelectedCategory("All")}
                >
                  All
                </li>
                {predefinedCategories.map((cat) => (
                  <li
                    key={cat}
                    className={`${
                      selectedCategory === cat
                        ? styles.active
                        : styles.nonActive
                    } fontsfregular`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={12} className="mt-md-4">
            <Row className="gy-3">
              {loading && (
                <Col lg={12} className="text-center">
                  <div className={styles.loader}>
                    <div className={styles.loaderRoller}>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className={styles.loaderTxt}>Loading...</div>
                  </div>
                </Col>
              )}
              {filterPosts(selectedCategory).length === 0 ? (
                <p className={`${styles.blogDesciption} text-center`}>
                  No data found
                </p>
              ) : (
                filterPosts(selectedCategory).map((post, i) => (
                  <Col key={i} md={6} lg={4} className="p-2 order-3 order-lg-1">
                    <div className={styles.card}>
                      <FeaturedImage post={post} className="w-100" />
                      <div className={styles.cardContent}>
                        {post.categories.nodes.map((category) => (
                          <p
                            key={category.slug}
                            className={`fontsfregular ${styles.categoriesPara}`}
                          >
                            {category.name}
                          </p>
                        ))}
                        <Link href={`/blog/${post.slug}`}>
                          <h5 className="fontsfregular text-black">
                            {post.title}
                          </h5>
                        </Link>
                        <div
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          className={styles.blogDesciption}
                        ></div>
                        <div className={styles.btn}>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-black"
                          >
                            Read More
                            <Image
                              src={Arrow}
                              alt="Bitswits"
                              className="ms-2"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className={styles.cardBottom}>
                        <div className={styles.cardBottomImg}>
                          <Image
                            src={profile}
                            width={50}
                            height={50}
                            alt="Bitswits"
                            className="img-fluid"
                          />
                        </div>
                        <div className={styles.cardbottomContent}>
                          <div className="d-flex align-items-center gap-2 pb-1">
                            <h3 className="fontsfregular text-black">
                              {post.author.node.name}
                            </h3>
                            <Image
                              src={verifies}
                              alt="bitswits"
                              width={13}
                              height={13}
                            />
                          </div>
                          <p className="fontsfregular text-black">
                            {post.author.node.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>

        {/* <Row>
          <Col lg={12}>
            <button
              className={styles.loadMore}
              onClick={handleLoadMore}
              disabled={buttonDisabled}
            >
              {buttonText}
            </button>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}

export default BlogList
