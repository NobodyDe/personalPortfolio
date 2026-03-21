import Sidebar from "./components/Sidebar";
import Sobre from "./components/Sobre";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Connect from "./components/Connect";

function AppLayout() {
  return (
    <div className="md:min-h-screen max-w-4xl w-full mx-auto flex md:flex-row flex-col gap-12 px-8">
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
      <Sobre />
      <Projects />
      <Stack />
      <Connect />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projetos" element={<Projects />} />
        <Route path="stack" element={<Stack />} />
      </Route>
      <Route path="/" element={<Navigate to="pt" replace />} />
    </Routes>
  );
}
