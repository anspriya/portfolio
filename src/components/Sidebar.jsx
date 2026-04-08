import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import profile from "../assets/profile.jpg";
const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
];

const SOCIALS = [
  { href: "https://github.com/anspriya", icon: <GitHubIcon />, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/andalpriyadharshini-a-b94519297",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  { href: "mailto:anspriya2023@gmail.com", icon: <MailIcon />, label: "Email" },
  {
    href: "https://leetcode.com/u/anspriya/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.5 3L5 11.5 13.5 20l2.5-2.5L10 11.5l6-6z" />
      </svg>
    ),
    label: "LeetCode",
  },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside
      style={{
        background: "#0B1120",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        width: 240,
        flexShrink: 0,
      }}
    >
      {/* Avatar & Name */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #60A5FA, #A78BFA, #F472B6)",
            margin: "0 auto 12px",
            padding: 3,
          }}
        >
            <img src={profile}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#0B1120",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
              color: "#A78BFA",
            }}/>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9", marginBottom: 4 }}>
          Andalpriyadharshini A
        </div>
        <div style={{ fontSize: 12, color: "#64748B" }}>Full Stack Developer</div>
      </div>

      {/* Social Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {SOCIALS.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            title={label}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748B",
              textDecoration: "none",
              transition: "color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#60A5FA";
              e.currentTarget.style.borderColor = "#60A5FA55";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#64748B";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              style={{
                background: isActive ? "rgba(99,102,241,0.15)" : "transparent",
                border: isActive
                  ? "1px solid rgba(99,102,241,0.3)"
                  : "1px solid transparent",
                borderRadius: 10,
                padding: "10px 14px",
                textAlign: "left",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#A78BFA" : "#64748B",
                transition: "all 0.15s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "#94A3B8";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = "#64748B";
              }}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}