import Sidebar from "./components/Sidebar";
import Sobre from "./components/Sobre";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden px-8 max-w-4xl w-full mx-auto flex flex-row gap-12">
      <Sidebar />
      <Sobre />
    </div>
  );
}
