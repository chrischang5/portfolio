import { BsGithub, BsLinkedin } from "react-icons/bs";

import { GrMail } from "react-icons/gr";

const links = [
  {
    label: "Email",
    href: "mailto:christopherchang150@gmail.com",
    Icon: GrMail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chrischang150/",
    Icon: BsLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/chrischang5",
    Icon: BsGithub,
  },
];

// Row of icon-only contact links, shown under the About intro.
export function Contact() {
  return (
    <div role="group" aria-label="Contact links" className="flex gap-3">
      {links.map(({ label, href, Icon }) => {
        const isExternal = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(isExternal && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-200 text-dark transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 dark:bg-primary-925 dark:text-light dark:hover:text-accent-400"
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}
