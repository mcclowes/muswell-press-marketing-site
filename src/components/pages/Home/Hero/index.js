import ImageHero from "./ImageHero";
import BookHero from "./BookHero";

import siteData from "src/data";

export default () =>
  R.path(["homePage", "hero", "heroImage", "url"], siteData) ? (
    <ImageHero />
  ) : (
    <BookHero />
  );
