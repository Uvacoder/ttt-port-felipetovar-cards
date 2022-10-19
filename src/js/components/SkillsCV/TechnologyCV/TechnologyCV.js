import "./TechnologyCV.scss";
import { Icon } from "@iconify/react";

export default function TechnologyCV({ technology }) {
  const iconMap = {
    python: "akar-icons:python-fill",
    html: "akar-icons:html-fill",
    "common lisp": "file-icons:common-lisp",
    javascript: "akar-icons:javascript-fill",
    cli: "bi:terminal-fill",
    css: "akar-icons:css-fill",
    glsl: "file-icons:opengl",
    git: "bi:git",
  };

  const langKeys = Object.keys(technology.languages);
  langKeys.sort((a, b) => technology.languages[a].level - technology.languages[b].level);
  const languages = langKeys.map((k, i) => {
    const lang = technology.languages[k];
    const libraries =
      lang.libraries &&
      lang.libraries.map((lib, j) => (
        <span key={j}>
          {lib}
          {j < lang.libraries.length - 1 && ", "}
        </span>
      ));

    return (
      <div key={i}>
        • <Icon icon={iconMap[k.toLowerCase()]} />
        <span> {k}</span>
        {lang.libraries && <> ({libraries})</>}.
      </div>
    );
  });

  let software = technology.software;
  const softwareKeys = Object.keys(software);
  software = softwareKeys.map((cat, i) => {
    const category = software[cat];
    const categoryKeys = Object.keys(category);
    return (
      <div key={i}>
        <h6>{cat}</h6>
        {categoryKeys.map((app, j) => {
          const application = category[app];
          return (
            <span key={j}>
              {app}
              {application.libraries && (
                <>
                  (
                  {application.libraries.map((lib, k) => (
                    <span key={k}>
                      {lib}
                      {k < application.libraries.length - 1 && ", "}
                    </span>
                  ))}
                  )
                </>
              )}
              {j < categoryKeys.length - 1 ? ", " : "."}
            </span>
          );
        })}
      </div>
    );
  });

  return (
    <div>
      <h5>Technology</h5>
      <h6>Computer languages</h6>
      {languages}
      <h6>Software</h6>
      {software}
    </div>
  );
}
