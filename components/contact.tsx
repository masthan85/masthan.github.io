import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in discussing data architecture, AI-enabled solutions, or
            potential collaborations? Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Link
            href="mailto:mdmasthancse@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary transition-colors group w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">
                mdmasthancse@gmail.com
              </p>
            </div>
          </Link>

          <Link
            href="tel:+447825444008"
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary transition-colors group w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium text-foreground">
                +44 7825 444008
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:mdmasthancse@gmail.com"
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
            aria-label="Send Email"
          >
            <Mail size={20} />
          </Link>
        </div>

        {/* Location */}
        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin size={16} className="text-primary" />
          <span className="text-sm">London, United Kingdom</span>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Masthan Mohammed. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
