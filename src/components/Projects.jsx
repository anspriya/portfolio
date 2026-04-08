
import commImg from "../assets/comm.jpg";
import yt from "../assets/yt.jpg";
import yrcc from "../assets/yrc.jpg";
import rest from "../assets/res.jpg";
import car from "../assets/car.webp";
import aiImg from "../assets/smart.png";
const projects = [
    {
  title: "AI Innovation Planner",
  description:
    "A modern AI-powered web application that helps users generate, organize, and develop business ideas with features like pitch deck creation, roadmap generation, and idea management.",
  tags: [
    "React",
    "AI",
    "Node.js",
    "PDF Export",
    "Authentication"
  ],
  url: "https://github.com/anspriya/AI-Innovation-Planner",
  image: aiImg, 
  accent: "#22C55E",
},
  {
    title: "E-commerce Chatbot",
    description:
      "A conversational chatbot built using Flask, SQLite, React, and TailwindCSS that assists users in navigating product info and streamlining customer support in an online store.",
    tags: ["Flask", "React", "Tailwind", "SQLite"],
    url: "https://github.com/anspriya/ecommerce-chatbot",
    image: commImg,
    accent: "#3B82F6",
  },
  {
    title: "YRC Blood Support",
    description:
      "Platform connecting blood donors with recipients to facilitate urgent requests and improve efficiency.",
    tags: ["Team Project", "Urgent Care"],
    url: "https://github.com/Siddharth-magesh/YouthRedCross-BloodRequest",
    image: yrcc,
    accent: "#EF4444",
  },
  {
    title: "YouTube Analytics Platform",
    description:
      "Full-stack analytics application comparing YouTube Shorts vs long-form video content with dashboards, visualisations, and ML-powered insights.",
    tags: ["React.js", "Node.js / Express", "YouTube API", "TensorFlow.js"],
    url: "https://github.com/anspriya/Youtube-Analytics-Platform.git",
    image: yt,
    accent: "#F59E0B",
  },
  {
    title: "Restaurant Waitlist System",
    description:
      "Queue-based application to manage restaurant customer waitlists using core data structures.",
    tags: ["Queue", "DSA"],
    url: "https://github.com/anspriya/Restaurant-Waitlist-Management-System.git",
    image: rest,
    accent: "#8B5CF6",
  },
  {
    title: "Car Price Prediction",
    description:
      "ML model built using Python and scikit-learn to predict car prices based on multiple input features.",
    tags: ["Python", "scikit-learn"],
    url: "https://github.com/anspriya/Car-Price-Prediction.git",
    image: car,
    accent: "#10B981",
  },
];

function ProjectCard({ project }) {
  const { title, description, tags, url, accent ,img} = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "20px",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = accent + "66";
        e.currentTarget.style.boxShadow = `0 8px 32px ${accent}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Icon */}
    
        <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", borderRadius: 8, marginBottom: 12 }}
      />

      {/* Title */}
      <div style={{ fontSize: 15, fontWeight: 600, color: "#F1F5F9", marginBottom: 8 }}>
        {title}
      </div>

      {/* Description */}
      <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6, marginBottom: 14 }}>
        {description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11,
              padding: "3px 9px",
              borderRadius: 6,
              background: accent + "22",
              border: `1px solid ${accent}44`,
              color: accent,
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div>
      <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 24, color: "#F1F5F9" }}>
        Projects
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}