import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="border-t border-ink-line py-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="label">Get in touch</p>
          <a
            href={`mailto:${site.email}`}
            className="link-underline w-fit text-sm text-ink-fg"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="link-underline w-fit font-mono text-xs text-ink-dim transition-colors duration-300 hover:text-ink-muted"
          >
            {site.phone}
          </a>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          {site.location}
          <span className="mx-2 text-ink-line">·</span>
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
