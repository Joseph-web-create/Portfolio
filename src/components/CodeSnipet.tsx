import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Prism from "prismjs";

// Import CSS + languages
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";

function CodeSnipet() {
  const el = useRef<HTMLSpanElement | null>(null);
  const codeSnippets = [
    `const dev = {
    name: "Joseph Lawrence",
    role: "Full Stack Developer",
    aboutMe: "Code is my tool, but building useful stuff for people is my real job.",
    frontend:["React", "React Native", "Next.js", "Responsive Design, Accessibility", "TypeScript"],
    backend: ["Node.js", "Express.js", "MongoDB", "PostgresSQL" "RESTful APIs", "Serverless (Convex)"],
    location: "Lagos"
  };
  
  console.log("Hire me → thankgodjoseph789@gmail.com")
  `,
  ];

  useEffect(() => {
    if (!el.current) return;
    const type = new Typed(el.current, {
      strings: codeSnippets,
      typeSpeed: 10,
      backSpeed: 30,
      backDelay: 2000,
      loop: false,
      onStringTyped: () => Prism.highlightAll(),
      showCursor: true,
      smartBackspace: true,
      cursorChar: "▊",
    });

    return () => type.destroy();
  });
  return (
    <div style={{ padding: "20px", borderRadius: "8px" }}>
      <pre>
        <code ref={el} className="language-typescript"></code>
      </pre>
    </div>
  );
}

export default CodeSnipet;
