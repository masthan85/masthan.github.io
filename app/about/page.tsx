import { buildPageMeta } from "@/lib/metadata";
import Link from "next/link";
import { siteName } from "@/lib/site";

export const metadata = buildPageMeta({
  title: "About",
  description: `About ${siteName} — data manager, architect, former data engineer, and AI consultant based in London.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-soft">
        About
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-white">
        Profile
      </h1>
      <div className="mt-8 max-w-none space-y-6 text-base leading-relaxed text-zinc-300">
        <p>
          I am <strong className="text-white">{siteName}</strong> — a{" "}
          <strong className="text-white">Senior Data Architect</strong> and{" "}
          <strong className="text-white">Principal Data Engineer</strong> with over{" "}
          <strong className="text-white">17 years</strong> of experience delivering
          enterprise-scale data platforms across{" "}
          <strong className="text-white">
            financial services, capital markets, and regulated industries
          </strong>
          . My background spans hands-on data engineering through to architecture
          and technology leadership — so recommendations stay grounded in what
          teams can actually ship.
        </p>
        <p>
          Today I focus on <strong className="text-white">Databricks-centric</strong>{" "}
          modernisation, migration from legacy analytics and{" "}
          <strong className="text-white">AWS Athena</strong>-style patterns to a
          governed lakehouse, and{" "}
          <strong className="text-white">AI-enabled delivery</strong> using large
          language models with human-in-the-loop validation — materially shortening
          delivery cycles while preserving auditability.
        </p>
        <p>
          I operate as <strong className="text-white">Technology Lead | Senior Data Architect</strong> at{" "}
          <strong className="text-white">Infosys Limited</strong> across the UK,
          France, and India, and take selective{" "}
          <strong className="text-white">advisory</strong> engagements. I am an
          active member of <strong className="text-white">DAMA UK</strong> and a
          registered mentor in their programme. Awards include the{" "}
          <strong className="text-white">Global Recognition Award 2025</strong> and{" "}
          <strong className="text-white">DAMA Practitioner Award 2025 (Runner-Up)</strong>.
        </p>
        <p>
          <strong className="text-white">Education:</strong> B.Tech Computer Science,{" "}
          JNTU Hyderabad (2003–2007). <strong className="text-white">Base:</strong>{" "}
          London, United Kingdom.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/experience"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Experience
        </Link>
        <Link
          href="/book"
          className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-accent"
        >
          Book a consultation
        </Link>
      </div>
    </div>
  );
}
