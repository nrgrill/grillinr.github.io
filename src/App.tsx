import { lazy, useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteShell } from "@/components/layout/site-shell";
import { HomePage } from "@/pages/home-page";

const AboutPage = lazy(() =>
  import("@/pages/about-page").then((module) => ({ default: module.AboutPage })),
);
const ProjectsPage = lazy(() =>
  import("@/pages/projects-page").then((module) => ({ default: module.ProjectsPage })),
);
const ProjectDetailPage = lazy(() =>
  import("@/pages/project-detail-page").then((module) => ({
    default: module.ProjectDetailPage,
  })),
);
const ResumePage = lazy(() =>
  import("@/pages/resume-page").then((module) => ({ default: module.ResumePage })),
);
const BlogIndexPage = lazy(() =>
  import("@/pages/blog-index-page").then((module) => ({ default: module.BlogIndexPage })),
);
const BlogPostPage = lazy(() =>
  import("@/pages/blog-post-page").then((module) => ({ default: module.BlogPostPage })),
);
const ContactPage = lazy(() =>
  import("@/pages/contact-page").then((module) => ({ default: module.ContactPage })),
);

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="posts" element={<BlogIndexPage />} />
          <Route path="posts/:slug" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
