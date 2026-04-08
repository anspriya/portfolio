const education = [
  {
    school: "Velammal Engineering College",
    degree: "B.E. Computer Science",
    score: "CGPA: 8.86",
    year: "2023–2027",
  },
  {
    school: "The TVS School",
    degree: "Higher Secondary Education",
    score: "93.6%",
    year: "2022–2023",
  },
];

const skills = [
  { label: "Languages", value: "C++, Python, Java" },
  { label: "Frameworks", value: "JavaScript, React, Flask" },
  { label: "Tools", value: "Git, VS Code" },
  { label: "Databases", value: "SQL, SQLite, MongoDB" },
];

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Main Flow Services and Technologies Pvt Ltd",
    points: [
      "Developed login system using PHP & MySQL",
      "Built responsive landing page using HTML/CSS",
    ],
  },
  {
    role: "AI & Cloud Technology Intern",
    company: "Edunet Foundation & IBMSkillsbuild with AICTE",
    points: [
      "Learned fundamentals of AI and Cloud Computing using IBM Cloud",
      "Developed AI-based projects: chatbots and crop recommendation systems",
      "Gained hands-on experience with IBM Watson, AutoAI, and Jupyter Notebook",
    ],
  },
];

const certifications = [
  "Cloud Computing – NPTEL",
  "SQL – IBM",
  "Remote Sensing Data Analytics in Crop Production Engineering – ISRO",
  "Python – GUVI",
  "Gen AI – TATA",
  "Job Simulation – Deloitte",
  "Solution Architecture – AWS",
  "GitHub Copilot – Simplilearn",
  "AWS Educate – Cloud Computing 101",
  "AWS Educate – Generative AI Foundations",
  "AWS Educate – Machine Learning Foundations",
  "IBM SkillsBuild – Artificial Intelligence Fundamentals",
  "IBM SkillsBuild – Cloud Computing & Solution Design",
  "MongoDB – Basics for Students Certification",

];

const honors = [
  "Technical Project Manager at Youth Red Cross – College Club",
  "Secured 1st prize in Velammal Internal Hackathon",
  "Participant: HACKERZ (CIT), BLOCKATHON (CGPA Calculator)",
];

