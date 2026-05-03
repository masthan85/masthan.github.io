import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Current",
    role: "Technology Lead | Senior Data Architect",
    company: "Infosys Limited",
    location: "United Kingdom",
    description:
      "Leading large-scale migration from AWS Athena-based analytics to Databricks lakehouse environments. Applying large language models to extract, validate, and regenerate legacy business logic, achieving significant acceleration in delivery cycles.",
    technologies: [
      "Databricks",
      "AWS",
      "LLM",
      "Python",
      "Spark",
      "Data Governance",
    ],
  },
  {
    period: "Previous",
    role: "Senior Data Engineer",
    company: "Major Financial Institutions",
    location: "United Kingdom",
    description:
      "Delivered enterprise-scale data platforms across financial services, capital markets, and regulated industries. Supported treasury systems, equity markets, and large-scale financial data environments for global organisations including tier-one banks and asset managers.",
    technologies: [
      "SQL",
      "ETL",
      "Data Warehousing",
      "Financial Systems",
      "Capital Markets",
    ],
  },
  {
    period: "Earlier Career",
    role: "Data Engineer & Architect",
    company: "Various Organisations",
    location: "Global",
    description:
      "Built foundational expertise in data architecture, platform design, and engineering across multiple industries. Developed deep understanding of data governance, quality frameworks, and regulatory compliance requirements.",
    technologies: [
      "Database Design",
      "ETL Pipelines",
      "Data Modeling",
      "SQL Server",
      "Oracle",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            17+ Years of Data Excellence
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-primary transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

              <div className="mb-2">
                <span className="text-sm text-primary font-medium">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {exp.role}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-muted-foreground">{exp.company}</span>
                <span className="text-muted-foreground/50">•</span>
                <span className="text-muted-foreground text-sm">
                  {exp.location}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
