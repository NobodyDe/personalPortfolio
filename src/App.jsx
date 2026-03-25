import Sidebar from "./components/Sidebar";
import Sobre from "./components/Sobre";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Connect from "./components/Connect";
import { motion } from "framer-motion";
import SEO from "./components/SEO";
import { t } from "i18next";

export function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function AppLayout() {
  return (
    <div className="md:min-h-screen max-w-4xl w-full mx-auto flex md:flex-row flex-col gap-12 px-6">
      <Sidebar />

      <main className="flex-1 flex flex-col md:pt-20 gap-8">
        <Outlet />
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <SEO
        title={t("seo.home.title")} // "Home"
        description={t("seo.home.description")} // "Portfólio de Henrique Santos..."
      />
      <FadeIn>
        <Sobre />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Projects />
      </FadeIn>
      <FadeIn delay={0.4}>
        <Stack />
      </FadeIn>
      <Connect />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="projetos"
          element={
            <FadeIn>
              <SEO
                title={t("seo.projects.title")}
                description={t("seo.projects.description")}
              />
              <Projects />
            </FadeIn>
          }
        />
        <Route
          path="stack"
          element={
            <FadeIn>
              <SEO
                title={t("seo.stack.title")}
                description={t("seo.stack.description")}
              />
              <Stack />
            </FadeIn>
          }
        />
        <Route
          path="conectar"
          element={
            <FadeIn>
              <SEO
                title={t("seo.connect.title")}
                description={t("seo.connect.description")}
              />
              <Connect />
            </FadeIn>
          }
        />
      </Route>
      <Route path="/" element={<Navigate to="pt" replace />} />
    </Routes>
  );
}
