import { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function App() {
  const [active, setActive] = useState("about");

  const renderSection = () => {
    switch (active) {
      case "about":    return <About />;
      case "projects": return <Projects />;
      case "resume":   return <Resume />;
      default:         return <About />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0F172A",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#F1F5F9",
      }}
    >
      <Sidebar active={active} onNavigate={setActive} />

      <main
        style={{
          flex: 1,
          padding: "40px 36px",
          overflowY: "auto",
        }}
      >
        {renderSection()}
      </main>
    </div>
  );
}