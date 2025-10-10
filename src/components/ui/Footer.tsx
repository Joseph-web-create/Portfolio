import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    {
      href: "https://github.com/Joseph-web-create",
      icon: <VscGithubInverted />,
    },
    {
      href: "https://www.linkedin.com/in/joseph-thankgod-3b3a08308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: <FaLinkedin />,
    },
    {
      href: "https://x.com/joe__tj?s=21",
      icon: <BsTwitterX />,
    },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-black text-white/70">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
        <p className="text-sm">© {year} Joseph ^_~</p>

        <div className="flex items-center gap-5 text-base">
          {links.map((item) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              key={item.href}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
