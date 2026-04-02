/**
 * Sections.tsx
 * All portfolio sections below the hero for Abinaya Rajendran.
 * Matches the navy/blue executive theme from the hero.
 */

export default function Sections() {
  return (
    <main className="font-sans">

      {/* ── EXECUTIVE PROFILE ── */}
      <section id="profile" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Executive Profile</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12 leading-tight" style={{ color: "#0f2244" }}>
            A Strategic Quality Professional<br />
            <span className="text-blue-600">Built for Integrated Systems</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                Abinaya Rajendran is a seasoned Senior Software Tester and emerging QA Integration Lead with over nine years of hands-on experience in enterprise healthcare systems — combining deep technical expertise with strategic quality governance.
              </p>
              <p>
                At UST HealthProof, she has consistently operated at the intersection of business requirements, system architecture, and delivery readiness — ensuring integrated platforms meet the highest quality standards before every release. Her work spans the full spectrum of SDLC and STLC, from requirements analysis and test strategy design through execution and automation to post-release quality oversight.
              </p>
              <p>
                With a foundation in HealthEdge, Selenium, TestComplete, and REST API validation, she brings both tool-depth and cross-functional communication skills that define effective QA leadership. She is recognized for her ability to coordinate testing priorities across teams, identify risk early, and drive defect prevention — not just detection.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Test Strategy",
                  desc: "Designs comprehensive test plans aligned with release goals, risk profiles, and integration complexity.",
                  icon: "📋",
                },
                {
                  title: "Integration Oversight",
                  desc: "Leads end-to-end integration validation across connected healthcare modules and API endpoints.",
                  icon: "🔗",
                },
                {
                  title: "Release Confidence",
                  desc: "Drives release readiness through rigorous regression, sanity, and smoke testing cycles.",
                  icon: "📈",
                },
                {
                  title: "Team Coordination",
                  desc: "Collaborates across QA, development, business, and operations teams to align quality outcomes.",
                  icon: "👥",
                },
              ].map((p) => (
                <div key={p.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm">{p.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP STRENGTHS ── */}
      <section id="strengths" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#0a1628" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-3">Leadership Strengths</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
            Where Quality Governance<br />
            <span className="text-blue-300">Meets Strategic Delivery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {[
              { num: "01", title: "Test Planning & Governance", desc: "Defines test scope, entry/exit criteria, coverage matrices, and traceability frameworks that align testing with business and technical requirements." },
              { num: "02", title: "Integration Test Coordination", desc: "Orchestrates system integration testing across interconnected healthcare modules — ensuring data integrity, workflow continuity, and API correctness." },
              { num: "03", title: "Automation Enablement", desc: "Architects and maintains automation packs using Selenium + Java, TestComplete, and data-driven frameworks — accelerating regression cycles." },
              { num: "04", title: "Risk Identification & Defect Prevention", desc: "Proactively identifies quality risks during requirements review, contributing to defect prevention strategies before code is written." },
              { num: "05", title: "Cross-Functional Collaboration", desc: "Bridges QA, development, business analysts, and operations — translating technical defects into actionable insights for all stakeholders." },
              { num: "06", title: "SDLC & STLC Discipline", desc: "Applies rigorous process discipline across Agile and Waterfall delivery models — from sprint planning through release signoff and post-production monitoring." },
            ].map((s) => (
              <div key={s.num} className="bg-white/[0.03] hover:bg-white/[0.06] p-8 transition-colors duration-200">
                <div className="text-5xl font-bold text-blue-300/10 mb-4 leading-none">{s.num}</div>
                <h3 className="text-white font-bold mb-3 text-sm leading-snug">{s.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE TOOLS & TECHNOLOGIES ── */}
      <section id="tools" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Core Tools & Technologies</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 leading-tight" style={{ color: "#0f2244" }}>
            Technical Command Across<br />
            <span className="text-blue-600">the Full QA Ecosystem</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automation & Frameworks",
                badges: [
                  { label: "Selenium WebDriver", primary: true },
                  { label: "Java", primary: true },
                  { label: "TestNG", primary: true },
                  { label: "Page Object Model", primary: true },
                  { label: "Data-Driven Framework", primary: true },
                  { label: "TestComplete", primary: true },
                  { label: "UiPath", primary: false },
                  { label: "Maven", primary: true },
                ],
              },
              {
                title: "CI/CD & DevOps",
                badges: [
                  { label: "Jenkins", primary: true },
                  { label: "GitLab", primary: true },
                  { label: "Git", primary: false },
                ],
              },
              {
                title: "Performance Testing",
                badges: [
                  { label: "JMeter", primary: true },
                  { label: "LoadRunner", primary: false },
                ],
              },
              {
                title: "API & Integration Testing",
                badges: [
                  { label: "REST API Testing", primary: true },
                  { label: "Postman", primary: true },
                  { label: "SoapUI", primary: true },
                ],
              },
              {
                title: "Test Management",
                badges: [
                  { label: "JIRA", primary: true },
                  { label: "TestRail", primary: true },
                ],
              },
              {
                title: "Domain & Platform",
                badges: [
                  { label: "HealthEdge", primary: true, highlight: true },
                  { label: "SQL", primary: true },
                  { label: "UI Testing", primary: false },
                  { label: "Team Leading", primary: false },
                ],
              },
            ].map((cat) => (
              <div key={cat.title} className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 pb-3 border-b-2 border-slate-100">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.badges.map((b) => (
                    <span
                      key={b.label}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-150 hover:-translate-y-0.5 cursor-default ${
                        (b as { highlight?: boolean }).highlight
                          ? "bg-gradient-to-r from-blue-800 to-blue-600 text-white"
                          : b.primary
                          ? "bg-blue-50 text-blue-700 border border-blue-100"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION & TESTING EXPERTISE ── */}
      <section id="expertise" className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Testing Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 leading-tight" style={{ color: "#0f2244" }}>
            Integration & Quality Coverage<br />
            <span className="text-blue-600">Across Every Testing Layer</span>
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { tag: "System Integration", title: "System Integration Testing", desc: "Validates end-to-end workflows across integrated healthcare modules — ensuring data flows, business rules, and API contracts behave correctly across system boundaries.", tier: "a" },
                { tag: "Regression", title: "Regression & Release Testing", desc: "Maintains and executes comprehensive regression suites supporting every sprint and release cycle — balancing manual and automated execution for maximum coverage.", tier: "a" },
                { tag: "Functional", title: "System & Functional Testing", desc: "Designs and executes functional test cases against complex healthcare business logic — mapping every test to requirements for full traceability.", tier: "a" },
              ].map((c) => (
                <div key={c.title} className="bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="border-t-4 border-blue-600 p-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{c.tag}</span>
                    <h4 className="font-bold text-gray-800 mt-3 mb-2 text-sm leading-snug">{c.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { tag: "Process", title: "SDLC & STLC Governance", desc: "Applies structured quality gates across Agile sprint cycles and Waterfall release phases." },
                { tag: "Defect", title: "Bug Life Cycle Management", desc: "Manages defect lifecycle from identification through root cause analysis, retesting, and closure." },
                { tag: "Validation", title: "Smoke & Sanity Validation", desc: "Executes rapid post-deployment smoke checks ensuring build stability before full regression." },
                { tag: "Black-Box", title: "Black-Box & Exploratory", desc: "Applies black-box principles and exploratory techniques to uncover edge cases in complex workflows." },
              ].map((c) => (
                <div key={c.title} className="bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="border-t-4 border-slate-200 p-5">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400 bg-slate-50 px-2 py-1 rounded-full">{c.tag}</span>
                    <h4 className="font-bold text-gray-800 mt-3 mb-2 text-xs leading-snug">{c.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT OUTCOMES ── */}
      <section id="outcomes" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#0a1628" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-3">Project Outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
            Measurable Impact Across<br />
            <span className="text-blue-300">Quality & Delivery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { metric: "↑ Regression Efficiency", title: "Accelerated Regression Cycles", desc: "Automation-enabled regression execution reduced manual testing effort — allowing faster sprint closure and more confident release cycles.", pct: 82 },
              { metric: "↑ Release Confidence", title: "Stronger Release Readiness", desc: "Structured pre-release test governance improved stakeholder confidence in deployment quality across healthcare platforms.", pct: 90 },
              { metric: "↑ Automation Coverage", title: "Expanded Automation Contribution", desc: "Test automation pack growth using Selenium and TestComplete expanded coverage of critical business flows.", pct: 75 },
              { metric: "↑ Integration Validation", title: "Deeper Integration Coverage", desc: "End-to-end SIT across HealthEdge modules and APIs ensured data integrity and reduced cross-system defect leakage.", pct: 88 },
              { metric: "↓ Defect Leakage", title: "Reduced Production Defects", desc: "Risk-based testing approaches and early-phase requirements analysis contributed to fewer defects escaping to production.", pct: 78, green: true },
              { metric: "↑ Traceability", title: "Improved Test Governance", desc: "Full requirements-to-test traceability via TestRail and JIRA provided clear audit trails and improved visibility for all stakeholders.", pct: 85 },
            ].map((o) => (
              <div key={o.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-200">
                <div className="text-xs font-bold tracking-widest uppercase text-blue-300 mb-2">{o.metric}</div>
                <h4 className="text-white font-bold mb-2 text-sm leading-snug">{o.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{o.desc}</p>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${o.pct}%`,
                      background: o.green
                        ? "linear-gradient(to right, #10b981, #34d399)"
                        : "linear-gradient(to right, #2563eb, #64CEFB)",
                    }}
                  />
                </div>
                <span className="text-white/30 text-xs">Significant Improvement</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY ACHIEVEMENTS ── */}
      <section id="achievements" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Key Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 leading-tight" style={{ color: "#0f2244" }}>
            Leadership-Grade Contributions<br />
            <span className="text-blue-600">That Define Her Trajectory</span>
          </h2>

          <div className="divide-y divide-slate-100">
            {[
              { title: "Quality Strategy Contribution Across Healthcare Applications", desc: "Contributed to the design and execution of end-to-end quality strategies for complex healthcare benefit administration and enrollment platforms — aligning test coverage with business-critical workflows and regulatory requirements." },
              { title: "End-to-End Integration Testing Leadership", desc: "Supported and coordinated end-to-end integration testing efforts across HealthEdge modules, third-party interfaces, and API layers — ensuring seamless system interoperability and data fidelity across complex healthcare ecosystems." },
              { title: "Automation & Regression Practice Strengthening", desc: "Built and maintained Selenium WebDriver and TestComplete automation packs using Page Object Model and data-driven frameworks — establishing reusable assets that accelerated regression cycles across multiple projects." },
              { title: "Cross-Functional Collaboration & QA Advocacy", desc: "Improved collaboration between QA, business analysts, development, and product management teams — translating complex defects into actionable insights and bridging the gap between technical findings and strategic business decisions." },
              { title: "Leadership Readiness in Complex Testing Environments", desc: "Demonstrated consistent test coordination capabilities in multi-team, high-complexity environments — managing test priorities, guiding junior testers, and maintaining quality standards under demanding release timelines." },
              { title: "PAHM & ISTQB Dual Certification", desc: "Achieved both ISTQB Foundation Level and PAHM certifications — combining international testing standards expertise with deep healthcare domain knowledge for a uniquely powerful QA perspective." },
            ].map((a) => (
              <div key={a.title} className="group flex gap-6 items-start py-7">
                <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-200">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{a.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE HIGHLIGHTS ── */}
      <section id="experience" className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 leading-tight" style={{ color: "#0f2244" }}>
            Career Trajectory &<br />
            <span className="text-blue-600">Professional Highlights</span>
          </h2>

          <div className="relative pl-8 border-l-2 border-gradient-to-b from-blue-600 via-slate-300 to-transparent" style={{ borderColor: "#2563eb" }}>
            {[
              {
                role: "Lead II Software Tester",
                company: "UST HealthProof",
                period: "Current Role",
                current: true,
                skills: ["HealthEdge", "Selenium", "TestRail", "JIRA", "REST API", "Jenkins"],
                points: [
                  "Leads quality efforts across healthcare benefit administration and enrollment platforms built on HealthEdge.",
                  "Designs and executes test strategies covering functional, regression, integration, and API testing layers.",
                  "Maintains and enhances Selenium WebDriver automation packs using POM and data-driven frameworks.",
                  "Coordinates cross-team test execution and reporting, providing clear quality status to release stakeholders.",
                  "Performs REST API testing with Postman and SoapUI — validating business logic at the service layer.",
                  "Manages defect lifecycle in JIRA, collaborating closely with development on root cause resolution.",
                ],
              },
              {
                role: "Senior Software Tester",
                company: "Healthcare Technology Organization",
                period: "Prior Role",
                current: false,
                skills: ["TestComplete", "JMeter", "SQL", "Agile", "System Testing"],
                points: [
                  "Executed comprehensive system and integration test cycles across Windows and web-based healthcare applications.",
                  "Applied black-box testing, smoke, sanity, and regression techniques across multiple release cycles.",
                  "Used JMeter for performance testing to validate system behaviour under load conditions.",
                  "Collaborated with business analysts to analyse requirements and derive effective test conditions.",
                ],
              },
              {
                role: "Software Tester",
                company: "Software Services Organization",
                period: "Early Career",
                current: false,
                skills: ["Manual Testing", "Waterfall", "Bug Life Cycle", "STLC"],
                points: [
                  "Executed manual test cases across web and Windows-based applications across multiple domains.",
                  "Documented defects with detailed reproduction steps and collaborated with developers on resolution.",
                  "Built foundational expertise in SDLC, STLC, and bug life cycle management processes.",
                ],
              },
            ].map((exp) => (
              <div key={exp.role} className="relative mb-10 last:mb-0">
                <div className={`absolute -left-[2.35rem] top-4 w-4 h-4 rounded-full border-3 border-white ${exp.current ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-slate-300"}`} style={{ border: "3px solid white" }} />
                <div className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 ml-2">
                  <div className="flex flex-wrap justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800 text-base">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full h-fit">{exp.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 leading-tight" style={{ color: "#0f2244" }}>
            Professional Credentials<br />
            <span className="text-blue-600">That Validate Expertise</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                issuer: "ISTQB",
                name: "Certified Tester Foundation Level",
                desc: "International Software Testing Qualifications Board — the globally recognised standard for software testing professionals. Validates comprehensive knowledge of testing principles, processes, and techniques.",
                tags: ["Test Fundamentals", "International Standard", "Globally Recognised"],
              },
              {
                issuer: "PAHM",
                name: "Professional, Academy for Healthcare Management",
                desc: "Demonstrates deep domain knowledge of healthcare operations, payer systems, benefit administration, and managed care — a rare and valuable combination alongside technical QA expertise.",
                tags: ["Healthcare Domain", "Payer Systems", "Benefit Administration"],
              },
            ].map((cert) => (
              <div key={cert.issuer} className="flex gap-6 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200" style={{ borderTop: "4px solid #2563eb" }}>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-200 text-3xl font-bold" style={{ background: "linear-gradient(135deg, #0f2244, #1e4080)" }}>
                  🏅
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-1">{cert.issuer}</p>
                  <h3 className="font-bold text-gray-800 text-base mb-3 leading-snug">{cert.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{cert.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((t) => (
                      <span key={t} className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#0a1628" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
            Let's Connect on<br />
            <span className="text-blue-300">Quality Leadership</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Whether you're looking to discuss QA strategy, integration testing challenges, or quality leadership opportunities in healthcare technology — Abinaya is open to meaningful professional conversations.
              </p>
              {/* UPDATE: Replace '#' with actual resume path */}
              <a
                href="#"
                download
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm rounded-full px-8 py-4 hover:bg-white/90 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </a>
            </div>

            <div className="space-y-3">
              {/* UPDATE: Replace placeholders with real contact details */}
              {[
                { icon: "✉️", label: "Email", value: "abinaya@email.com", href: "mailto:abinaya@email.com" },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/abinaya-rajendran", href: "https://linkedin.com/in/abinaya-rajendran" },
                { icon: "📍", label: "Location", value: "India · Open to Remote", href: null },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 hover:bg-white/[0.08] hover:translate-x-1 transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-blue-600/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-white text-sm font-medium hover:text-blue-300 transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-white text-sm font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-7 px-4" style={{ background: "#060c1a" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white/50 text-sm">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">AR</div>
            <span>Abinaya Rajendran</span>
            <span className="text-white/20">·</span>
            <span>Lead II Software Tester · ISTQB · PAHM</span>
          </div>
          <div className="flex gap-6">
            {/* UPDATE: Fill in actual URLs */}
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Resume</a>
            <a href="https://linkedin.com/in/abinaya-rajendran" target="_blank" rel="noopener" className="text-white/40 hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="mailto:abinaya@email.com" className="text-white/40 hover:text-white text-sm transition-colors">Email</a>
          </div>
          <p className="text-white/20 text-xs">© 2025 Abinaya Rajendran. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
