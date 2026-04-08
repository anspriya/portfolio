const stats = [
  { value: "8.86", label: "CGPA", color: "#60A5FA" },
  { value: "6+", label: "Projects", color: "#34D399" },
  { value: "7+", label: "Certifications", color: "#F59E0B" },
];

const skills = [
  { emoji: "🔥", label: "LLM" },
  { emoji: "⚡", label: "Agentic AI" },
  { emoji: "🚀", label: "Cloud Computing" },
  { emoji: "📊", label: "Computer Networks" },
];

const achievements = [
  { dot: "#10B981", text: "🚀 Technical Project Manager – Youth Red Cross" },
  {dot: "#F59E0B",text: "🏆 Secured 1st place in Velammal Internal Hackathon by building a high-impact project demonstrating strong problem-solving skills"},
  { dot: "#3B82F6", text: "💡 Certified in AWS, IBM, and MongoDB technologies with hands-on experience in AI, Cloud, and Database systems" },
  { dot: "#8B5CF6", text: "🏅 Participated in BLOCKATHON – Developed CGPA Calculator App" },
  {
    dot: "#f5550b",
    text: "🧠 Strong foundation in Data Structures & Algorithms with consistent problem-solving practice",
  },
  { dot: "#43cf0c", text: "📢 Developed 6+ real-world projects including full-stack, AI, and real-time applications" },
];

function GradientText({ children }) {
  return (
    <span
      style={{
        background: "linear-gradient(90deg, #60A5FA, #A78BFA, #F472B6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function StatCard({ value, label, color }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "20px 12px",
        textAlign: "center",
        flex: 1,
      }}
    >
      <div style={{ fontSize: 26, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function SkillTag({ emoji, label }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 18px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        fontSize: 13,
        fontWeight: 600,
        color: "#CBD5E1",
        cursor: "default",
        transition: "transform 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {emoji} {label}
    </span>
  );
}

function AchievementCard({ dot, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "12px 14px",
        fontSize: 13,
        color: "#CBD5E1",
        transition: "transform 0.15s, border-color 0.15s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.borderColor = dot + "55";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: dot,
          flexShrink: 0,
          marginTop: 3,
          boxShadow: `0 0 6px ${dot}`,
        }}
      />
      {text}
    </div>
  );
}

export default function About() {
  return (
    <div>
      {/* Headline */}
      <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 20 }}>
        <GradientText>Full Stack Developer</GradientText>
      </h1>

      {/* Bio */}
      <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: 15, marginBottom: 14 }}>
        Passionate and forward-thinking Computer Science Engineering student currently pursuing B.E at{" "}
        <span style={{ color: "#F1F5F9", fontWeight: 600 }}>Velammal Engineering College</span>,
        maintaining a CGPA of 8.86. Dedicated to leveraging technology to solve real-world problems
        through clean, scalable code and impactful software.
      </p>
      <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: 15, marginBottom: 32 }}>
        Equipped with a solid foundation in Java, C++, and Python, I specialize in developing
        full-stack web applications and real-time systems. My interests span across system design,
        cloud-native development, and open-source contributions.
      </p>

      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Currently Learning */}
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "#F1F5F9" }}>
        Currently Learning
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
        {skills.map((s) => (
          <SkillTag key={s.label} {...s} />
        ))}
      </div>

      {/* Achievements */}
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "#F1F5F9" }}>
        Recent Achievements
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 10,
          marginBottom: 36,
        }}
      >
        {achievements.map((a) => (
          <AchievementCard key={a.text} {...a} />
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563EB, #7C3AED)",
          borderRadius: 16,
          padding: "24px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          Let's Connect!
        </h3>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 18 }}>
          Interested in collaborating or have a project in mind?
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          <a
            href="mailto:anspriya2023@gmail.com"
            style={{
              padding: "9px 22px",
              background: "#fff",
              color: "#2563EB",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/andalpriyadharshini-a-b94519297"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "9px 22px",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}