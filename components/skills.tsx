const skillCategories = [
  {
    title: "Architecture & Platforms",
    skills: [
      "Enterprise Data Architecture",
      "Databricks Lakehouse",
      "Platform Design",
      "Data Modernisation",
      "Cloud Architecture",
      "System Integration",
    ],
  },
  {
    title: "AI & Modern Technologies",
    skills: [
      "LLM-Driven Development",
      "AI-Enabled Code Generation",
      "Business Logic Extraction",
      "Automated Validation",
      "Machine Learning Ops",
      "Natural Language Processing",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Spark",
      "Python",
      "SQL",
      "ETL/ELT Pipelines",
      "Data Warehousing",
      "Stream Processing",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Azure",
      "Databricks",
      "Athena",
      "S3",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Governance & Compliance",
    skills: [
      "Data Governance",
      "Data Quality",
      "Regulatory Compliance",
      "DAMA Framework",
      "Metadata Management",
      "Data Lineage",
    ],
  },
  {
    title: "Domain Expertise",
    skills: [
      "Financial Services",
      "Capital Markets",
      "Treasury Systems",
      "Equity Markets",
      "Risk Management",
      "Regulatory Reporting",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <span className="group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
