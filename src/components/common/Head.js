import * as vars from "src/utils/styles/vars";
import Helmet from "react-helmet";
import siteData from "src/data";

const Head = (props) => {
  if(!props) {
    return <Helmet>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href='https://www.muswell-press.co.uk/favicon' />
      <title>Muswell Press</title>

      <meta
        name="description"
        content="Muswell Press is a proudly independent publisher of great books, both fiction and non-fiction."
      />
    </Helmet>
  }

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href='https://www.muswell-press.co.uk/favicon' />

      <link
        rel="canonical"
        href={`https://www.muswell-press.co.uk/${
          props.slug ? props.slug : ""
        }`}
      />

      <title>
        {props.pageTitle
          ? `${props.pageTitle} | ${siteData.generalSettings.siteTitle}`
          : `${siteData.generalSettings.siteTitle} | ${siteData.generalSettings.siteDescription}`}
      </title>

      <meta
        name="description"
        content={
          props.pageDescription
            ? props.pageDescription
            : siteData.generalSettings.siteDescription
        }
      />

      <meta
        property="og:url"
        content={`https://www.muswell-press.co.uk/${
          props.slug ? props.slug : ""
        }`}
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content={
          props.pageTitle
            ? `${props.pageTitle} | ${siteData.generalSettings.siteTitle}`
            : `${siteData.generalSettings.siteTitle} | ${siteData.generalSettings.siteDescription}`
        }
      />

      <meta
        property="og:site_name"
        content={siteData.generalSettings.sitetitle}
      />

      <meta
        property="og:description"
        content={
          props.pageDescription
            ? props.pageDescription
            : siteData.generalSettings.siteDescription
        }
      />

      {/*Social */}
      {/*General image*/}
      <link
        rel="image_src"
        type="image/jpeg"
        href={
          props.pageImage
            ? props.pageImage.url
            : `https:${siteData.generalSettings.image.url}`
        }
      />

      {/*180x110 Image for Linkedin */}
      <meta
        property="og:image"
        content={
          props.pageImage
            ? props.pageImage.url
            : `https:${siteData.generalSettings.image.url}`
        }
      />
      <meta property="og:image:width" content="180" />
      <meta property="og:image:height" content="110" />

      {/*600x315 Image for Facebook */}
      <meta
        property="og:image"
        content={
          props.pageImage
            ? props.pageImage.url
            : `https:${siteData.generalSettings.image.url}`
        }
      />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />

      {/*Twitter Card */}
      {/*<meta name = "twitter:card" content = "summary">*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={vars.meta.twitterUsername} />
      <meta name="twitter:creator" content={vars.meta.twitterCreator} />

      {props.pageTitle
        ? `<meta name="twitter:title" content=${props.pageTitle} />`
        : `<meta name="twitter:title" content=${siteData.generalSettings.siteTitle} />`}

      <meta
        name="twitter:url"
        content={`https://www.muswell-press.co.uk/${
          props.slug ? props.slug : ""
        }`}
      />
      <meta
        name="twitter:description"
        content={
          props.pageDescription
            ? props.pageDescription
            : siteData.generalSettings.siteDescription
        }
      />
      <meta
        name="twitter:image:src"
        content={
          props.pageImage
            ? props.pageImage.url
            : `https:${siteData.generalSettings.image.url}`
        }
      />

      {/*Analytics */}
      {/*Search Console */}
      <meta name="google-site-verification" content={vars.meta.googleSearch} />

      {/*Google analytics*/}

      {/* Cookie Warning*/}
    </Helmet>
  )
};

export default Head;