function downloadResume() {
  const content = `ANDALPRIYADHARSHINI A
Full Stack Developer
Email: anspriya2023@gmail.com

Education:
- Velammal Engineering College (2023–2027), CGPA: 8.86
- The TVS School (2022–2023), 93.6%

Experience:
- Full Stack Developer Intern at Main Flow Services and Technologies Pvt Ltd
  * Developed login system using PHP & MySQL
  * Built responsive landing page with HTML & CSS
- AI & Cloud Technology Intern at Edunet Foundation & IBMSkillsbuild with AICTE
  * Learned fundamentals of AI and Cloud Computing using IBM Cloud
  * Developed AI-based projects: chatbots and crop recommendation systems
  * Gained hands-on experience with IBM Watson, AutoAI, and Jupyter Notebook

Projects:
-AI Innovation Planner (React, Node.js, AI)
- E-commerce Chatbot (Flask, React, SQLite)
- YRC Blood Support
- YouTube Analytics Platform (React, Node.js, TensorFlow.js)
- Restaurant Waitlist System
- Car Price Prediction (scikit-learn)

Certifications:
- NPTEL, IBM, ISRO, GUVI, TATA, Deloitte, AWS, Simplilearn, IBM SkillsBuild, MongoDB

Achievements:
- Technical Project Manager at Youth Red Cross
- 1st Prize – Velammal Internal Hackathon
- Participant: HACKERZ, BLOCKATHON`;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Andalpriyadharshini-Resume.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function ResumeCard({ title, titleColor, children }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "20px 22px",
        marginBottom: 16,
      }}
    >
      <h2 style={{ fontSize: 17, fontWeight: 700, color: titleColor, marginBottom: 14 }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function Resume() {
  return (
    <div>
      {/* Header */}
      <h1
        style={{
          fontSize: 34,
          fontWeight: 800,
          marginBottom: 8,
          textAlign: "center",
          background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Resume
      </h1>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <button
          onClick={downloadResume}
          style={{
            padding: "10px 28px",
            background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
            color: "#fff",
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 14,
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.15s, transform 0.15s",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ⬇ Download Resume
        </button>
      </div>

      {/* Summary */}
      <ResumeCard title="Summary" titleColor="#60A5FA">
        <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: 14 }}>
          Motivated computer science student with a solid foundation in programming and software
          development. Familiar with key programming languages and eager to apply problem-solving
          skills in real-world projects. Committed to continuous learning and growth in the
          technology field.
        </p>
      </ResumeCard>

      {/* Education */}
      <ResumeCard title="Education" titleColor="#34D399">
        {education.map((e) => (
          <div
            key={e.school}
            style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#F1F5F9" }}>{e.school}</div>
              <div style={{ fontSize: 13, color: "#94A3B8" }}>{e.degree}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 600, color: "#34D399", fontSize: 14 }}>{e.score}</div>
              <div style={{ fontSize: 12, color: "#64748B" }}>{e.year}</div>
            </div>
          </div>
        ))}
      </ResumeCard>

     <ResumeCard title="Technical Skills" titleColor="#FBBF24">
  
  {/* Programming Languages */}
  <div style={{ marginBottom: 20 }}>
    <h3 style={{ color: "#E2E8F0", marginBottom: 10 }}>
      Programming Languages
    </h3>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {["C++", "Java", "Python", "JavaScript"].map((item) => (
        <span
          key={item}
          style={{
            padding: "6px 14px",
            borderRadius: 20,
            border: "1px solid #3B82F6",
            color: "#60A5FA",
            fontSize: 13,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>

  {/* Frameworks */}
  <div style={{ marginBottom: 20 }}>
    <h3 style={{ color: "#E2E8F0", marginBottom: 10 }}>
      Frameworks & Libraries
    </h3>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {["React", "Node.js", "Express", "Flask"].map((item) => (
        <span
          key={item}
          style={{
            padding: "6px 14px",
            borderRadius: 20,
            border: "1px solid #22C55E",
            color: "#4ADE80",
            fontSize: 13,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>

  {/* Databases */}
  <div>
    <h3 style={{ color: "#E2E8F0", marginBottom: 10 }}>
      Databases & Tools
    </h3>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {["SQL", "MongoDB", "PostgreSQL", "Git", "VS Code"].map((item) => (
        <span
          key={item}
          style={{
            padding: "6px 14px",
            borderRadius: 20,
            border: "1px solid #A855F7",
            color: "#C084FC",
            fontSize: 13,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>

</ResumeCard>
      {/* Experience */}
      <ResumeCard title="Experience" titleColor="#F97316">
        {experience.map((exp, i) => (
          <div key={exp.role} style={{ marginBottom: i < experience.length - 1 ? 20 : 0 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#F1F5F9" }}>{exp.role}</div>
            <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 8 }}>{exp.company}</div>
            <ul style={{ paddingLeft: 18, color: "#94A3B8", fontSize: 13, lineHeight: 1.8 }}>
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </ResumeCard>

      {/* Certifications */}
      <ResumeCard title="Certifications" titleColor="#F472B6">

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16,
    }}
  >
    {certifications.map((c) => (
      <div
        key={c}
        style={{
          padding: 14,
          borderRadius: 12,
          border: "1px solid #334155",
          background: "#0F172A",
          color: "#E2E8F0",
          fontSize: 14,
          transition: "0.3s",
        }}
      >
        🎓 {c}
      </div>
    ))}
  </div>

</ResumeCard>

      {/* Honors & Awards */}
      <ResumeCard title="Honors & Awards" titleColor="#A78BFA">
        <ul style={{ paddingLeft: 18, color: "#94A3B8", fontSize: 14, lineHeight: 2 }}>
          {honors.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </ResumeCard>
    </div>
  );
}