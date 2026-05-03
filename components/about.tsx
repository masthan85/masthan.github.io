import { Database, Brain, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Enterprise Architecture",
    description:
      "Designing and implementing large-scale data platforms for tier-one banks, asset managers, and energy companies.",
  },
  {
    icon: Brain,
    title: "AI-Enabled Delivery",
    description:
      "Applying large language models to extract, validate, and regenerate legacy business logic with production-grade quality.",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description:
      "Ensuring regulatory compliance and data quality across financial services, capital markets, and treasury systems.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "Leading cross-functional teams and mentoring through the DAMA UK community and professional engagements.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Building Data Platforms That Drive Business Value
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Senior Data Architect and Principal Data Engineer with extensive
            background supporting treasury systems, equity markets, and
            large-scale financial data environments for global organisations.
            Actively recognised through UK and global professional awards and
            engaged in the DAMA UK community through mentoring and leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
