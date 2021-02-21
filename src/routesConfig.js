import Home from "./components/pages/Home";
import Author from "./components/pages/Author";
import Book from "./components/pages/Book";
import Page from "./components/pages/Page";
import PressSingle from "./components/pages/PressSingle";
import Books from "./components/pages/Books";
import News from "./components/pages/News";
import NotFound from "./components/pages/NotFound";

import siteData from "src/data";

export default [
  {
    path: "/",
    title: "Home",
    component: Home,
    exact: true,
    show: false,
    colors: siteData.homePage.hero.heroColours,
  },
  {
    path: "/books",
    title: siteData.generalSettings.booksLinkText,
    component: Books,
    exact: true,
    show: true,
  },
  {
    path: "/news",
    title: "News",
    component: News,
    exact: true,
    show: true,
  },
  ...siteData.aboutPage.map((o) => ({
    path: "/" + o.slug,
    title: o.title,
    component: Page,
    exact: true,
    show: o.nav,
    data: {
      pageSlug: o.slug,
    },
  })),
  ...siteData.book.map((o) => ({
    path: "/book/" + o.slug,
    component: Book,
    colors: o.colors,
    data: {
      bookSlug: o.slug,
    },
  })),
  ...siteData.press.map((o) => ({
    path: "/press/" + o.slug,
    component: PressSingle,
    colors: o.colors,
    data: {
      pressSlug: o.slug,
    },
  })),
  ...siteData.author.map((o) => ({
    path: "/author/" + o.slug,
    component: Author,
    data: {
      authorSlug: o.slug,
    },
  })),
  {
    component: NotFound,
  },
];
