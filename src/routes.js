import React from "react";

const HomePage = React.lazy(() => import("./views/HomePage"));
const CaseStudySinglePage = React.lazy(() => import("./views/CaseStudySinglePage"));
const CaseStudyPage = React.lazy(() => import("./views/CaseStudyPage"));
const AboutFevoBrandsPage = React.lazy(() => import("./views/Brands/AboutFevoBrandsPage"));
const BrandsBlogPage = React.lazy(() => import("./views/Brands/BrandsBlogPage"));
const BrandsBlogSinglePage = React.lazy(() => import("./views/Brands/BrandsBlogSinglePage"));
const AboutFevoFansPage = React.lazy(() => import("./views/Fans/AboutFevoFansPage"));
const FansBlogPage = React.lazy(() => import("./views/Fans/FansBlogPage"));
const FansBlogSinglePage = React.lazy(() => import("./views/Fans/FansBlogSinglePage"));

const routes = [
  { path: "/", exact: true, name: "Home", component: HomePage },
  { path: "/home", exact: true, name: "Home", component: HomePage },
  
  { path: "/fans", exact: true, name: "Blog Brands - Fans", component: FansBlogPage },
  { path: "/fans/view/:id", exact: true, name: "Blog Single - Fan", component: FansBlogSinglePage },
  { path: "/fans/about-fevo", exact: true, name: "About Fevo - Fans", component: AboutFevoFansPage },

  { path: "/brands", exact: true, name: "Blog Brands", component: BrandsBlogPage },
  { path: "/brands/view/:id", exact: true, name: "Blog Single - Brand", component: BrandsBlogSinglePage },
  { path: "/brands/about-fevo", exact: true, name: "About Fevo - Brands", component: AboutFevoBrandsPage },
  
  { path: "/case-study", exact: true, name: "Case Study", component: CaseStudyPage },
  { path: "/case-study/:id", exact: true, name: "Case Study - Single", component: CaseStudySinglePage },
];

export default routes;