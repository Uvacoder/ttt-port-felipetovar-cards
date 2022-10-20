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
    docker: "fa6-brands:docker",
    sql: "cib:postgresql",
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
      <span key={i} className="lang">
        <div className="icon">
          <Icon icon={iconMap[k.toLowerCase()]} />
        </div>
        <span className="lang-name"> {k}</span>
        <span className="libs">
          {lang.libraries && <>&nbsp;({libraries})</>}
          {i < langKeys.length - 1 ? ", " : "."}
        </span>
      </span>
    );
  });

  let software = technology.software;
  const softwareKeys = Object.keys(software);
  software = softwareKeys.map((cat, i) => {
    const category = software[cat];
    const categoryKeys = Object.keys(category);
    return (
      <div key={i} className="cv-item indent-1">
        <span className="bold">{cat}</span>:&nbsp;
        {categoryKeys.map((app, j) => {
          const application = category[app];
          return (
            <span key={j} className="libs">
              {app}
              {application.libraries && (
                <>
                  &nbsp; (
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

  let hardware = technology.hardware;
  const hardwareKeys = Object.keys(hardware);

  return (
    <>
      <div className="cv-subsection">
        <span className="bold">Programming</span>
        <div className="indent-1 langs">{languages}</div>
      </div>
      <div className="cv-subsection">
        <h6 className="bold">Software</h6>
        {software}
      </div>
    </>
  );
}
