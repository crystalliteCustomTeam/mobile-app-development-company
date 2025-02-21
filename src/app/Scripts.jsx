"use client"
import { useEffect } from "react"
export const Scripts = () => {
  useEffect(() => {
    //======== GTM Code ========//
    const googleTagManager = document.createElement("script")
    googleTagManager.strategy = "lazyOnload"
    googleTagManager.id = "google-tag-manager-GTM"
    googleTagManager.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MNG58WB3')
    ;`
    document.head.appendChild(googleTagManager)
  }, [])
}
