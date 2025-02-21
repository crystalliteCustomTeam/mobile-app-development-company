import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { NavIcon } from "@/src/app/app-constants"
import { useState } from "react"
import PopUp from "@/src/app/services/popup"

const Navigation = ({ isDarkHeader, isLightHeader, scrolled }) => {
  const [isActive, setIsActive] = useState(false)
  const [modalShow, setModalShow] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
    if (!isActive) {
      document.body.classList.add("active")
    } else {
      document.body.classList.remove("active")
    }
  }

  const handlePopUp = () => {
    setModalShow(true)
  }
  const HeaderLight = isLightHeader ? `${styles.blackNav}` : ""
  const HeaderDark = isDarkHeader ? `${styles.whiteNav}` : ""
  const HeaderScroll = scrolled ? `${styles.NavScroll}` : ""

  return (
    <>
      <div
        onClick={handleClick}
        className={`${isActive ? "navIcon active" : "navIcon"}`}
      >
        <NavIcon />
      </div>
      <ul
        className={`${styles.mainNavigation} ${HeaderLight}  ${HeaderDark} ${HeaderScroll}`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
        <li className={styles.btnHeader} onClick={() => handlePopUp()}>
          <Link href="">Connect Now</Link>
        </li>
      </ul>
      <div
        className={`${styles.mainMobileNavigation}  ${
          isActive ? `${styles.active}` : ""
        }`}
      >
        <ul className={styles.mobileNavigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={handleClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={() => handlePopUp()}>
              Connect Now
            </Link>
          </li>
        </ul>
      </div>
      <PopUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default Navigation
