import favicon from "../../images/favicon/favicon.ico"
import Helmet from "react-helmet"
import React, { FC } from "react"
import useImage from "../../hooks/useImage"
import useSiteMetaData from "../../hooks/useSiteMetaData"
import { useLocation } from "@reach/router"

export interface SEOProps {
  description?: string
  image?: string
  title: string
}

const SEO: FC<SEOProps> = ({ description, image, title }) => {
  const { pathname } = useLocation()
  const {
    title: defaultTitle,
    description: defaultDescription,
    lang,
    keywords,
    twitterUserName,
    siteUrl,
  } = useSiteMetaData()

  const logoImage = useImage("PLEASE.png")

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image || logoImage.src}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={title}
    >
      <link rel="icon" href={favicon} />
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUserName && (
        <meta name="twitter:creator" content={twitterUserName} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={(keywords || []).join(`, `)} />
      <link
        href="//db.onlinewebfonts.com/c/736cf5b08b01082a3645e14038868e20?family=Krungthep"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  )
}

export default SEO
