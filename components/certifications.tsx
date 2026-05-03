import { Award, Trophy } from "lucide-react";

const certifications = [
  {
    title: "Databricks Certified Data Engineer",
    issuer: "Databricks",
    type: "certification",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    type: "certification",
  },
  {
    title: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    type: "certification",
  },
  {
    title: "DAMA UK Recognition",
    issuer: "DAMA UK Community",
    type: "award",
  },
];

const awards = [
  {
    title: "UK Professional Award",
    description:
      "Recognised for excellence in data architecture and engineering leadership",
  },
  {
    title: "Global Industry Recognition",
    description:
      "Acknowledged for contributions to AI-enabled data modernisation practices",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications & Awards
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-medium text-foreground">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="text-primary" size={24} />
              Industry Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="p-4 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-medium text-foreground">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>

            {/* DAMA UK */}
            <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                DAMA UK Community Leadership
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Actively engaged in the DAMA UK community through mentoring and
                leadership, contributing to the advancement of data management
                practices across the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
