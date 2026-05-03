import { Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Senior Data Architect
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="text-balance">Masthan Mohammed</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl leading-relaxed">
          Principal Data Engineer with over 17 years of experience delivering
          enterprise-scale data platforms across financial services, capital
          markets, and regulated industries.
        </p>

        <p className="text-base text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          Currently specialising in{" "}
          <span className="text-primary font-medium">
            Databricks-centric data modernisation
          </span>{" "}
          and{" "}
          <span className="text-primary font-medium">
            AI-enabled delivery
          </span>
          , leading large-scale migrations and applying LLMs to extract,
          validate, and regenerate legacy business logic.
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span>London, United Kingdom</span>
          </div>
          <Link
            href="mailto:mdmasthancse@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} />
            <span>mdmasthancse@gmail.com</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
          <Link
            href="#experience"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            View Experience
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
